
import { listValuesScreenStyles } from "@/styles/listValuesScreenStyles";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function ListValues() {
    return (
        <SafeAreaView style={listValuesScreenStyles.mainContainer}>
            <Text>listValues</Text>
        </SafeAreaView>

    )
}
