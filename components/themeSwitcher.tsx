import { THEME_APP } from '@/stores/const/globalStoreConst'
import { useThemeStore } from '@/stores/themeStore'
import { themeSwitcherStyles } from '@/styles/themeSwitcherStyles'
import React, { useEffect, useRef } from 'react'
import { Animated, TouchableOpacity, View } from 'react-native'
import MoonIcons from '../assets/images/icons/moon.svg'
import SunIcons from '../assets/images/icons/sun.svg'

export default function ThemeSwitcher() {
    const currentAppTheme = useThemeStore(state => state.currentTheme)
    const setCurrentTheme = useThemeStore(state => state.setCurrentTheme)
    const colorScheme = useThemeStore(state => state.colorScheme)
    const switchCurrentAppTheme = () => {
        const switchTheme = currentAppTheme === THEME_APP.LIGHT ? THEME_APP.DARK : THEME_APP.LIGHT
        setCurrentTheme(switchTheme)
    }
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start(() => {
            fadeAnim.setValue(0);
        });
    }, [currentAppTheme]);

    return (
        <TouchableOpacity
            onPress={switchCurrentAppTheme}
            style={themeSwitcherStyles.mainContainer}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {currentAppTheme === THEME_APP.LIGHT
                    ? <MoonIcons
                        width={32}
                        height={32}
                        fill="#0099ff"
                        stroke={colorScheme.text}
                    />
                    :
                    <SunIcons
                        width={32}
                        height={32}
                        fill="#ffcc00"
                        stroke={colorScheme.text}
                    />}
            </View>

        </TouchableOpacity>
    )
}
