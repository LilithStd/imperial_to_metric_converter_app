
import { AnimatedGradientBackground } from "@/components/animatedGradientBackground";
import { ANIMATED_TYPES } from "@/stores/const/animatedBackgroundConsts";
import { DEFAULT_IMPERIAL_COUNT, IMPERIAL_TEMPERATURE_VALUES, RESULT_VALUES_TYPE, VALUES_TYPES } from "@/stores/const/listValues";
import { useGlobalStore } from "@/stores/globalStore";
import { useValuesStore } from "@/stores/valuesStore";
import { listValuesScreenStyles } from "@/styles/listValuesScreenStyles";
import { useState } from "react";
import { FlatList, Text, View } from "react-native";
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
                nestedScrollEnabled={true}
                style={listValuesScreenStyles.valuesContainer}
                renderItem={({ item }) => (
                    <View style={listValuesScreenStyles.valuesSectionsContainer}>
                        <View style={listValuesScreenStyles.valuesImperial}>
                            <Text style={listValuesScreenStyles.sectionButtonTitle}>
                                {DEFAULT_IMPERIAL_COUNT + ' ' + item.imperialTypeValue}
                            </Text>
                        </View>
                        <View style={listValuesScreenStyles.valuesMetricContainer}>
                            {item.imperialTypeValue === IMPERIAL_TEMPERATURE_VALUES.FAHRENHEIT
                                ?
                                <Text>{fahrenheitToCelsiusFormula}</Text>
                                :
                                <View style={listValuesScreenStyles.valuesMetric}>
                                    <View style={listValuesScreenStyles.valuesTextContainer}>
                                        <Text style={listValuesScreenStyles.sectionButtonTitle}>
                                            {item.value}
                                        </Text>
                                    </View>
                                    <View style={{}}>
                                        <Text
                                            style={listValuesScreenStyles.sectionButtonTitle}>
                                            {item.metricTypeValue}
                                        </Text>
                                    </View>
                                </View>
                            }
                            <Text style={listValuesScreenStyles.sectionButtonTitle}>
                            </Text>
                        </View>
                    </View>

                )}
            />
        </View>
    );
    return (
        <SafeAreaView style={listValuesScreenStyles.mainContainer}>
            {/* <ImageBackground
                style={listValuesScreenStyles.mainBackground}
                source={defaultBackground}
                resizeMode="cover"
            > */}
            <AnimatedGradientBackground typeAnimate={ANIMATED_TYPES.WITH_GRADIENT}>
                <Text>listValues</Text>
                <View style={listValuesScreenStyles.listValuesContainer}>
                    <FlatList
                        data={currentListValues.filter((item) => item.values)}
                        showsVerticalScrollIndicator={false}
                        style={listValuesScreenStyles.listValues}
                        renderItem={renderItem}
                    />
                </View>
            </AnimatedGradientBackground>


            {/* </ImageBackground> */}
        </SafeAreaView>

    )
}
