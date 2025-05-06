import LanguageSwitcher from '@/components/languageSwitcher'
import { mainScreenStyles } from '@/styles/mainScreenStyles'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
const defaultBackgroundImage = require('../assets/images/backgrounds/bg_00.jpg')

export default function MainScreen() {
    return (
        <SafeAreaView style={mainScreenStyles.mainContainer}>
            <ImageBackground
                style={mainScreenStyles.mainImageBackground}
                source={defaultBackgroundImage}
            >
                <View style={mainScreenStyles.mainTitleContainer}>
                    <Text style={mainScreenStyles.mainTitle}>Main Screen</Text>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text>List</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Calculator</Text>
                    </TouchableOpacity>
                </View>
                <LanguageSwitcher />
            </ImageBackground>
        </SafeAreaView>

    )
}
