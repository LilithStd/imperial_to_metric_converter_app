import LanguageSwitcher from '@/components/languageSwitcher'
import { APP_PATH_ROUTE } from '@/stores/const/globalConsts'
import { THEME_APP } from '@/stores/const/globalStoreConst'
import { useGlobalStore } from '@/stores/globalStore'
import { mainScreenStyles } from '@/styles/mainScreenStyles'
import { useRouter } from 'expo-router'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MoonIcons from '../assets/images/icons/moon.svg'
import SunIcons from '../assets/images/icons/sun.svg'
const defaultBackgroundImage = require('../assets/images/backgrounds/bg_00.jpg')
const greenButton = require('../assets/images/buttons/greenButton(Small).png')



export default function MainScreen() {
    const router = useRouter()
    const currentAppTheme = useGlobalStore(state => state.currentTheme)
    const setCurrentTheme = useGlobalStore(state => state.setCurrentTheme)

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

    const switchCurrentAppTheme = () => {
        const switchTheme = currentAppTheme === THEME_APP.LIGHT ? THEME_APP.DARK : THEME_APP.LIGHT
        setCurrentTheme(switchTheme)
    }

    return (
        <SafeAreaView style={mainScreenStyles.mainContainer}>
            <ImageBackground
                style={mainScreenStyles.mainImageBackground}
                source={defaultBackgroundImage}
            >
                <TouchableOpacity
                    onPress={switchCurrentAppTheme}
                >

                    {currentAppTheme === THEME_APP.LIGHT ? <SunIcons width={24} height={24} fill="green" /> : <MoonIcons width={24} height={24} fill="green" />}

                </TouchableOpacity>
                <View style={mainScreenStyles.mainTitleContainer}>
                    <Text style={mainScreenStyles.mainTitle}>Main Screen</Text>
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
