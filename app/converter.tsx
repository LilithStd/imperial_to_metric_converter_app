import { GLOBAL_VALUES_TYPES } from "@/constants/global";
import { convertImperialToMetric } from "@/helpers/helpersFunctions";
import { RESULT_VALUES_TYPE, VALUES_TYPES } from "@/stores/const/listValues";
import { useGlobalStore } from "@/stores/globalStore";
import { useValuesStore } from "@/stores/valuesStore";
import { converterScreenStyles } from "@/styles/converterScreenStyles";
import { useState } from "react";
import { FlatList, ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SwitchValueArrow from '../assets/images/icons/repeat.svg';
const defaultBackground = require('../assets/images/backgrounds/bg_00.jpg')
const buttonBackground = require('../assets/images/buttons/greenButton(Small).png')
type ResultAfterConvertationType = {
    id: string,
    imperialValues: string,
    metricValues: string
}

export default function Convertor() {
    const valuesListStore = useValuesStore(state => state.getListValues)
    const currentLanguage = useGlobalStore(state => state.currentLanguage)
    const valuesListToView = valuesListStore(VALUES_TYPES.ALL, currentLanguage)
    const [valueMetric, setValueMetric] = useState('')
    const [valueImperial, setValueImperial] = useState('')
    const [activeInput, setActiveInput] = useState('');
    const [activeGroup, setActiveGroup] = useState(VALUES_TYPES.ALL)

    const [resultAfterConvertion, setResultAfterConvertion] = useState<ResultAfterConvertationType[]>([])
    // const resultView = (type: GLOBAL_VALUES_TYPES, values: number) => {
    //     const resultToView = convertImperialToMetric(type, Number(valueImperial), values)
    //     return resultToView.toFixed(2).toString()

    // }
    const valuesGroups = [{ type: VALUES_TYPES.ALL, values: [{ id: 'all', imperialTypeValue: '', metricTypeValue: '', value: 0 }] }, ...valuesListToView];

    const handleImperialChange = (text: string, value: number) => {
        setValueImperial(text);
        const num = parseFloat(text);
        if (!isNaN(num)) {
            setValueMetric((convertImperialToMetric(GLOBAL_VALUES_TYPES.IMPERIAL, num, value)).toFixed(2));
        } else {
            setValueMetric('');
        }
    };

    const handleMetricChange = (text: string, value: number) => {
        setValueMetric(text);
        const num = parseFloat(text);
        if (!isNaN(num)) {
            setValueImperial((convertImperialToMetric(GLOBAL_VALUES_TYPES.METRIC, num, value)).toFixed(2));
        } else {
            setValueImperial('');
        }
    };


    const handleFocus = (id: string) => {
        setActiveInput(id);
        setResultAfterConvertion((prev) => {
            const index = prev.findIndex(item => item.id === id);

            if (index !== -1) {
                // Элемент уже есть — обновляем значения
                const updated = [...prev];
                updated[index] = {
                    ...updated[index],
                    imperialValues: valueImperial,
                    metricValues: valueMetric,
                };
                return updated;
            } else {
                // Элемента нет — добавляем новый
                return [
                    ...prev,
                    { id, imperialValues: valueImperial, metricValues: valueMetric },
                ];
            }
        });

        setValueImperial('');
        setValueMetric('');
    };

    const formatValueToView = () => {
        const exists = resultAfterConvertion.find((item) => item.id === activeInput)
        return exists ? exists.imperialValues : valueImperial
    }

    const getImperialValue = (id: string): string => {
        const existingItem = resultAfterConvertion.find(el => el.id === id);
        return existingItem ? existingItem.imperialValues : valueImperial;
    };

    const resultView = resultAfterConvertion.find(item => item.id === activeInput)?.imperialValues || valueImperial;
    // const imperialValue = resultAfterConvertion.find(el => el.id === item.id)?.imperialValues ?? '';
    // const metricValue = resultAfterConvertion.find(el => el.id === item.id)?.metricValues ?? '';
    const renderGroupItem = ({ item }: { item: RESULT_VALUES_TYPE }) => (
        <TouchableOpacity style={converterScreenStyles.valuesGroupItem}>
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
                                        value={activeInput === item.id ? valueImperial : ''}
                                        // value={resultView}
                                        onFocus={() => handleFocus(item.id)}
                                        onChangeText={(text) => handleImperialChange(text, item.value)}
                                    />
                                    <View
                                        style={converterScreenStyles.valuesImperialTitleItemContainer}>
                                        <Text style={converterScreenStyles.valuesItem}>{item.imperialTypeValue}</Text>
                                    </View>

                                </View>
                            </ImageBackground>
                            <SwitchValueArrow />
                            <ImageBackground
                                style={converterScreenStyles.buttonBackground}
                                source={buttonBackground}
                            >
                                <View style={converterScreenStyles.valuesItemContainer}>
                                    <TextInput
                                        style={converterScreenStyles.valuesItem}
                                        placeholder={item.value.toString()}
                                        keyboardType='numeric'
                                        value={activeInput === item.id ? valueMetric : ''}
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
                    data={valuesListToView}
                    renderItem={renderItem}
                    style={converterScreenStyles.valuesListContainer}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />


            </ImageBackground>

        </SafeAreaView>

    )
}
