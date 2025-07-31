
import { AnimatedGradientBackground } from "@/components/animatedGradientBackground";
import { currentGradientColors } from "@/helpers/helpersFunctions";
import { ANIMATED_TYPES } from "@/stores/const/animatedBackgroundConsts";
import { DEFAULT_IMPERIAL_COUNT, IMPERIAL_TEMPERATURE_VALUES, RESULT_VALUES_TYPE, VALUES_TYPES } from "@/stores/const/listValues";
import { useGlobalStore } from "@/stores/globalStore";
import { useThemeStore } from "@/stores/themeStore";
import { useValuesStore } from "@/stores/valuesStore";
import { listValuesScreenStyles } from "@/styles/listValuesScreenStyles";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//

const fahrenheitToCelsiusFormula = '°C = (°F - 32) * 5 / 9'

export default function ListValues() {
    const getListValues = useValuesStore(state => state.getListValues)
    const currentAppLanguage = useGlobalStore(state => state.currentLanguage)
    const defaultListValues = getListValues(VALUES_TYPES.ALL, currentAppLanguage)
    const colorScheme = useThemeStore(state => state.colorScheme)
    const [currentListValues, setCurrentValues] = useState(defaultListValues)

    useEffect(() => {
        useValuesStore.getState().reset();
        console.log('reset compl')
    }, [])
    const renderItem = ({ item }: { item: RESULT_VALUES_TYPE }) => (
        <View style={listValuesScreenStyles.sectionsButton}>
            <Text style={[
                listValuesScreenStyles.valuesTitle,
                { color: colorScheme.text }
            ]}>{item.type}</Text>
            <FlatList
                data={item.values}
                nestedScrollEnabled={true}
                style={[
                    listValuesScreenStyles.valuesContainer,
                ]}
                renderItem={({ item }) => (
                    <View style={listValuesScreenStyles.valuesSectionsContainer}>
                        <View style={listValuesScreenStyles.valuesImperialContainer}>
                            <View style={listValuesScreenStyles.valuesTextContainer}>
                                <LinearGradient
                                    colors={currentGradientColors(colorScheme.button)}
                                    style={[listValuesScreenStyles.linearGradienButtontContainer]}
                                >
                                    <Text style={[
                                        listValuesScreenStyles.sectionButtonTitle,
                                        { color: colorScheme.text }
                                    ]}>
                                        {DEFAULT_IMPERIAL_COUNT}
                                    </Text>
                                    <Text
                                        style={[
                                            listValuesScreenStyles.sectionButtonTitle,
                                            { color: colorScheme.text }
                                        ]}
                                    >
                                        {item.imperialTypeValue}
                                    </Text>
                                </LinearGradient>
                            </View>
                        </View>
                        <View style={listValuesScreenStyles.valuesMetricContainer}>
                            <View style={listValuesScreenStyles.valuesTextContainer}>
                                <LinearGradient
                                    colors={currentGradientColors(colorScheme.button)}
                                    style={[listValuesScreenStyles.linearGradienButtontContainer]}
                                >
                                    <Text style={[
                                        listValuesScreenStyles.sectionButtonTitle,
                                        { color: colorScheme.text }
                                    ]}>
                                        {item.imperialTypeValue === IMPERIAL_TEMPERATURE_VALUES.EN.FAHRENHEIT ? fahrenheitToCelsiusFormula : item.value}
                                    </Text>
                                    <Text
                                        style={[
                                            listValuesScreenStyles.sectionButtonTitle,
                                            { color: colorScheme.text }
                                        ]}>
                                        {item.imperialTypeValue === IMPERIAL_TEMPERATURE_VALUES.EN.FAHRENHEIT ? '' : item.metricTypeValue}
                                    </Text>
                                </LinearGradient>
                            </View>
                        </View>
                    </View>

                )
                }
            />
        </View >
    );
    return (
        <SafeAreaView style={listValuesScreenStyles.mainContainer}>
            <AnimatedGradientBackground typeAnimate={ANIMATED_TYPES.WITH_GRADIENT}>
                <View style={listValuesScreenStyles.listValuesContainer}>
                    <FlatList
                        data={currentListValues.filter((item) => item.values)}
                        showsVerticalScrollIndicator={false}
                        style={listValuesScreenStyles.listValues}
                        renderItem={renderItem}
                    />
                </View>
            </AnimatedGradientBackground>
        </SafeAreaView>

    )
}
