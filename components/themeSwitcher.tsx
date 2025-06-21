import { THEME_APP } from '@/stores/const/globalStoreConst'
import { useGlobalStore } from '@/stores/globalStore'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import MoonIcons from '../assets/images/icons/moon.svg'
import SunIcons from '../assets/images/icons/sun.svg'

export default function ThemeSwitcher() {
    const currentAppTheme = useGlobalStore(state => state.currentTheme)
    const setCurrentTheme = useGlobalStore(state => state.setCurrentTheme)
    const switchCurrentAppTheme = () => {
        const switchTheme = currentAppTheme === THEME_APP.LIGHT ? THEME_APP.DARK : THEME_APP.LIGHT
        setCurrentTheme(switchTheme)
    }
    return (
        <TouchableOpacity
            onPress={switchCurrentAppTheme}
        >

            {currentAppTheme === THEME_APP.LIGHT ? <SunIcons width={24} height={24} fill="black" /> : <MoonIcons width={24} height={24} fill="black" />}

        </TouchableOpacity>
    )
}
