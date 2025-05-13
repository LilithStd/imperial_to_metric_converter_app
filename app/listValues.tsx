
import { listValuesScreenStyles } from "@/styles/listValuesScreenStyles";
import { ImageBackground, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const defaultBackground = require('../assets/images/backgrounds/bg_00.jpg')

export default function ListValues() {

    return (
        <SafeAreaView style={listValuesScreenStyles.mainContainer}>
            <ImageBackground
                style={listValuesScreenStyles.mainBackground}
                source={defaultBackground}
                resizeMode="cover"
            >
                <Text>listValues</Text>
            </ImageBackground>
        </SafeAreaView>

    )
}
