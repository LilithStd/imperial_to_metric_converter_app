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

export default function Convertor() {
    const valuesListStore = useValuesStore(state => state.getListValues)
    const currentLanguage = useGlobalStore(state => state.currentLanguage)
    const valuesListToView = valuesListStore(VALUES_TYPES.ALL, currentLanguage)
    const [valueMetric, setValueMetric] = useState('')
    const [valueImperial, setValueImperial] = useState('')
    const resultView = (type: GLOBAL_VALUES_TYPES, values: number) => {
        const resultToView = convertImperialToMetric(type, Number(valueImperial), values)
        return resultToView.toFixed(2).toString()

    }

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
                                    value={valueImperial}
                                    onChangeText={setValueImperial}

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
                                    value={resultView(GLOBAL_VALUES_TYPES.IMPERIAL, item.value)}
                                    onChangeText={setValueMetric}
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
