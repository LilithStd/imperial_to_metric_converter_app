
import { ANIMATED_TYPES } from '@/stores/const/animatedBackgroundConsts';
import { colorGradientType } from '@/stores/const/themeStoreConsts';
import { useThemeStore } from '@/stores/themeStore';
import { animatedBackgroundStyles } from '@/styles/animatedBackgroundStyles';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useRef, useState } from 'react';
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
    const currentTheme = useThemeStore(state => state.currentTheme)
    // const currentBackground = useThemeStore(state => state.currentBackground)
    const colorScheme = useThemeStore(state => state.colorScheme)
    const colorSchemeBackground: colorGradientType = colorScheme.background
    const animation = useRef(new Animated.Value(0)).current;
    const [toggled, setToggled] = useState(false);
    // const { width, height } = Dimensions.get('window');
    const startColorAnimation = () => {
        Animated.timing(animation, {
            toValue: toggled ? 0 : 1,
            duration: 1000,
            useNativeDriver: false,
        }).start();

        setToggled(!toggled);
    };

    const startAnimation = () => {
        Animated.timing(animation, {
            toValue: toggled ? 0 : 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();

        setToggled(!toggled);
    };

    const backgroundColor = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [COMPONENTS_COLORS.light.backgroundColor, 'black'], // от и до
    });

    const fadeOutOpacity = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0],
    });



    useEffect(() => {
        if (typeAnimate === ANIMATED_TYPES.WITHOUT_GRADIENT) {
            startColorAnimation()
        } else {
            startAnimation()
        }

    }, [currentTheme, typeAnimate])

    return (
        <View
            style={animatedBackgroundStyles.mainContainer}
        >
            {typeAnimate === ANIMATED_TYPES.WITHOUT_GRADIENT
                ?
                <Animated.View
                    style={[{ flex: 1, backgroundColor }]}>
                    {children}
                </Animated.View>
                :
                <View style={{ flex: 1 }}>
                    <LinearGradient
                        style={StyleSheet.absoluteFill}
                        colors={[
                            '#0f0f0f',
                            '#093F79',
                            '#0f0f0f',
                        ]}

                    >
                        <Animated.View
                            style={[animatedBackgroundStyles.animatedBackground, StyleSheet.absoluteFill, { opacity: fadeOutOpacity }]}>
                            <LinearGradient
                                colors={['#2193b0', '#6dd5ed']}
                                style={StyleSheet.absoluteFill}
                            >

                            </LinearGradient>

                        </Animated.View>
                        {children}

                    </LinearGradient>
                </View>
            }


        </View>
    );
};

