
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useRef } from 'react';
import { Animated, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

interface AnimatedGradientBackgroundProps {
    isDarkTheme: boolean;
    lightColors: string[];
    darkColors: string[];
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
}

export const AnimatedGradientBackground: React.FC<AnimatedGradientBackgroundProps> = ({
    isDarkTheme,
    lightColors,
    darkColors,
    style,
    children,
}) => {
    const fadeAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.sequence([
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }),
        ]).start();
    }, [isDarkTheme]);
    const gradientColors: [string, string] = isDarkTheme
        ? ['#000000', '#333333']
        : ['#FFB347', '#FFCC33'];

    return (
        <View style={[styles.container, style]}>
            <Animated.View style={[StyleSheet.absoluteFillObject, { opacity: fadeAnim }]}>
                <LinearGradient
                    colors={gradientColors}
                    style={StyleSheet.absoluteFill}
                />
            </Animated.View>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
