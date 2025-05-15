import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {LANGUAGE_APP} from './const/globalStoreConst';
import {
	RESULT_VALUES_TYPE,
	VALUES_TYPES,
	WIDTH_VALUES,
} from './const/listValues';

interface ValuesStoreInterface {
	widthValues: RESULT_VALUES_TYPE;
	getListValues: (type: string, language: LANGUAGE_APP) => RESULT_VALUES_TYPE[];
}

export const useValuesStore = create<ValuesStoreInterface>()(
	persist(
		(set, get) => ({
			widthValues: WIDTH_VALUES,
			getListValues: (type, language) => {
				const resultValues: RESULT_VALUES_TYPE[] = [];
				switch (type) {
					case VALUES_TYPES.ALL:
						resultValues.push(get().widthValues);
						break;
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
				return resultValues;
			},
		}),
		{
			name: 'values-storage',
			storage: createJSONStorage(() => AsyncStorage),
		},
	),
);
