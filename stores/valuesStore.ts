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
				const lengthValues = get().lengthValues.values;
				const areaValues = get().areaValues.values;
				const pressureValues = get().pressureValues.values;
				const speedValues = get().speedValues.values;
				const volumeValues = get().volumeValues.values;
				const temperatureValues = get().temperatureValues.values;
				const weightValues = get().weightValues.values;
				let lengthValuesWithCurrentLanguage = VALUES_TYPES_TRANSLATED.EN.LENGTH;
				let areaValuesWithCurrentLanguage = VALUES_TYPES_TRANSLATED.EN.AREA;
				let pressureValuesWithCurrentLanguage =
					VALUES_TYPES_TRANSLATED.EN.PRESSURE;
				let speedValuesWithCurrentLanguage = VALUES_TYPES_TRANSLATED.EN.SPEED;
				let volumeValuesWithCurrentLanguage = VALUES_TYPES_TRANSLATED.EN.VOLUME;
				let weightValuesWithCurrentLanguage = VALUES_TYPES_TRANSLATED.EN.WEIGHT;
				let temperatureValuesWithCurrentLanguage =
					VALUES_TYPES_TRANSLATED.EN.TEMPERATURE;
				console.log(type);

				switch (type) {
					case VALUES_TYPES.ALL:
						switch (language) {
							case LANGUAGE_APP.LV:
								lengthValuesWithCurrentLanguage =
									VALUES_TYPES_TRANSLATED.LV.LENGTH;
								areaValuesWithCurrentLanguage = VALUES_TYPES_TRANSLATED.LV.AREA;
								pressureValuesWithCurrentLanguage =
									VALUES_TYPES_TRANSLATED.LV.PRESSURE;
								volumeValuesWithCurrentLanguage =
									VALUES_TYPES_TRANSLATED.LV.VOLUME;
								weightValuesWithCurrentLanguage =
									VALUES_TYPES_TRANSLATED.LV.WEIGHT;
								temperatureValuesWithCurrentLanguage =
									VALUES_TYPES_TRANSLATED.LV.TEMPERATURE;
								speedValuesWithCurrentLanguage =
									VALUES_TYPES_TRANSLATED.LV.SPEED;

								break;
						}
						// resultValues.push(
						// 	get().lengthValues,
						// 	get().areaValues,
						// 	get().pressureValues,
						// 	get().speedValues,
						// 	get().volumeValues,
						// 	get().temperatureValues,
						// 	get().weightValues,
						// );
						resultValues.push(
							{
								type: lengthValuesWithCurrentLanguage,
								values: lengthValues,
							},
							{
								type: areaValuesWithCurrentLanguage,
								values: areaValues,
							},
							{
								type: pressureValuesWithCurrentLanguage,
								values: pressureValues,
							},
							{
								type: volumeValuesWithCurrentLanguage,
								values: volumeValues,
							},
							{
								type: weightValuesWithCurrentLanguage,
								values: weightValues,
							},
							{
								type: speedValuesWithCurrentLanguage,
								values: speedValues,
							},
							{
								type: temperatureValuesWithCurrentLanguage,
								values: temperatureValues,
							},
						);
						break;
					case VALUES_TYPES.FAVORITES:
						resultValues.push({
							type: 'Favorites',
							values: get().favoritesValues,
						});
						break;
					case VALUES_TYPES.LENGTH:
						console.log('length');
						let localLength = VALUES_TYPES.LENGTH;
						switch (language) {
							case LANGUAGE_APP.LV:
								// lengthValuesWithCurrentLanguage =
								// 	VALUES_TYPES_TRANSLATED.LV.LENGTH;
								localLength = VALUES_TYPES_TRANSLATED.LV.LENGTH;
								break;
							case LANGUAGE_APP.RU:
								lengthValuesWithCurrentLanguage =
									VALUES_TYPES_TRANSLATED.RU.LENGTH;
								break;
							case LANGUAGE_APP.EN:
								lengthValuesWithCurrentLanguage =
									VALUES_TYPES_TRANSLATED.EN.LENGTH;
								break;
						}

						resultValues.push({
							type: localLength,
							values: lengthValues,
						});
						break;
					case VALUES_TYPES.WEIGHT:
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
							values: weightValues,
						});
						break;
					case VALUES_TYPES.AREA:
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
							values: areaValues,
						});
						break;
					case VALUES_TYPES.TEMPERATURE:
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
							values: temperatureValues,
						});
						break;
					case VALUES_TYPES.SPEED:
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
							values: speedValues,
						});
						break;
					case VALUES_TYPES.VOLUME:
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
							values: volumeValues,
						});
						break;
					case VALUES_TYPES.PRESSURE:
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
							values: pressureValues,
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
