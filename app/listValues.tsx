
import { DEFAULT_IMPERIAL_COUNT, IMPERIAL_TEMPERATURE_VALUES, RESULT_VALUES_TYPE, VALUES_TYPES } from "@/stores/const/listValues";
import { useGlobalStore } from "@/stores/globalStore";
import { useValuesStore } from "@/stores/valuesStore";
import { listValuesScreenStyles } from "@/styles/listValuesScreenStyles";
import { useState } from "react";
import { FlatList, ImageBackground, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//
const defaultBackground = require('../assets/images/backgrounds/bg_00.jpg')
const fahrenheitToCelsiusFormula = '°C = (°F - 32) * 5 / 9'

export default function ListValues() {
    const getListValues = useValuesStore(state => state.getListValues)
    const currentAppLanguage = useGlobalStore(state => state.currentLanguage)
    const defaultListValues = getListValues(VALUES_TYPES.ALL, currentAppLanguage)
    const [currentListValues, setCurrentValues] = useState(defaultListValues)

    const renderItem = ({ item }: { item: RESULT_VALUES_TYPE }) => (
        <View style={listValuesScreenStyles.sectionsButton}>
            <Text style={listValuesScreenStyles.valuesTitle}>{item.type}</Text>
            <FlatList
                data={item.values}
                style={listValuesScreenStyles.valuesContainer}
                renderItem={({ item }) => (
                    <View style={listValuesScreenStyles.valuesSectionsContainer}>
                        <View style={listValuesScreenStyles.valuesImperial}>
                            <Text style={listValuesScreenStyles.sectionButtonTitle}>
                                {DEFAULT_IMPERIAL_COUNT + ' ' + item.imperialTypeValue}
                            </Text>
                        </View>
                        <View style={listValuesScreenStyles.valuesMetric}>
                            <Text style={listValuesScreenStyles.sectionButtonTitle}>
                                {item.imperialTypeValue === IMPERIAL_TEMPERATURE_VALUES.FAHRENHEIT ? fahrenheitToCelsiusFormula : item.value + item.metricTypeValue}
                            </Text>
                        </View>
                    </View>

                )}
            />
        </View>
    );
    return (
        <SafeAreaView style={listValuesScreenStyles.mainContainer}>
            <ImageBackground
                style={listValuesScreenStyles.mainBackground}
                source={defaultBackground}
                resizeMode="cover"
            >
                <Text>listValues</Text>
                <View style={listValuesScreenStyles.listValuesContainer}>
                    <FlatList
                        data={currentListValues.filter((item) => item.values)}

                        renderItem={renderItem}
                    />
                </View>

            </ImageBackground>
        </SafeAreaView>

    )
}
