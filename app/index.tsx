import { mainScreenStyles } from '@/styles/mainScreenStyles'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function MainScreen() {
    return (
        <SafeAreaView style={mainScreenStyles.mainContainer}>
            <View style={mainScreenStyles.mainTitleContainer}>
                <Text style={mainScreenStyles.mainTitle}>Main Screen</Text>
            </View>
        </SafeAreaView>

    )
}
