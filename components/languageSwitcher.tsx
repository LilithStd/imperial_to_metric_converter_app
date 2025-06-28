import { LANGUAGE_APP, THEME_APP } from "@/stores/const/globalStoreConst";
import { useGlobalStore } from "@/stores/globalStore";
import { useThemeStore } from "@/stores/themeStore";

import { languageSwitcherStyles } from "@/styles/languageSwitcherStyles";
import { Text, TouchableOpacity, View } from "react-native";
const LANGUAGE_VARIANT = [
    LANGUAGE_APP.EN, LANGUAGE_APP.RU, LANGUAGE_APP.LV
]

export default function LanguageSwitcher() {
    const currentTheme = useThemeStore(state => state.currentTheme)
    const currentLanguage = useGlobalStore(state => state.currentLanguage)
    const setCurrentLanguage = useGlobalStore(state => state.setCurrentLanguage)
    return (
        <View style={languageSwitcherStyles.buttonContainer}>
            {LANGUAGE_VARIANT.map((item) =>
                <TouchableOpacity
                    key={item}
                    onPress={() => setCurrentLanguage(item)}
                >
                    <Text style={[
                        languageSwitcherStyles.buttonText,
                        currentTheme === THEME_APP.LIGHT
                            ? languageSwitcherStyles.buttonLightView
                            : languageSwitcherStyles.buttonDarkView,
                        currentLanguage === item && currentTheme === THEME_APP.LIGHT
                            ? languageSwitcherStyles.buttonActiveLight
                            : languageSwitcherStyles.buttonActiveDark

                    ]}>{item}</Text>
                </TouchableOpacity>)}
        </View>
    )
}
