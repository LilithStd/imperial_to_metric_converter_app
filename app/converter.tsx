import { GLOBAL_VALUES_TYPES } from "@/constants/global";
import { convertImperialToMetric } from "@/helpers/helpersFunctions";
import { RESULT_VALUES_TYPE, VALUES_TYPES } from "@/stores/const/listValues";
import { useGlobalStore } from "@/stores/globalStore";
import { useValuesStore } from "@/stores/valuesStore";
import { converterScreenStyles } from "@/styles/converterScreenStyles";
import { useEffect, useState } from "react";
import { FlatList, ImageBackground, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SwitchValueArrow from '../assets/images/icons/repeat.svg';

const defaultBackground = require('../assets/images/backgrounds/bg_00.jpg')
type ResultAfterConvertationType = {
    name: string,
    values: string
}

export default function Convertor() {
    const valuesListStore = useValuesStore(state => state.getListValues)
    const currentLanguage = useGlobalStore(state => state.currentLanguage)
    const valuesListToView = valuesListStore(VALUES_TYPES.ALL, currentLanguage)
    const [valueMetric, setValueMetric] = useState<ResultAfterConvertationType[]>([
        { name: '', values: '' }
    ])
    const [valueImperial, setValueImperial] = useState<ResultAfterConvertationType[]>([{ name: '', values: '' }])
    const [resultAfterConvertion, setResultAfterConvertion] = useState<ResultAfterConvertationType>({ name: '', values: '' })
    const resultView = (type: GLOBAL_VALUES_TYPES, values: number) => {
        const resultToView = convertImperialToMetric(type, Number(valueImperial), values)
        return resultToView.toFixed(2).toString()

    }

    useEffect(() => {
        if (valueImperial.some((item) => item.name !== '')) {

        }
    }, [valueMetric, valueImperial])

    const renderItem = ({ item }: { item: RESULT_VALUES_TYPE }) => (
        <View style={converterScreenStyles.valuesBlockContainer}>
            <View style={converterScreenStyles.valuesBlockBackground}>
                <Text style={converterScreenStyles.valuesTitle}>{item.type}</Text>
                <FlatList
                    data={item.values}
                    nestedScrollEnabled={true}
                    renderItem={({ item }) => (
                        <View style={converterScreenStyles.valuesSectionsContainer}>
                            <View style={converterScreenStyles.valuesItemContainer}>
                                <TextInput
                                    style={converterScreenStyles.valuesItem}
                                    placeholder={'1'}
                                    keyboardType='numeric'
                                    value={valueImperial.find((element) => element.name === item.imperialTypeValue)?.values || ''}
                                    onChangeText={(text) => {
                                        const existingIndex = valueImperial.findIndex(
                                            element => element.name === item.imperialTypeValue
                                        );

                                        if (existingIndex !== -1) {
                                            const updated = [...valueImperial];
                                            updated[existingIndex].values = text;
                                            setValueImperial(updated);
                                        } else {
                                            setValueImperial([
                                                ...valueImperial,
                                                { name: item.imperialTypeValue, values: text }
                                            ]);
                                        }
                                    }}

                                />
                                <View
                                    style={converterScreenStyles.valuesimperialTitleItemContainer}>
                                    <Text>{item.imperialTypeValue}</Text>
                                </View>
                            </View>
                            <SwitchValueArrow />
                            <View style={converterScreenStyles.valuesItemContainer}>
                                <TextInput
                                    style={converterScreenStyles.valuesItem}
                                    placeholder={item.value.toString()}
                                    keyboardType='numeric'
                                    value={valueMetric.find((element) => element.name === item.metricTypeValue)?.values || ''}
                                    onChangeText={(text) => {
                                        const existingIndex = valueMetric.findIndex(
                                            element => element.name === item.metricTypeValue
                                        );

                                        if (existingIndex !== -1) {
                                            const updated = [...valueMetric];
                                            updated[existingIndex].values = text;
                                            setValueMetric(updated);
                                        } else {
                                            setValueMetric([
                                                ...valueMetric,
                                                { name: item.metricTypeValue, values: text }
                                            ]);
                                        }
                                    }}
                                />
                                <View
                                    style={converterScreenStyles.valuesMetricTitleItemContainer}>
                                    <Text>{item.metricTypeValue}</Text>
                                </View>
                            </View>
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
