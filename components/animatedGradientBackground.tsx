
import { ANIMATED_TYPES } from '@/stores/const/animatedBackgroundConsts';
import { useGlobalStore } from '@/stores/globalStore';
import { animatedBackgroundStyles } from '@/styles/animatedBackgroundStyles';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, View } from 'react-native';

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

    // создаём "переход" между двумя цветами
    const backgroundColor = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [COMPONENTS_COLORS.light.backgroundColor, 'black'], // от и до
    });

    useEffect(() => {
        startColorAnimation()
    }, [currentTheme])

    return (
        <View style={animatedBackgroundStyles.mainContainer}>
            {typeAnimate === ANIMATED_TYPES.WITHOUT_GRADIENT
                ?
                <Animated.View style={[{ flex: 1, backgroundColor }]}>
                    {children}
                </Animated.View>
                :
                <View></View>
            }


        </View>
    );
};

