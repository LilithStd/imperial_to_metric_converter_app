import { THEME_APP } from '@/stores/const/globalStoreConst'
import { useThemeStore } from '@/stores/themeStore'
import { themeSwitcherStyles } from '@/styles/themeSwitcherStyles'
import React, { useEffect, useRef } from 'react'
import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native'
import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg'
import MoonIcons from '../assets/images/icons/moon.svg'
import SunIcons from '../assets/images/icons/sun.svg'

export default function ThemeSwitcher() {
    const currentAppTheme = useThemeStore(state => state.currentTheme)
    const setCurrentTheme = useThemeStore(state => state.setCurrentTheme)
    // const updateStatusTheme = useThemeStore(state => state.setStatusTheme)
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
            fadeAnim.setValue(0); // сброс для следующей анимации
        });
    }, [currentAppTheme]);

    const dayColors = ['#FFEBB7', '#ffffff00']; // центр — тёплый светлый, края — прозрачные
    const nightColors = ['#1D2B64', '#00000000']; // центр — тёмный синий, края — прозрачные

    const [centerColor, edgeColor] = currentAppTheme === THEME_APP.DARK ? nightColors : dayColors;
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
            <Svg height="100%" width="100%" style={StyleSheet.absoluteFill}>
                <Defs>
                    <RadialGradient
                        id="radialGrad"
                        cx="50%"
                        cy="50%"
                        rx="70%"
                        ry="70%"
                        fx="50%"
                        fy="50%"
                    >
                        <Stop offset="0%" stopColor={centerColor} stopOpacity="1" />
                        <Stop offset="100%" stopColor={edgeColor} stopOpacity="0" />
                    </RadialGradient>
                </Defs>
                <Rect x="0" y="0" width="100%" height="100%" fill="url(#radialGrad)" />
            </Svg>

            {/* Анимация затухания при смене темы */}
            <Animated.View
                pointerEvents="none"
                style={[StyleSheet.absoluteFill, { backgroundColor: currentAppTheme === THEME_APP.DARK ? '#000' : '#fff', opacity: fadeAnim }]}
            />

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {currentAppTheme === THEME_APP.LIGHT
                    ? <MoonIcons width={32} height={32} fill="#0099ff" />
                    : <SunIcons width={32} height={32} fill="#ffcc00" />}
            </View>

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
