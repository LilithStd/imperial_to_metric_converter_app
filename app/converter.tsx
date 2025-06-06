import { GLOBAL_VALUES_TYPES } from "@/constants/global";
import { convertImperialToMetric } from "@/helpers/helpersFunctions";
import { RESULT_VALUES_TYPE, VALUES_TYPES } from "@/stores/const/listValues";
import { useGlobalStore } from "@/stores/globalStore";
import { useValuesStore } from "@/stores/valuesStore";
import { converterScreenStyles } from "@/styles/converterScreenStyles";
import { useEffect, useState } from "react";
import { FlatList, ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FavoritesIcon from '../assets/images/icons/heart(empty).svg';
import SwitchValueArrow from '../assets/images/icons/repeat.svg';
const defaultBackground = require('../assets/images/backgrounds/bg_00.jpg')
const buttonBackground = require('../assets/images/buttons/greenButton(Small).png')
export type ResultAfterConvertationType = {
    id: string,
    imperialValues: string,
    metricValues: string
}

export default function Convertor() {
    const valuesListStore = useValuesStore(state => state.getListValues)
    const currentLanguage = useGlobalStore(state => state.currentLanguage)
    const favoritesList = useValuesStore(state => state.favoritesValues)
    const checkIsFavorites = useValuesStore(state => state.checkIsFavorites)
    const addFavorites = useValuesStore(state => state.setFavoritesValues)

    const valuesListToView = valuesListStore(VALUES_TYPES.ALL, currentLanguage)
    const [activeInputId, setActiveInputId] = useState<string | null>(null)
    const [activeGroup, setActiveGroup] = useState(VALUES_TYPES.ALL)
    const [currentGroupValues, setCurrentGroupValues] = useState(valuesListStore(VALUES_TYPES.ALL, currentLanguage))
    const [resultAfterConvertion, setResultAfterConvertion] = useState<ResultAfterConvertationType[]>([])

    // Локальные значения для активного input
    const [tempImperialValue, setTempImperialValue] = useState('')
    const [tempMetricValue, setTempMetricValue] = useState('')

    const valuesGroups = [
        { type: VALUES_TYPES.ALL, values: [{ id: 'all', imperialTypeValue: '', metricTypeValue: '', value: 0 }] },
        { type: VALUES_TYPES.FAVORITES, values: [{ id: 'favorites', imperialTypeValue: '', metricTypeValue: '', value: 0 }] },
        ...valuesListToView
    ];

    // Обработчик изменения imperial значения
    const handleImperialChange = (text: string, id: string, conversionValue: number) => {
        setTempImperialValue(text)

        const num = parseFloat(text)
        if (!isNaN(num)) {
            const convertedValue = convertImperialToMetric(GLOBAL_VALUES_TYPES.IMPERIAL, num, conversionValue).toFixed(2)
            setTempMetricValue(convertedValue)
        } else {
            setTempMetricValue('')
        }
    }


    const handleMetricChange = (text: string, id: string, conversionValue: number) => {
        setTempMetricValue(text)

        const num = parseFloat(text)
        if (!isNaN(num)) {
            const convertedValue = convertImperialToMetric(GLOBAL_VALUES_TYPES.METRIC, num, conversionValue).toFixed(2)
            setTempImperialValue(convertedValue)
        } else {
            setTempImperialValue('')
        }
    }


    const handleFocus = (id: string) => {
        const existingItem = resultAfterConvertion.find(item => item.id === id)

        if (existingItem) {
            setTempImperialValue(existingItem.imperialValues)
            setTempMetricValue(existingItem.metricValues)
        } else {
            setTempImperialValue('')
            setTempMetricValue('')
        }

        setActiveInputId(id)
    }


    const handleBlur = (id: string) => {
        if (tempImperialValue.trim() !== '' || tempMetricValue.trim() !== '') {
            setResultAfterConvertion(prev => {
                const existingIndex = prev.findIndex(item => item.id === id)

                if (existingIndex !== -1) {
                    return prev.map(item =>
                        item.id === id
                            ? { ...item, imperialValues: tempImperialValue, metricValues: tempMetricValue }
                            : item
                    )
                } else {
                    return [...prev, {
                        id,
                        imperialValues: tempImperialValue,
                        metricValues: tempMetricValue
                    }]
                }
            })
        }

        setActiveInputId(null)
    }


    const getDisplayValue = (id: string, type: 'imperial' | 'metric') => {
        // Если это активный input - показываем временные значения
        if (activeInputId === id) {
            return type === 'imperial' ? tempImperialValue : tempMetricValue
        }

        // Иначе ищем сохраненные значения
        const savedItem = resultAfterConvertion.find(item => item.id === id)
        if (savedItem) {
            return type === 'imperial' ? savedItem.imperialValues : savedItem.metricValues
        }

        return ''
    }

    useEffect(() => {
        setCurrentGroupValues(valuesListStore(activeGroup, currentLanguage))
    }, [activeGroup])

    const renderGroupItem = ({ item }: { item: RESULT_VALUES_TYPE }) => (
        <TouchableOpacity
            style={converterScreenStyles.valuesGroupItem}
            onPress={() => setActiveGroup(item.type)}
        >
            <Text style={converterScreenStyles.valuesGroupItemTitle}>{item.type}</Text>
        </TouchableOpacity>
    )

    const renderItem = ({ item }: { item: RESULT_VALUES_TYPE }) => (
        <View style={converterScreenStyles.valuesBlockContainer}>
            <View style={converterScreenStyles.valuesBlockBackground}>
                <Text style={converterScreenStyles.valuesTitle}>{item.type}</Text>
                <FlatList
                    data={item.values}
                    nestedScrollEnabled={true}
                    renderItem={({ item }) => (
                        <View style={converterScreenStyles.valuesSectionsContainer}>
                            <ImageBackground
                                style={converterScreenStyles.buttonBackground}
                                source={buttonBackground}
                            >
                                <View style={converterScreenStyles.valuesItemContainer}>
                                    <TextInput
                                        style={converterScreenStyles.valuesItem}
                                        placeholder={'1'}
                                        keyboardType='numeric'
                                        value={getDisplayValue(item.id, 'imperial')}
                                        onFocus={() => handleFocus(item.id)}
                                        onChangeText={(text) => handleImperialChange(text, item.id, item.value)}
                                        onBlur={() => handleBlur(item.id)}
                                    />
                                    <View style={converterScreenStyles.valuesImperialTitleItemContainer}>
                                        <Text style={converterScreenStyles.valuesItem}>{item.imperialTypeValue}</Text>
                                    </View>
                                </View>
                            </ImageBackground>

                            <SwitchValueArrow />

                            {checkIsFavorites(item.id) ? (
                                <TouchableOpacity onPress={() => addFavorites(item)}>
                                    <FavoritesIcon fill={'red'} />
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity onPress={() => addFavorites(item)}>
                                    <FavoritesIcon />
                                </TouchableOpacity>
                            )}

                            <ImageBackground
                                style={converterScreenStyles.buttonBackground}
                                source={buttonBackground}
                            >
                                <View style={converterScreenStyles.valuesItemContainer}>
                                    <TextInput
                                        style={converterScreenStyles.valuesItem}
                                        placeholder={item.value.toString()}
                                        keyboardType='numeric'
                                        value={getDisplayValue(item.id, 'metric')}
                                        onFocus={() => handleFocus(item.id)}
                                        onChangeText={(text) => handleMetricChange(text, item.id, item.value)}
                                        onBlur={() => handleBlur(item.id)}
                                    />
                                    <View style={converterScreenStyles.valuesMetricTitleItemContainer}>
                                        <Text style={converterScreenStyles.valuesItem}>{item.metricTypeValue}</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                    )}
                />
            </View>
        </View>
    )

    return (
        <SafeAreaView style={converterScreenStyles.mainContainer}>
            <ImageBackground
                source={defaultBackground}
                resizeMode="cover"
                style={converterScreenStyles.mainBackground}
            >
                <Text>Converter Values</Text>

                <View>
                    <FlatList
                        data={valuesGroups}
                        renderItem={renderGroupItem}
                        style={converterScreenStyles.valuesGroupContainer}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

                <FlatList
                    data={currentGroupValues}
                    renderItem={renderItem}
                    style={converterScreenStyles.valuesListContainer}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}