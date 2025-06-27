import { AnimatedGradientBackground } from '@/components/animatedGradientBackground'
import LanguageSwitcher from '@/components/languageSwitcher'
import ThemeSwitcher from '@/components/themeSwitcher'
import { ANIMATED_TYPES } from '@/stores/const/animatedBackgroundConsts'
import { APP_PATH_ROUTE } from '@/stores/const/globalConsts'
import { useGlobalStore } from '@/stores/globalStore'
import { mainScreenStyles } from '@/styles/mainScreenStyles'
import { useRouter } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const defaultBackgroundImage = require('../assets/images/backgrounds/bg_00.jpg')
const greenButton = require('../assets/images/buttons/greenButton(Small).png')



export default function MainScreen() {
    const router = useRouter()
    const currentLanguage = useGlobalStore(state => state.currentLanguage)
    const currentTheme = useGlobalStore(state => state.currentTheme)
    const currentLanguageTranslateConverter = {
        EN: 'Converter',
        RU: 'Конвертер',
        LV: 'Pārveidotājs'
    }

    const currentLanguageTranslateListValues = {
        EN: 'List Values',
        RU: 'Список Значений',
        LV: 'Saraksta Vērtības'
    }

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
            <AnimatedGradientBackground
                typeAnimate={ANIMATED_TYPES.WITHOUT_GRADIENT}
            >
                <View style={mainScreenStyles.mainTitleContainer}>
                    <Text style={mainScreenStyles.mainTitle}>Main Screen</Text>
                </View>
                <View style={mainScreenStyles.themeSwitcherContainer}>
                    <ThemeSwitcher />
                </View>

                <View style={mainScreenStyles.buttonContainer}>
                    <TouchableOpacity
                        onPress={redirectToListValuesScreen}

                    >
                        <View
                            style={mainScreenStyles.buttonBackground}
                        >
                            <Text style={mainScreenStyles.buttonText}>{currentLanguageTranslateListValues[currentLanguage]}</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={redirectToConverterScreen}
                    >
                        <View
                            style={mainScreenStyles.buttonBackground}
                        >
                            <Text style={mainScreenStyles.buttonText}>{currentLanguageTranslateConverter[currentLanguage]}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={mainScreenStyles.languageSwitcherContainer}>
                    <LanguageSwitcher />
                </View>
            </AnimatedGradientBackground>
        </SafeAreaView>

    )
}
