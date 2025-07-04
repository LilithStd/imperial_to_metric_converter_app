
import { ANIMATED_TYPES } from '@/stores/const/animatedBackgroundConsts';
import { THEME_APP } from '@/stores/const/globalStoreConst';
import { COLOR_SCHEME, colorGradientType, STATUS_THEME } from '@/stores/const/themeStoreConsts';
import { useThemeStore } from '@/stores/themeStore';
import { animatedBackgroundStyles } from '@/styles/animatedBackgroundStyles';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

interface AnimatedGradientBackgroundProps {
    typeAnimate: ANIMATED_TYPES;
    children?: React.ReactNode;
}

const COMPONENTS_COLORS = {
    light: {
        mainColor: '',
        backgroundColor: '#8ccdff',
        buttonColor: ['#EEAECA', '#94BBE9']
    },
    dark: {
        mainColor: '',
        backgroundColor: '',
        buttonColor: ''

    }
}



export const AnimatedGradientBackground: React.FC<AnimatedGradientBackgroundProps> = ({
    typeAnimate,
    children,
}) => {
    const currentTheme = useThemeStore(state => state.currentTheme);
    const colorScheme = useThemeStore(state => state.colorScheme);
    const statusAppTheme = useThemeStore(state => state.statusTheme);
    const setStatusTheme = useThemeStore(state => state.setStatusTheme);

    const animation = useRef(new Animated.Value(0)).current;
    const prevTheme = useRef(currentTheme);

    const fadeOutOpacity = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0],
    });

    const animateThemeChange = () => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
        }).start(() => {
            // После анимации сбрасываем в начальное состояние
            animation.setValue(0);
            setStatusTheme(STATUS_THEME.static);
            prevTheme.current = currentTheme;
        });
    };

    useEffect(() => {
        if (
            statusAppTheme === STATUS_THEME.update &&
            prevTheme.current !== currentTheme
        ) {
            animateThemeChange();
        }
    }, [currentTheme, statusAppTheme]);

    const currentBackgroundColors: colorGradientType = colorScheme.background.length >= 2
        ? colorScheme.background
        : ['#000000', '#000000'];

    return (
        <View style={animatedBackgroundStyles.mainContainer}>
            {typeAnimate === ANIMATED_TYPES.WITHOUT_GRADIENT ? (
                <View style={{ flex: 1, backgroundColor: currentBackgroundColors[0] }}>
                    {children}
                </View>
            ) : (
                <View style={{ flex: 1 }}>
                    <LinearGradient
                        style={StyleSheet.absoluteFill}
                        colors={currentBackgroundColors}
                    >
                        <Animated.View
                            style={[
                                StyleSheet.absoluteFill,
                                { opacity: fadeOutOpacity },
                            ]}
                        >
                            <LinearGradient
                                colors={prevTheme.current === THEME_APP.LIGHT
                                    ? COLOR_SCHEME.light.background
                                    : COLOR_SCHEME.dark.background
                                }
                                style={StyleSheet.absoluteFill}
                            />
                        </Animated.View>
                        {children}
                    </LinearGradient>
                </View>
            )}
        </View>
    );
};