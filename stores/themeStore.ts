import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {THEME_APP} from './const/globalStoreConst';
import {
	COLOR_SCHEME,
	colorScheme,
	STATUS_THEME,
} from './const/themeStoreConsts';

interface ThemeStoreInterface {
	currentTheme: THEME_APP;
	colorScheme: colorScheme;
	statusTheme: STATUS_THEME;
	setCurrentTheme: (theme: THEME_APP) => void;
	setStatusTheme: (status: STATUS_THEME) => void;
}

export const useThemeStore = create<ThemeStoreInterface>()(
	persist(
		(set, get) => ({
			currentTheme: THEME_APP.LIGHT,
			statusTheme: STATUS_THEME.static,
			colorScheme: COLOR_SCHEME.light,
			setCurrentTheme: (theme) => {
				if (theme === get().currentTheme) {
					return;
				} else {
					get().setStatusTheme(STATUS_THEME.update);
					set({currentTheme: theme});
					set({
						colorScheme:
							theme === THEME_APP.DARK ? COLOR_SCHEME.dark : COLOR_SCHEME.light,
					});
				}
			},
			setStatusTheme: (status) => {
				set({
					statusTheme:
						status === STATUS_THEME.update
							? STATUS_THEME.update
							: STATUS_THEME.static,
				});
			},
		}),

		{
			name: 'theme-storage',
			storage: createJSONStorage(() => AsyncStorage),
		},
	),
);
