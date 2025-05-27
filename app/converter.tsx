import { GLOBAL_VALUES_TYPES } from "@/constants/global";
import { convertImperialToMetric } from "@/helpers/helpersFunctions";
import { RESULT_VALUES_TYPE, VALUES_TYPES } from "@/stores/const/listValues";
import { useGlobalStore } from "@/stores/globalStore";
import { useValuesStore } from "@/stores/valuesStore";
import { converterScreenStyles } from "@/styles/converterScreenStyles";
import { useState } from "react";
import { FlatList, ImageBackground, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SwitchValueArrow from '../assets/images/icons/repeat.svg';
const defaultBackground = require('../assets/images/backgrounds/bg_00.jpg')
const buttonBackground = require('../assets/images/buttons/greenButton(Small).png')
type ResultAfterConvertationType = {
    name: string,
    values: string
}

export default function Convertor() {
    const valuesListStore = useValuesStore(state => state.getListValues)
    const currentLanguage = useGlobalStore(state => state.currentLanguage)
    const valuesListToView = valuesListStore(VALUES_TYPES.ALL, currentLanguage)
    const [valueMetric, setValueMetric] = useState('')
    const [valueImperial, setValueImperial] = useState('')
    const [activeInput, setActiveInput] = useState<'imperial' | 'metric'>('imperial');
    const [resultAfterConvertion, setResultAfterConvertion] = useState<ResultAfterConvertationType>({ name: '', values: '' })
    const resultView = (type: GLOBAL_VALUES_TYPES, values: number) => {
        const resultToView = convertImperialToMetric(type, Number(valueImperial), values)
        return resultToView.toFixed(2).toString()

    }

    const handleImperialChange = (text: string, value: number) => {
        setValueImperial(text);
        setActiveInput('imperial');

        const num = parseFloat(text);
        if (!isNaN(num)) {
            setValueMetric((convertImperialToMetric(GLOBAL_VALUES_TYPES.IMPERIAL, num, value)).toFixed(2));
        } else {
            setValueMetric('');
        }
    };

    const handleMetricChange = (text: string, value: number) => {
        setValueMetric(text);
        setActiveInput('metric');

        const num = parseFloat(text);
        if (!isNaN(num)) {
            setValueImperial((convertImperialToMetric(GLOBAL_VALUES_TYPES.METRIC, num, value)).toFixed(2));
        } else {
            setValueImperial('');
        }
    };

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
                                        value={''}
                                        onFocus={() => setActiveInput('imperial')}
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
                                        value={''}
                                        onFocus={() => setActiveInput('metric')}
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
