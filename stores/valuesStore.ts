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
	VALUES_ITEM,
	VALUES_TYPES,
	VALUES_TYPES_TRANSLATED,
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
	favoritesValues: VALUES_ITEM[];
	getListValues: (type: string, language: LANGUAGE_APP) => RESULT_VALUES_TYPE[];
	checkIsFavorites: (id: string) => boolean;
	setFavoritesValues: (value: VALUES_ITEM) => void;
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
			favoritesValues: [],
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
					case VALUES_TYPES.FAVORITES:
						resultValues.push({
							type: 'Favorites',
							values: get().favoritesValues,
						});
						break;
					case VALUES_TYPES.LENGTH:
						resultValues.push(get().lengthValues);
						break;
					case VALUES_TYPES.WEIGHT:
						const baseValues = get().weightValues.values;
						let localizedType = VALUES_TYPES.WEIGHT;

						switch (language) {
							case LANGUAGE_APP.LV:
								localizedType = VALUES_TYPES_TRANSLATED.LV.WEIGHT;
								break;
							case LANGUAGE_APP.RU:
								localizedType = VALUES_TYPES_TRANSLATED.RU.WEIGHT;
								break;
							case LANGUAGE_APP.EN:
								localizedType = VALUES_TYPES_TRANSLATED.EN.WEIGHT;
								break;
						}

						resultValues.push({
							type: localizedType,
							values: baseValues,
						});
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

			checkIsFavorites: (id) => {
				return get().favoritesValues.some((item) => item.id === id);
			},
			setFavoritesValues: (value) => {
				const exists = get().favoritesValues.some(
					(item) => item.id === value.id,
				);
				if (exists) {
					set((state) => ({
						favoritesValues: state.favoritesValues.filter(
							(item) => item.id !== value.id,
						),
					}));
				} else {
					set((state) => ({
						favoritesValues: [...state.favoritesValues, value],
					}));
				}
			},
		}),
		{
			name: 'values-storage',
			storage: createJSONStorage(() => AsyncStorage),
		},
	),
);
