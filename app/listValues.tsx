
import { RESULT_VALUES_TYPE, VALUES_TYPES } from "@/stores/const/listValues";
import { useGlobalStore } from "@/stores/globalStore";
import { useValuesStore } from "@/stores/valuesStore";
import { listValuesScreenStyles } from "@/styles/listValuesScreenStyles";
import { useState } from "react";
import { FlatList, ImageBackground, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//
const defaultBackground = require('../assets/images/backgrounds/bg_00.jpg')

export default function ListValues() {
    const getListValues = useValuesStore(state => state.getListValues)
    const currentAppLanguage = useGlobalStore(state => state.currentLanguage)
    const defaultListValues = getListValues(VALUES_TYPES.ALL, currentAppLanguage)
    const [currentListValues, setCurrentValues] = useState(defaultListValues)

    const renderItem = ({ item }: { item: RESULT_VALUES_TYPE }) => (
        <View style={listValuesScreenStyles.sectionsButton}>
            <Text>{item.type}</Text>
            <FlatList
                data={item.values}
                keyExtractor={(element, index) => `${element.imperialTypeValue}-${index}`}
                renderItem={({ item }) => (
                    <Text style={listValuesScreenStyles.sectionButtonTitle}>{item.imperialTypeValue}</Text>
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

                <FlatList
                    data={currentListValues.filter((item) => item.values)}
                    renderItem={renderItem}

                />
            </ImageBackground>
        </SafeAreaView>

    )
}
