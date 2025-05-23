import { RESULT_VALUES_TYPE, VALUES_TYPES } from "@/stores/const/listValues";
import { useGlobalStore } from "@/stores/globalStore";
import { useValuesStore } from "@/stores/valuesStore";
import { converterScreenStyles } from "@/styles/converterScreenStyles";
import { FlatList, ImageBackground, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const defaultBackground = require('../assets/images/backgrounds/bg_00.jpg')

export default function Convertor() {
    const valuesListStore = useValuesStore(state => state.getListValues)
    const currentLanguage = useGlobalStore(state => state.currentLanguage)
    const valuesListToView = valuesListStore(VALUES_TYPES.ALL, currentLanguage)
    const renderItem = ({ item }: { item: RESULT_VALUES_TYPE }) => (
        <View>
            <FlatList
                data={item.values}
                nestedScrollEnabled={true}
                renderItem={({ item }) => (
                    <View>
                        <TextInput
                            placeholder={item.imperialTypeValue}
                        />
                    </View>
                )}
            />
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
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />


            </ImageBackground>

        </SafeAreaView>

    )
}
