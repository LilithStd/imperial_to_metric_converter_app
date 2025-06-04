import { GLOBAL_VALUES_TYPES } from "@/constants/global";
import { convertImperialToMetric, isExistsValueIsArray } from "@/helpers/helpersFunctions";
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
    //favorites_store
    const favoritesList = useValuesStore(state => state.favoritesValues)
    const checkIsFavorites = useValuesStore(state => state.checkIsFavorites)
    const addFavorites = useValuesStore(state => state.setFavoritesValues)
    //
    const valuesListToView = valuesListStore(VALUES_TYPES.ALL, currentLanguage)
    const [valueMetric, setValueMetric] = useState('')
    const [valueImperial, setValueImperial] = useState('')
    const [activeInput, setActiveInput] = useState('');
    const [activeGroup, setActiveGroup] = useState(VALUES_TYPES.ALL)

    const [currentGroupValues, setCurrentGroupValues] = useState(valuesListStore(VALUES_TYPES.ALL, currentLanguage))

    const [resultAfterConvertion, setResultAfterConvertion] = useState<ResultAfterConvertationType[]>([])

    const valuesGroups = [{ type: VALUES_TYPES.ALL, values: [{ id: 'all', imperialTypeValue: '', metricTypeValue: '', value: 0 }] }, { type: VALUES_TYPES.FAVORITES, values: [{ id: 'favorites', imperialTypeValue: '', metricTypeValue: '', value: 0 }] }, ...valuesListToView];

    const handleImperialChange = (text: string, value: number) => {
        setValueImperial(text);
        const num = parseFloat(text);
        if (!isNaN(num)) {
            setValueMetric((convertImperialToMetric(GLOBAL_VALUES_TYPES.IMPERIAL, num, value)).toFixed(2));
        }
        // else {
        //     setValueMetric('');
        // }
    };

    const handleMetricChange = (text: string, value: number) => {
        setValueMetric(text);
        const num = parseFloat(text);
        if (!isNaN(num)) {
            setValueImperial((convertImperialToMetric(GLOBAL_VALUES_TYPES.METRIC, num, value)).toFixed(2));
        }
        //  else {
        //     setValueImperial('');
        // }
    };

    const handleEndEditing = () => {

    }
    const getImperialValue = (id: string) => {
        if (isExistsValueIsArray(resultAfterConvertion, id)) {
            const found = resultAfterConvertion.find((el) => el.id === id);
            return found?.imperialValues
        } else { return activeInput === id ? valueImperial : '' }
    };

    const getMetricValue = (id: string) => {
        const found = resultAfterConvertion.find((el) => el.id === id);
        return found?.metricValues ?? valueMetric;
    };
    // const handleFocus = (id: string) => {
    //     setActiveInput(id);
    //     setResultAfterConvertion((prev) => {
    //         const index = prev.findIndex(item => item.id === id);

    //         if (index !== -1) {
    //             const updated = [...prev];
    //             updated[index] = {
    //                 ...updated[index],
    //                 imperialValues: valueImperial,
    //                 metricValues: valueMetric,
    //             };
    //             return updated;
    //         } else {
    //             return [
    //                 ...prev,
    //                 { id, imperialValues: valueImperial, metricValues: valueMetric },
    //             ];
    //         }
    //     });

    //     setValueImperial('');
    //     setValueMetric('');
    // };

    const handleFocus = (id: string) => {
        if (activeInput !== '' && activeInput !== id) {
            console.log('bip');
            if (valueImperial !== '') {
                console.log('imperial  not empty');

            }


        } else {
            setActiveInput(id);
        }


        // if (isExistsValueIsArray(resultAfterConvertion, id)) {
        //     console.log('exists');

        // }

        // if (isExistsValueIsArray(resultAfterConvertion, id)) {
        //     setResultAfterConvertion((prev) => {
        //         return prev.map((item) => item.id === id
        //             ? { ...item, imperialValues: valueImperial, metricValues: valueMetric }
        //             : item
        //         );
        //     });
        //     setValueImperial(resultAfterConvertion.find((item) => item.id === id)?.imperialValues ?? valueImperial)
        //     setValueMetric('')
        // } else {
        //     if (valueImperial !== '') {
        //         setResultAfterConvertion([{ id: id, imperialValues: valueImperial, metricValues: valueMetric }]);
        //     } else {
        //         console.log('impearial empty');
        //     }


        // }


    };

    const renderGroupItem = ({ item }: { item: RESULT_VALUES_TYPE }) => (
        <TouchableOpacity style={converterScreenStyles.valuesGroupItem}
            onPress={() => setActiveGroup(item.type)}
        >
            <Text style={converterScreenStyles.valuesGroupItemTitle}>{item.type}</Text>
        </TouchableOpacity>

    )

    useEffect(() => {
        setCurrentGroupValues(valuesListStore(activeGroup, currentLanguage))
    }, [activeGroup])

    const renderItem = ({ item }: { item: RESULT_VALUES_TYPE }) => (
        <View style={converterScreenStyles.valuesBlockContainer}>
            <View style={converterScreenStyles.valuesBlockBackground}>
                <Text style={converterScreenStyles.valuesTitle}>{item.type}</Text>
                <FlatList
                    data={item.values}
                    nestedScrollEnabled={true}
                    renderItem={
                        ({ item }) => (
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
                                            value={getImperialValue(item.id)}
                                            onFocus={() => handleFocus(item.id)}
                                            onChangeText={(text) => handleImperialChange(text, item.value)}
                                            onEndEditing={handleEndEditing}
                                        />
                                        <View
                                            style={converterScreenStyles.valuesImperialTitleItemContainer}>
                                            <Text style={converterScreenStyles.valuesItem}>{item.imperialTypeValue}</Text>
                                        </View>

                                    </View>
                                </ImageBackground>
                                <SwitchValueArrow />

                                {checkIsFavorites(item.id)
                                    ?
                                    <TouchableOpacity onPress={() => addFavorites(item)}>
                                        <FavoritesIcon fill={'red'} />
                                    </TouchableOpacity>

                                    : <TouchableOpacity onPress={() => addFavorites(item)}>
                                        <FavoritesIcon />
                                    </TouchableOpacity>}

                                <ImageBackground
                                    style={converterScreenStyles.buttonBackground}
                                    source={buttonBackground}
                                >
                                    <View style={converterScreenStyles.valuesItemContainer}>
                                        <TextInput
                                            style={converterScreenStyles.valuesItem}
                                            placeholder={item.value.toString()}
                                            keyboardType='numeric'
                                            value={getMetricValue(item.id)}
                                            onFocus={() => handleFocus(item.id)}
                                            onChangeText={(text) => handleMetricChange(text, item.value)}
                                        />
                                        <View
                                            style={converterScreenStyles.valuesMetricTitleItemContainer}>
                                            <Text style={converterScreenStyles.valuesItem}>{item.metricTypeValue}</Text>
                                        </View>
                                    </View>
                                </ImageBackground>
                            </View>
                        )}
                />
            </View>
        </View >
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
