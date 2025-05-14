import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {LANGUAGE_APP, THEME_APP} from './const/globalStoreConst';

interface GlobalStoreInterface {
	currentTheme: THEME_APP;
	currentLanguage: LANGUAGE_APP;
	setCurrentTheme: (theme: THEME_APP) => void;
	setCurrentLanguage: (language: LANGUAGE_APP) => void;
}

export const useGlobalStore = create<GlobalStoreInterface>()(
	persist(
		(set, get) => ({
			currentTheme: THEME_APP.LIGHT,
			currentLanguage: LANGUAGE_APP.EN,
			setCurrentTheme: (theme) => {
				if (theme === get().currentTheme) {
					return;
				} else {
					set({currentTheme: theme});
				}
			},
			setCurrentLanguage: (language) => {
				if (language === get().currentLanguage) {
					return;
				}
				set({currentLanguage: language});
			},
		}),
		{
			name: 'global-storage',
			storage: createJSONStorage(() => AsyncStorage),
		},
	),
);
