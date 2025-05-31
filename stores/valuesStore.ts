import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {LANGUAGE_APP} from './const/globalStoreConst';
import {
	AREA_VALUES,
	LENGTH_VALUES,
	PRESSURE_VALUES,
	RESULT_VALUES_TYPE,
	SPEED_VALUES,
	TEMPERATURE_VALUES,
	VALUES_TYPES,
	VOLUME_VALUES,
	WEIGHT_VALUES,
} from './const/listValues';

interface ValuesStoreInterface {
	lengthValues: RESULT_VALUES_TYPE;
	areaValues: RESULT_VALUES_TYPE;
	volumeValues: RESULT_VALUES_TYPE;
	weightValues: RESULT_VALUES_TYPE;
	speedValues: RESULT_VALUES_TYPE;
	temperatureValues: RESULT_VALUES_TYPE;
	pressureValues: RESULT_VALUES_TYPE;
	getListValues: (type: string, language: LANGUAGE_APP) => RESULT_VALUES_TYPE[];
}

export const useValuesStore = create<ValuesStoreInterface>()(
	persist(
		(set, get) => ({
			lengthValues: LENGTH_VALUES,
			areaValues: AREA_VALUES,
			volumeValues: VOLUME_VALUES,
			weightValues: WEIGHT_VALUES,
			speedValues: SPEED_VALUES,
			temperatureValues: TEMPERATURE_VALUES,
			pressureValues: PRESSURE_VALUES,
			getListValues: (type, language) => {
				const resultValues: RESULT_VALUES_TYPE[] = [];
				switch (type) {
					case VALUES_TYPES.ALL:
						resultValues.push(
							get().lengthValues,
							get().areaValues,
							get().pressureValues,
							get().speedValues,
							get().volumeValues,
							get().temperatureValues,
							get().weightValues,
						);
						break;
					case VALUES_TYPES.LENGTH:
						resultValues.push(get().lengthValues);
						break;
					case VALUES_TYPES.WEIGHT:
						resultValues.push(get().weightValues);
						break;
					case VALUES_TYPES.AREA:
						resultValues.push(get().areaValues);
						break;
					case VALUES_TYPES.TEMPERATURE:
						resultValues.push(get().temperatureValues);
						break;
					case VALUES_TYPES.SPEED:
						resultValues.push(get().speedValues);
						break;
					case VALUES_TYPES.VOLUME:
						resultValues.push(get().volumeValues);
						break;
					case VALUES_TYPES.PRESSURE:
						resultValues.push(get().pressureValues);
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
