import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {THEME_APP} from './const/globalStoreConst';
import {COLOR_SCHEME, colorScheme} from './const/themeStoreConsts';

interface ThemeStoreInterface {
	currentTheme: THEME_APP;
	colorScheme: colorScheme;
	setCurrentTheme: (theme: THEME_APP) => void;
}

const darkThemeBackground = require('../assets/images/backgrounds/dark_theme_bottom_bg.png');
const lightThemeBackground = require('../assets/images/backgrounds/light_theme_bottom_bg.png');
// const darkThemeBackground = require('../assets/images/backgrounds/dark_theme_bg.jpg');
// const lightThemeBackground = require('../assets/images/backgrounds/light_theme_bg.jpg');

export const useThemeStore = create<ThemeStoreInterface>()(
	persist(
		(set, get) => ({
			currentTheme: THEME_APP.LIGHT,
			colorScheme: COLOR_SCHEME.light,
			setCurrentTheme: (theme) => {
				if (theme === get().currentTheme) {
					return;
				} else {
					set({currentTheme: theme});
					set({
						colorScheme:
							theme === THEME_APP.DARK ? COLOR_SCHEME.dark : COLOR_SCHEME.light,
					});
				}
			},
		}),
		{
			name: 'theme-storage',
			storage: createJSONStorage(() => AsyncStorage),
		},
	),
);
