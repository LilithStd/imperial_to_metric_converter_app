import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {THEME_APP} from './const/globalStoreConst';

interface ThemeStoreInterface {
	currentTheme: THEME_APP;
	currentBackground: number;
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
			currentBackground: lightThemeBackground,
			setCurrentTheme: (theme) => {
				if (theme === get().currentTheme) {
					return;
				} else {
					set({currentTheme: theme});
					set({
						currentBackground:
							theme === THEME_APP.DARK
								? darkThemeBackground
								: lightThemeBackground,
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
