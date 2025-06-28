import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {LANGUAGE_APP} from './const/globalStoreConst';

interface GlobalStoreInterface {
	currentLanguage: LANGUAGE_APP;
	setCurrentLanguage: (language: LANGUAGE_APP) => void;
}

export const useGlobalStore = create<GlobalStoreInterface>()(
	persist(
		(set, get) => ({
			currentLanguage: LANGUAGE_APP.EN,
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
