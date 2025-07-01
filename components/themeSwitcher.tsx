import { THEME_APP } from '@/stores/const/globalStoreConst'
import { useThemeStore } from '@/stores/themeStore'
import { themeSwitcherStyles } from '@/styles/themeSwitcherStyles'
import React, { useEffect, useRef, useState } from 'react'
import { Animated, TouchableOpacity } from 'react-native'
import MoonIcons from '../assets/images/icons/moon.svg'
import SunIcons from '../assets/images/icons/sun.svg'

export default function ThemeSwitcher() {
    const currentAppTheme = useThemeStore(state => state.currentTheme)
    const setCurrentTheme = useThemeStore(state => state.setCurrentTheme)
    const switchCurrentAppTheme = () => {
        const switchTheme = currentAppTheme === THEME_APP.LIGHT ? THEME_APP.DARK : THEME_APP.LIGHT
        setCurrentTheme(switchTheme)
    }
    const animation = useRef(new Animated.Value(0)).current;
    const [toggled, setToggled] = useState(false);
    const startColorAnimation = () => {
        Animated.timing(animation, {
            toValue: toggled ? 0 : 1,
            duration: 1000,
            useNativeDriver: false,
        }).start();

        setToggled(!toggled);
    };

    const backgroundColor = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['white', 'black'], // от и до
    });

    const fadeOutOpacity = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0],
    });

    const startAnimation = () => {
        Animated.timing(animation, {
            toValue: toggled ? 0 : 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();

        setToggled(!toggled);
    };

    useEffect(() => {
        startAnimation()
        // startColorAnimation()


    }, [currentAppTheme])
    return (
        <TouchableOpacity
            onPress={switchCurrentAppTheme}
            style={themeSwitcherStyles.mainContainer}
        >
            {/* <Animated.View style={[
                themeSwitcherStyles.mainContainer,
                { backgroundColor }
            ]}>
                {currentAppTheme === THEME_APP.LIGHT
                    ? <SunIcons width={32} height={32} fill="#ffcc00" />
                    : <MoonIcons width={32} height={32} fill="#0099ff" />}
            </Animated.View> */}
            {/* <View style={themeSwitcherStyles.mainContainer}>
                {currentAppTheme === THEME_APP.LIGHT
                    ? <SunIcons width={32} height={32} fill="#ffcc00" />
                    : <MoonIcons width={32} height={32} fill="#0099ff" />}
            </View> */}
            {currentAppTheme === THEME_APP.LIGHT
                ? <MoonIcons width={32} height={32} fill="#0099ff" />
                : <SunIcons width={32} height={32} fill="#ffcc00" />}
            {/* <View style={{ flex: 1 }}>
                <LinearGradient
                    style={StyleSheet.absoluteFill}
                    colors={[
                        '#0f0f0f',
                        '#093F79',
                        '#0f0f0f',
                    ]}

                >
                    <Animated.View
                        style={[StyleSheet.absoluteFill, { opacity: fadeOutOpacity }]}>
                        <LinearGradient
                            colors={['#2193b0', '#6dd5ed']}
                            style={StyleSheet.absoluteFill}
                        >
                            <MoonIcons width={32} height={32} fill="#0099ff" />
                        </LinearGradient>
                    </Animated.View>

                    <SunIcons width={32} height={32} fill="#ffcc00" />
                </LinearGradient>
            </View> */}


        </TouchableOpacity>
    )
}
