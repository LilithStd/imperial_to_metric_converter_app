import LanguageSwitcher from '@/components/languageSwitcher'
import { APP_PATH_ROUTE } from '@/stores/const/globalConsts'
import { mainScreenStyles } from '@/styles/mainScreenStyles'
import { useRouter } from 'expo-router'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
const defaultBackgroundImage = require('../assets/images/backgrounds/bg_00.jpg')

export default function MainScreen() {
    const router = useRouter()

    const redirectToListValuesScreen = () => {
        router.push({
            pathname: APP_PATH_ROUTE.LIST_VALUE,
        })
    }

    const redirectToConverterScreen = () => {
        router.push({
            pathname: APP_PATH_ROUTE.CONVERTER,
        })
    }

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
                    <TouchableOpacity
                        onPress={redirectToListValuesScreen}
                    >
                        <Text>List</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={redirectToConverterScreen}
                    >
                        <Text>Converter</Text>
                    </TouchableOpacity>
                </View>
                <LanguageSwitcher />
            </ImageBackground>
        </SafeAreaView>

    )
}
