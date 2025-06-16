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
						const baseLengthValues = get().weightValues.values;
						let localizedLengthType = VALUES_TYPES.WEIGHT;

						switch (language) {
							case LANGUAGE_APP.LV:
								localizedLengthType = VALUES_TYPES_TRANSLATED.LV.WEIGHT;
								break;
							case LANGUAGE_APP.RU:
								localizedLengthType = VALUES_TYPES_TRANSLATED.RU.WEIGHT;
								break;
							case LANGUAGE_APP.EN:
								localizedLengthType = VALUES_TYPES_TRANSLATED.EN.WEIGHT;
								break;
						}

						resultValues.push({
							type: localizedLengthType,
							values: baseLengthValues,
						});
						break;
					case VALUES_TYPES.WEIGHT:
						const baseWeightValues = get().weightValues.values;
						let localizedWeightType = VALUES_TYPES.WEIGHT;

						switch (language) {
							case LANGUAGE_APP.LV:
								localizedWeightType = VALUES_TYPES_TRANSLATED.LV.WEIGHT;
								break;
							case LANGUAGE_APP.RU:
								localizedWeightType = VALUES_TYPES_TRANSLATED.RU.WEIGHT;
								break;
							case LANGUAGE_APP.EN:
								localizedWeightType = VALUES_TYPES_TRANSLATED.EN.WEIGHT;
								break;
						}

						resultValues.push({
							type: localizedWeightType,
							values: baseWeightValues,
						});
						break;
					case VALUES_TYPES.AREA:
						const baseAreaValues = get().areaValues.values;
						let localizedAreaType = VALUES_TYPES.AREA;

						switch (language) {
							case LANGUAGE_APP.LV:
								localizedAreaType = VALUES_TYPES_TRANSLATED.LV.AREA;
								break;
							case LANGUAGE_APP.RU:
								localizedAreaType = VALUES_TYPES_TRANSLATED.RU.AREA;
								break;
							case LANGUAGE_APP.EN:
								localizedAreaType = VALUES_TYPES_TRANSLATED.EN.AREA;
								break;
						}

						resultValues.push({
							type: localizedAreaType,
							values: baseAreaValues,
						});
						break;
					case VALUES_TYPES.TEMPERATURE:
						const baseTemperatureValues = get().temperatureValues.values;
						let localizedTemperatureType = VALUES_TYPES.TEMPERATURE;

						switch (language) {
							case LANGUAGE_APP.LV:
								localizedTemperatureType =
									VALUES_TYPES_TRANSLATED.LV.TEMPERATURE;
								break;
							case LANGUAGE_APP.RU:
								localizedTemperatureType =
									VALUES_TYPES_TRANSLATED.RU.TEMPERATURE;
								break;
							case LANGUAGE_APP.EN:
								localizedTemperatureType =
									VALUES_TYPES_TRANSLATED.EN.TEMPERATURE;
								break;
						}

						resultValues.push({
							type: localizedTemperatureType,
							values: baseTemperatureValues,
						});
						break;
					case VALUES_TYPES.SPEED:
						const baseSpeedValues = get().speedValues.values;
						let localizedSpeedType = VALUES_TYPES.SPEED;

						switch (language) {
							case LANGUAGE_APP.LV:
								localizedSpeedType = VALUES_TYPES_TRANSLATED.LV.SPEED;
								break;
							case LANGUAGE_APP.RU:
								localizedSpeedType = VALUES_TYPES_TRANSLATED.RU.SPEED;
								break;
							case LANGUAGE_APP.EN:
								localizedSpeedType = VALUES_TYPES_TRANSLATED.EN.SPEED;
								break;
						}

						resultValues.push({
							type: localizedSpeedType,
							values: baseSpeedValues,
						});
						break;
					case VALUES_TYPES.VOLUME:
						const baseVolumeValues = get().volumeValues.values;
						let localizedVolumeType = VALUES_TYPES.VOLUME;

						switch (language) {
							case LANGUAGE_APP.LV:
								localizedVolumeType = VALUES_TYPES_TRANSLATED.LV.VOLUME;
								break;
							case LANGUAGE_APP.RU:
								localizedVolumeType = VALUES_TYPES_TRANSLATED.RU.VOLUME;
								break;
							case LANGUAGE_APP.EN:
								localizedVolumeType = VALUES_TYPES_TRANSLATED.EN.VOLUME;
								break;
						}

						resultValues.push({
							type: localizedVolumeType,
							values: baseVolumeValues,
						});
						break;
					case VALUES_TYPES.PRESSURE:
						const basePressureValues = get().pressureValues.values;
						let localizedPressureType = VALUES_TYPES.PRESSURE;

						switch (language) {
							case LANGUAGE_APP.LV:
								localizedPressureType = VALUES_TYPES_TRANSLATED.LV.PRESSURE;
								break;
							case LANGUAGE_APP.RU:
								localizedPressureType = VALUES_TYPES_TRANSLATED.RU.PRESSURE;
								break;
							case LANGUAGE_APP.EN:
								localizedPressureType = VALUES_TYPES_TRANSLATED.EN.PRESSURE;
								break;
						}

						resultValues.push({
							type: localizedPressureType,
							values: basePressureValues,
						});
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
