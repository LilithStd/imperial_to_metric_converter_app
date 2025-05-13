import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {LANGUAGE_APP} from './const/globalStoreConst';
import {VALUES_TYPES} from './const/listValues';

interface ValuesStoreInterface {
	getListValues: (type: string, language: LANGUAGE_APP) => void;
}

export const useValuesStore = create<ValuesStoreInterface>()(
	persist(
		(set, get) => ({
			getListValues: (type, language) => {
				switch (type) {
					case VALUES_TYPES.LENGTH:
						break;
					case VALUES_TYPES.WEIGHT:
						break;
					case VALUES_TYPES.AREA:
						break;
					case VALUES_TYPES.TEMPERATURE:
						break;
					case VALUES_TYPES.SPEED:
						break;
					case VALUES_TYPES.VOLUME:
						break;
					case VALUES_TYPES.PRESSURE:
						break;
				}
			},
		}),
		{
			name: 'values-storage',
			storage: createJSONStorage(() => AsyncStorage),
		},
	),
);
