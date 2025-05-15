import LanguageSwitcher from '@/components/languageSwitcher'
import ThemeSwitcher from '@/components/themeSwitcher'
import { APP_PATH_ROUTE } from '@/stores/const/globalConsts'
import { mainScreenStyles } from '@/styles/mainScreenStyles'
import { useRouter } from 'expo-router'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const defaultBackgroundImage = require('../assets/images/backgrounds/bg_00.jpg')
const greenButton = require('../assets/images/buttons/greenButton(Small).png')



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
            >   <View style={mainScreenStyles.mainTitleContainer}>
                    <Text style={mainScreenStyles.mainTitle}>Main Screen</Text>
                </View>
                <View style={mainScreenStyles.themeSwitcherContainer}>
                    <ThemeSwitcher />
                </View>

                <View style={mainScreenStyles.buttonContainer}>
                    <TouchableOpacity
                        onPress={redirectToListValuesScreen}

                    >
                        <ImageBackground
                            source={greenButton}
                            style={mainScreenStyles.buttonBackground}
                        >
                            <Text style={mainScreenStyles.buttonText}>List Values</Text>
                        </ImageBackground>

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={redirectToConverterScreen}
                    >
                        <ImageBackground
                            source={greenButton}
                            style={mainScreenStyles.buttonBackground}
                        >
                            <Text style={mainScreenStyles.buttonText}>Converter</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={mainScreenStyles.languageSwitcherContainer}>
                    <LanguageSwitcher />
                </View>
            </ImageBackground>
        </SafeAreaView>

    )
}
