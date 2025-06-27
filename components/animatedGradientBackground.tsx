
import { ANIMATED_TYPES } from '@/stores/const/animatedBackgroundConsts';
import { useGlobalStore } from '@/stores/globalStore';
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
        buttonColor: '#ccaac6'
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
    const currentTheme = useGlobalStore(state => state.currentTheme)
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

    const startAnimation = () => {
        Animated.timing(animation, {
            toValue: toggled ? 0 : 1,
            duration: 1000,
            useNativeDriver: true, // потому что мы используем opacity
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
        <View style={animatedBackgroundStyles.mainContainer}>
            {typeAnimate === ANIMATED_TYPES.WITHOUT_GRADIENT
                ?
                <Animated.View
                    style={[{ flex: 1, backgroundColor }]}>
                    {children}
                </Animated.View>
                :
                <View style={{ flex: 1 }}>
                    <LinearGradient
                        style={{ flex: 1 }}
                        colors={['#ff6a00', '#ee0979']}
                    >
                        <Animated.View
                            style={[{ flex: 1 }, StyleSheet.absoluteFill, { opacity: fadeOutOpacity }]}>
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

