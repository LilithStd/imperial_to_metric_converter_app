import { AnimatedGradientBackground } from "@/components/animatedGradientBackground";
import { GLOBAL_VALUES_TYPES, TEMPERATURE_TYPE } from "@/constants/global";
import { LIST_LABEL } from "@/helpers/helpersConst";
import { checkAvailibeValueToInput, convertImperialToMetric, convertTemperature, currentGradientColors, emptyFavoritesDescription, translatedLabelForCurrentLanguage } from "@/helpers/helpersFunctions";
import { ANIMATED_TYPES } from "@/stores/const/animatedBackgroundConsts";
import { RESULT_VALUES_TYPE, VALUES_TYPES } from "@/stores/const/listValues";
import { useGlobalStore } from "@/stores/globalStore";
import { useThemeStore } from "@/stores/themeStore";
import { useValuesStore } from "@/stores/valuesStore";
import { converterScreenStyles } from "@/styles/converterScreenStyles";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
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
    const currentTheme = useThemeStore(state => state.currentTheme)
    const colorScheme = useThemeStore(state => state.colorScheme)

    const valuesListToView = valuesListStore(VALUES_TYPES.ALL, currentLanguage)
    const [activeInputId, setActiveInputId] = useState<string | null>(null)
    const [activeGroup, setActiveGroup] = useState(VALUES_TYPES.ALL)
    const [currentGroupValues, setCurrentGroupValues] = useState(valuesListStore(VALUES_TYPES.ALL, currentLanguage))
    const [resultAfterConvertion, setResultAfterConvertion] = useState<ResultAfterConvertationType[]>([])


    const [tempImperialValue, setTempImperialValue] = useState('')
    const [tempMetricValue, setTempMetricValue] = useState('')

    const [invalidInputValue, setInvalidInputValue] = useState(false)
    const [updateFavorites, setUpdateFavorites] = useState(false)

    const valuesGroups = [
        { type: VALUES_TYPES.ALL, label: translatedLabelForCurrentLanguage(LIST_LABEL.ALL, currentLanguage), values: [{ id: 'all', imperialTypeValue: '', metricTypeValue: '', value: 0 }] },
        { type: VALUES_TYPES.FAVORITES, label: translatedLabelForCurrentLanguage(LIST_LABEL.FAVORITES, currentLanguage), values: [{ id: 'favorites', imperialTypeValue: '', metricTypeValue: '', value: 0 }] },
        ...valuesListToView
    ];


    const handleImperialChange = (text: string, id: string, conversionValue: number) => {
        if (text === '') {
            setTempImperialValue('');
            setTempMetricValue('');
            return;
        }

        const incomingValue = checkAvailibeValueToInput(text);
        if (incomingValue) {
            setTempImperialValue(text);

            const num = parseFloat(text);
            if (!isNaN(num)) {
                const convertedValue =
                    id === TEMPERATURE_TYPE.FAHRENHEIT
                        ? convertTemperature(text, TEMPERATURE_TYPE.FAHRENHEIT)
                        : text.includes('.') ?
                            convertImperialToMetric(GLOBAL_VALUES_TYPES.IMPERIAL, num, conversionValue).toFixed(2)
                            : convertImperialToMetric(GLOBAL_VALUES_TYPES.IMPERIAL, num, conversionValue).toString();

                setTempMetricValue(convertedValue);
            } else {
                setTempMetricValue('');
            }
        }
    };


    const handleMetricChange = (text: string, id: string, conversionValue: number) => {
        setTempMetricValue(text)

        const num = parseFloat(text)
        if (!isNaN(num)) {
            const convertedValue = id === TEMPERATURE_TYPE.FAHRENHEIT ? convertTemperature(text, TEMPERATURE_TYPE.CELSIUS) : convertImperialToMetric(GLOBAL_VALUES_TYPES.METRIC, num, conversionValue).toFixed(2)
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
        setActiveInputId(null)
    }


    const getDisplayValue = (id: string, type: GLOBAL_VALUES_TYPES) => {
        if (activeInputId === id) {
            return type === GLOBAL_VALUES_TYPES.IMPERIAL ? tempImperialValue : tempMetricValue
        }

        const savedItem = resultAfterConvertion.find(item => item.id === id)
        if (savedItem) {
            return type === GLOBAL_VALUES_TYPES.IMPERIAL ? savedItem.imperialValues : savedItem.metricValues
        }

        return ''
    }

    useEffect(() => {
        setCurrentGroupValues(valuesListStore(activeGroup, currentLanguage))
        setUpdateFavorites(false)
    }, [activeGroup, updateFavorites])

    const renderGroupItem = ({ item }: { item: RESULT_VALUES_TYPE }) => (
        <TouchableOpacity
            style={[converterScreenStyles.valuesGroupItem, activeGroup === item.type ? { backgroundColor: colorScheme.button[0], borderRadius: 10 } : '']}
            onPress={() => setActiveGroup(item.type)}
        >
            <Text style={[
                converterScreenStyles.valuesGroupItemTitle,
                { color: colorScheme.text }
            ]}>{item.label}</Text>
        </TouchableOpacity>
    )

    const renderItem = ({ item }: { item: RESULT_VALUES_TYPE }) => (
        <View style={converterScreenStyles.valuesBlockContainer}>
            <View style={[
                converterScreenStyles.valuesBlockBackground,

            ]}>
                <Text style={[converterScreenStyles.valuesTitle, { color: colorScheme.text }]}>{item.label}</Text>
                <FlatList
                    data={item.values}
                    nestedScrollEnabled={true}
                    renderItem={({ item }) => (
                        <View style={converterScreenStyles.valuesSectionsContainer}>
                            <View style={[
                                converterScreenStyles.buttonBackground,

                            ]}>


                                <LinearGradient
                                    style={[
                                        converterScreenStyles.buttonBackground,
                                        { borderColor: colorScheme.border }

                                    ]}
                                    colors={currentGradientColors(colorScheme.button)}
                                >
                                    <View style={converterScreenStyles.valuesItemContainer}>
                                        {invalidInputValue &&
                                            <View>
                                                <Text>incorrect input value need only 1-9 and . for input</Text>
                                            </View>}
                                        <TextInput
                                            style={[
                                                converterScreenStyles.valuesItem,
                                                { color: colorScheme.text }
                                            ]}
                                            placeholder={'1'}
                                            placeholderTextColor={colorScheme.text}
                                            keyboardType='decimal-pad'
                                            value={getDisplayValue(item.id, GLOBAL_VALUES_TYPES.IMPERIAL)}
                                            onFocus={() => handleFocus(item.id)}
                                            onChangeText={(text) => handleImperialChange(text, item.id, item.value)}
                                            onBlur={() => handleBlur(item.id)}
                                        />
                                        <View style={converterScreenStyles.valuesImperialTitleItemContainer}>
                                            <Text style={[
                                                converterScreenStyles.valuesItem,
                                                { color: colorScheme.text }
                                            ]}>{item.imperialTypeValue}</Text>
                                        </View>
                                    </View>
                                </LinearGradient>
                            </View>

                            <SwitchValueArrow stroke={colorScheme.text} />
                            <TouchableOpacity onPress={() => {
                                addFavorites(item);
                                setUpdateFavorites(true)
                            }}
                            >
                                <FavoritesIcon
                                    stroke={colorScheme.text}
                                    fill={checkIsFavorites(item.id) ? 'red' : 'transparent'}
                                />
                            </TouchableOpacity>

                            <LinearGradient
                                style={[
                                    converterScreenStyles.buttonBackground,
                                    { borderColor: colorScheme.border }

                                ]}

                                colors={currentGradientColors(colorScheme.button)}

                            >
                                <View style={converterScreenStyles.valuesItemContainer}>
                                    <TextInput
                                        style={[
                                            converterScreenStyles.valuesItem,
                                            { color: colorScheme.text }
                                        ]}
                                        placeholderTextColor={colorScheme.text}
                                        placeholder={item.value.toString()}
                                        keyboardType='decimal-pad'
                                        value={getDisplayValue(item.id, GLOBAL_VALUES_TYPES.METRIC)}
                                        onFocus={() => handleFocus(item.id)}
                                        onChangeText={(text) => handleMetricChange(text, item.id, item.value)}
                                        onBlur={() => handleBlur(item.id)}
                                    />
                                    <View style={converterScreenStyles.valuesMetricTitleItemContainer}>
                                        <Text style={[
                                            converterScreenStyles.valuesItem,
                                            { color: colorScheme.text }
                                        ]}>{item.metricTypeValue}</Text>
                                    </View>
                                </View>
                            </LinearGradient>
                        </View>
                    )}
                    ListEmptyComponent={
                        <Text style={[
                            converterScreenStyles.valuesGroupEmptyFavorites,
                            { color: colorScheme.text }
                        ]}>{emptyFavoritesDescription(currentLanguage)}</Text>
                    }
                />
            </View>
        </View>
    )

    return (
        <SafeAreaView style={converterScreenStyles.mainContainer}>
            <AnimatedGradientBackground
                typeAnimate={ANIMATED_TYPES.WITH_GRADIENT}
            >


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
            </AnimatedGradientBackground>
        </SafeAreaView>
    )
}