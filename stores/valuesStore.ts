import {LIST_LABEL, LIST_LABEL_TRANSLATE} from '@/helpers/helpersConst';

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
	reset: () => void;
}

export const useValuesStore = create<ValuesStoreInterface>()(
	persist(
		(set, get) => ({
			lengthValues: LENGTH_VALUES(LANGUAGE_APP.EN),
			areaValues: AREA_VALUES(LANGUAGE_APP.EN),
			volumeValues: VOLUME_VALUES(LANGUAGE_APP.EN),
			weightValues: WEIGHT_VALUES(LANGUAGE_APP.EN),
			speedValues: SPEED_VALUES(LANGUAGE_APP.EN),
			temperatureValues: TEMPERATURE_VALUES(LANGUAGE_APP.EN),
			pressureValues: PRESSURE_VALUES(LANGUAGE_APP.EN),
			favoritesValues: [],
			getListValues: (type, language) => {
				const resultValues: RESULT_VALUES_TYPE[] = [];
				// const lengthValues = get().lengthValues.values;
				// const areaValues = get().areaValues.values;
				// const pressureValues = get().pressureValues.values;
				// const speedValues = get().speedValues.values;
				// const volumeValues = get().volumeValues.values;
				// const temperatureValues = get().temperatureValues.values;
				// const weightValues = get().weightValues.values;
				//label
				let favoritesLabelWithCurrentLanguage =
					LIST_LABEL_TRANSLATE.FAVORITES.EN;
				// let lengthValuesLabelWithCurrentLanguage =
				// 	VALUES_TYPES_TRANSLATED.EN.LENGTH;
				// let areaValuesLabelWithCurrentLanguage =
				// 	VALUES_TYPES_TRANSLATED.EN.AREA;
				// let pressureValuesLabelWithCurrentLanguage =
				// 	VALUES_TYPES_TRANSLATED.EN.PRESSURE;
				// let speedValuesLabelWithCurrentLanguage = {};

				// let volumeValuesLabelWithCurrentLanguage =
				// 	VALUES_TYPES_TRANSLATED.EN.VOLUME;
				// let weightValuesLabelWithCurrentLanguage =
				// 	VALUES_TYPES_TRANSLATED.EN.WEIGHT;
				// let temperatureValuesLabelWithCurrentLanguage =
				// 	VALUES_TYPES_TRANSLATED.EN.TEMPERATURE;

				//values
				// const favoritesValuesWithCurrentLanguage = {};
				// let lengthValuesWithCurrentLanguage = [...lengthValues];
				// let areaValuesWithCurrentLanguage = [...areaValues];
				// let pressureValuesWithCurrentLanguage = [...pressureValues];
				// let speedValuesWithCurrentLanguage = [...speedValues];
				// let volumeValuesWithCurrentLanguage = [...volumeValues];
				// let weightValuesWithCurrentLanguage = [...weightValues];
				// let temperatureValuesWithCurrentLanguage = [...temperatureValues];

				//
				switch (type) {
					case VALUES_TYPES.ALL:
						// switch (language) {
						// 	case LANGUAGE_APP.LV:
						// 		lengthValuesLabelWithCurrentLanguage =
						// 			VALUES_TYPES_TRANSLATED.LV.LENGTH;
						// 		console.log(lengthValues);
						// 		lengthValuesWithCurrentLanguage = updateTranslatedValues(
						// 			lengthValues,
						// 			LANGUAGE_APP.LV,
						// 			IMPERIAL_LENGTH_VALUES,
						// 			METRIC_LENGTH_VALUES,
						// 		);
						// 		areaValuesLabelWithCurrentLanguage =
						// 			VALUES_TYPES_TRANSLATED.LV.AREA;

						// 		pressureValuesLabelWithCurrentLanguage =
						// 			VALUES_TYPES_TRANSLATED.LV.PRESSURE;
						// 		pressureValuesWithCurrentLanguage = updateTranslatedValues(
						// 			pressureValues,
						// 			LANGUAGE_APP.LV,
						// 			IMPERIAL_PRESSURE_VALUES,
						// 			METRIC_PRESSURE_VALUES,
						// 		);
						// 		volumeValuesLabelWithCurrentLanguage =
						// 			VALUES_TYPES_TRANSLATED.LV.VOLUME;
						// 		volumeValuesWithCurrentLanguage = updateTranslatedValues(
						// 			volumeValues,
						// 			LANGUAGE_APP.LV,
						// 			IMPERIAL_VOLUME_VALUES,
						// 			METRIC_VOLUME_VALUES,
						// 		);
						// 		weightValuesLabelWithCurrentLanguage =
						// 			VALUES_TYPES_TRANSLATED.LV.WEIGHT;
						// 		weightValuesWithCurrentLanguage = updateTranslatedValues(
						// 			weightValues,
						// 			LANGUAGE_APP.LV,
						// 			IMPERIAL_WEIGHT_VALUES,
						// 			METRIC_WEIGHT_VALUES,
						// 		);
						// 		temperatureValuesLabelWithCurrentLanguage =
						// 			VALUES_TYPES_TRANSLATED.LV.TEMPERATURE;
						// 		temperatureValuesWithCurrentLanguage = updateTranslatedValues(
						// 			temperatureValues,
						// 			LANGUAGE_APP.LV,
						// 			IMPERIAL_TEMPERATURE_VALUES,
						// 			METRIC_TEMPERATURE_VALUES,
						// 		);
						// 		speedValuesLabelWithCurrentLanguage =
						// 			VALUES_TYPES_TRANSLATED.LV.SPEED;
						// 		speedValuesWithCurrentLanguage = updateTranslatedValues(
						// 			speedValues,
						// 			LANGUAGE_APP.LV,
						// 			IMPERIAL_SPEED_VALUES,
						// 			METRIC_SPEED_VALUES,
						// 		);

						// 		break;
						// 	case LANGUAGE_APP.RU:
						// 		lengthValuesLabelWithCurrentLanguage =
						// 			VALUES_TYPES_TRANSLATED.RU.LENGTH;
						// 		lengthValuesWithCurrentLanguage = updateTranslatedValues(
						// 			lengthValues,
						// 			LANGUAGE_APP.RU,
						// 			IMPERIAL_LENGTH_VALUES,
						// 			METRIC_LENGTH_VALUES,
						// 		);
						// 		areaValuesLabelWithCurrentLanguage =
						// 			VALUES_TYPES_TRANSLATED.RU.AREA;
						// 		areaValuesWithCurrentLanguage = areaValues.map((item) => ({
						// 			...item,
						// 			imperialTypeValue: item.imperialTypeValue.replace('EN', 'RU'),
						// 			metricTypeValue: item.metricTypeValue.replace('EN', 'RU'),
						// 		}));
						// 		// console.log(areaValuesWithCurrentLanguage);
						// 		// areaValuesWithCurrentLanguage = updateTranslatedValues(
						// 		// 	areaValues,
						// 		// 	LANGUAGE_APP.RU,
						// 		// 	IMPERIAL_AREA_VALUES,
						// 		// 	METRIC_AREA_VALUES,
						// 		// );
						// 		pressureValuesLabelWithCurrentLanguage =
						// 			VALUES_TYPES_TRANSLATED.RU.PRESSURE;
						// 		pressureValuesWithCurrentLanguage = updateTranslatedValues(
						// 			pressureValues,
						// 			LANGUAGE_APP.RU,
						// 			IMPERIAL_PRESSURE_VALUES,
						// 			METRIC_PRESSURE_VALUES,
						// 		);
						// 		volumeValuesLabelWithCurrentLanguage =
						// 			VALUES_TYPES_TRANSLATED.RU.VOLUME;
						// 		volumeValuesWithCurrentLanguage = updateTranslatedValues(
						// 			volumeValues,
						// 			LANGUAGE_APP.RU,
						// 			IMPERIAL_VOLUME_VALUES,
						// 			METRIC_VOLUME_VALUES,
						// 		);
						// 		weightValuesLabelWithCurrentLanguage =
						// 			VALUES_TYPES_TRANSLATED.RU.WEIGHT;
						// 		weightValuesWithCurrentLanguage = updateTranslatedValues(
						// 			weightValues,
						// 			LANGUAGE_APP.RU,
						// 			IMPERIAL_WEIGHT_VALUES,
						// 			METRIC_WEIGHT_VALUES,
						// 		);
						// 		temperatureValuesWithCurrentLanguage = updateTranslatedValues(
						// 			temperatureValues,
						// 			LANGUAGE_APP.RU,
						// 			IMPERIAL_TEMPERATURE_VALUES,
						// 			METRIC_TEMPERATURE_VALUES,
						// 		);
						// 		// speedValuesLabelWithCurrentLanguage =
						// 		// 	VALUES_TYPES_TRANSLATED.RU.SPEED;
						// 		// speedValuesWithCurrentLanguage = SPEED_VALUES_00(language);
						// 		// speedValuesWithCurrentLanguage = updateTranslatedValues(
						// 		// 	speedValues,
						// 		// 	LANGUAGE_APP.RU,
						// 		// 	IMPERIAL_SPEED_VALUES,
						// 		// 	METRIC_SPEED_VALUES,
						// 		// );
						// 		// speedValuesLabelWithCurrentLanguage = SPEED_VALUES_00(language);
						// 		break;
						// 	case LANGUAGE_APP.EN:
						// 		lengthValuesLabelWithCurrentLanguage =
						// 			VALUES_TYPES_TRANSLATED.EN.LENGTH;
						// 		areaValuesLabelWithCurrentLanguage =
						// 			VALUES_TYPES_TRANSLATED.EN.AREA;
						// 		pressureValuesLabelWithCurrentLanguage =
						// 			VALUES_TYPES_TRANSLATED.EN.PRESSURE;
						// 		volumeValuesLabelWithCurrentLanguage =
						// 			VALUES_TYPES_TRANSLATED.EN.VOLUME;
						// 		weightValuesLabelWithCurrentLanguage =
						// 			VALUES_TYPES_TRANSLATED.EN.WEIGHT;
						// 		temperatureValuesLabelWithCurrentLanguage =
						// 			VALUES_TYPES_TRANSLATED.EN.TEMPERATURE;
						// 		speedValuesLabelWithCurrentLanguage =
						// 			VALUES_TYPES_TRANSLATED.EN.SPEED;

						// 		break;
						// }
						resultValues.push(
							// {
							// 	type: VALUES_TYPES.LENGTH,
							// 	label: lengthValuesLabelWithCurrentLanguage,
							// 	values: lengthValuesWithCurrentLanguage,
							// },
							// {
							// 	type: VALUES_TYPES.AREA,
							// 	label: areaValuesLabelWithCurrentLanguage,
							// 	values: areaValuesWithCurrentLanguage,
							// },
							// {
							// 	type: VALUES_TYPES.PRESSURE,
							// 	label: pressureValuesLabelWithCurrentLanguage,
							// 	values: pressureValuesWithCurrentLanguage,
							// },
							// {
							// 	type: VALUES_TYPES.VOLUME,
							// 	label: volumeValuesLabelWithCurrentLanguage,
							// 	values: volumeValuesWithCurrentLanguage,
							// },
							// {
							// 	type: VALUES_TYPES.WEIGHT,
							// 	label: weightValuesLabelWithCurrentLanguage,
							// 	values: weightValuesWithCurrentLanguage,
							// },
							// {
							// 	type: VALUES_TYPES.SPEED,
							// 	label: speedValuesLabelWithCurrentLanguage,
							// 	values: speedValuesWithCurrentLanguage,
							// },
							LENGTH_VALUES(language),
							AREA_VALUES(language),
							VOLUME_VALUES(language),
							WEIGHT_VALUES(language),
							SPEED_VALUES(language),
							TEMPERATURE_VALUES(language),
							PRESSURE_VALUES(language),
							SPEED_VALUES(language),
							// {
							// 	type: VALUES_TYPES.TEMPERATURE,
							// 	label: temperatureValuesLabelWithCurrentLanguage,
							// 	values: temperatureValuesWithCurrentLanguage,
							// },
						);
						break;
					case VALUES_TYPES.FAVORITES:
						switch (language) {
							case LANGUAGE_APP.EN:
								favoritesLabelWithCurrentLanguage =
									LIST_LABEL_TRANSLATE.FAVORITES.EN;
								break;
							case LANGUAGE_APP.LV:
								favoritesLabelWithCurrentLanguage =
									LIST_LABEL_TRANSLATE.FAVORITES.LV;
								break;
							case LANGUAGE_APP.RU:
								favoritesLabelWithCurrentLanguage =
									LIST_LABEL_TRANSLATE.FAVORITES.RU;
								break;
						}
						resultValues.push({
							type: LIST_LABEL.FAVORITES,
							label: favoritesLabelWithCurrentLanguage,
							values: get().favoritesValues,
						});
						break;
					case VALUES_TYPES.LENGTH:
						// switch (language) {
						// 	case LANGUAGE_APP.LV:
						// 		lengthValuesLabelWithCurrentLanguage =
						// 			VALUES_TYPES_TRANSLATED.LV.LENGTH;
						// 		break;
						// 	case LANGUAGE_APP.RU:
						// 		lengthValuesLabelWithCurrentLanguage =
						// 			VALUES_TYPES_TRANSLATED.RU.LENGTH;
						// 		break;
						// 	case LANGUAGE_APP.EN:
						// 		lengthValuesLabelWithCurrentLanguage =
						// 			VALUES_TYPES_TRANSLATED.EN.LENGTH;
						// 		break;
						// }
						resultValues.push(LENGTH_VALUES(language));
						// resultValues.push({
						// 	type: VALUES_TYPES.LENGTH,
						// 	label: lengthValuesLabelWithCurrentLanguage,
						// 	values: lengthValues,
						// });
						break;
					case VALUES_TYPES.WEIGHT:
						// let localizedWeightType = VALUES_TYPES.WEIGHT;

						// switch (language) {
						// 	case LANGUAGE_APP.LV:
						// 		localizedWeightType = VALUES_TYPES_TRANSLATED.LV.WEIGHT;
						// 		break;
						// 	case LANGUAGE_APP.RU:
						// 		localizedWeightType = VALUES_TYPES_TRANSLATED.RU.WEIGHT;
						// 		break;
						// 	case LANGUAGE_APP.EN:
						// 		localizedWeightType = VALUES_TYPES_TRANSLATED.EN.WEIGHT;
						// 		break;
						// }

						resultValues.push(WEIGHT_VALUES(language));
						// resultValues.push({
						// 	type: VALUES_TYPES.WEIGHT,
						// 	label: localizedWeightType,
						// 	values: weightValues,
						// });
						break;
					case VALUES_TYPES.AREA:
						// let localizedAreaType = VALUES_TYPES.AREA;

						// switch (language) {
						// 	case LANGUAGE_APP.LV:
						// 		localizedAreaType = VALUES_TYPES_TRANSLATED.LV.AREA;
						// 		break;
						// 	case LANGUAGE_APP.RU:
						// 		localizedAreaType = VALUES_TYPES_TRANSLATED.RU.AREA;
						// 		break;
						// 	case LANGUAGE_APP.EN:
						// 		localizedAreaType = VALUES_TYPES_TRANSLATED.EN.AREA;
						// 		break;
						// }

						// resultValues.push({
						// 	type: VALUES_TYPES.AREA,
						// 	label: localizedAreaType,
						// 	values: areaValues,
						// });
						resultValues.push(AREA_VALUES(language));
						break;
					case VALUES_TYPES.TEMPERATURE:
						// let localizedTemperatureType = VALUES_TYPES.TEMPERATURE;

						// switch (language) {
						// 	case LANGUAGE_APP.LV:
						// 		localizedTemperatureType =
						// 			VALUES_TYPES_TRANSLATED.LV.TEMPERATURE;
						// 		break;
						// 	case LANGUAGE_APP.RU:
						// 		localizedTemperatureType =
						// 			VALUES_TYPES_TRANSLATED.RU.TEMPERATURE;
						// 		break;
						// 	case LANGUAGE_APP.EN:
						// 		localizedTemperatureType =
						// 			VALUES_TYPES_TRANSLATED.EN.TEMPERATURE;
						// 		break;
						// }

						// resultValues.push({
						// 	type: VALUES_TYPES.TEMPERATURE,
						// 	label: localizedTemperatureType,
						// 	values: temperatureValues,
						// });
						resultValues.push(TEMPERATURE_VALUES(language));
						break;
					case VALUES_TYPES.SPEED:
						// let localizedSpeedType = VALUES_TYPES.SPEED;

						// switch (language) {
						// 	case LANGUAGE_APP.LV:
						// 		localizedSpeedType = VALUES_TYPES_TRANSLATED.LV.SPEED;
						// 		break;
						// 	case LANGUAGE_APP.RU:
						// 		localizedSpeedType = VALUES_TYPES_TRANSLATED.RU.SPEED;
						// 		break;
						// 	case LANGUAGE_APP.EN:
						// 		localizedSpeedType = VALUES_TYPES_TRANSLATED.EN.SPEED;
						// 		break;
						// }

						// resultValues.push({
						// 	type: VALUES_TYPES.SPEED,
						// 	label: localizedSpeedType,
						// 	values: speedValues,
						// });
						resultValues.push(SPEED_VALUES(language));
						break;
					case VALUES_TYPES.VOLUME:
						// let localizedVolumeType = VALUES_TYPES.VOLUME;

						// switch (language) {
						// 	case LANGUAGE_APP.LV:
						// 		localizedVolumeType = VALUES_TYPES_TRANSLATED.LV.VOLUME;
						// 		break;
						// 	case LANGUAGE_APP.RU:
						// 		localizedVolumeType = VALUES_TYPES_TRANSLATED.RU.VOLUME;
						// 		break;
						// 	case LANGUAGE_APP.EN:
						// 		localizedVolumeType = VALUES_TYPES_TRANSLATED.EN.VOLUME;
						// 		break;
						// }

						// resultValues.push({
						// 	type: VALUES_TYPES.VOLUME,
						// 	label: localizedVolumeType,
						// 	values: volumeValues,
						// });
						resultValues.push(VOLUME_VALUES(language));
						break;
					case VALUES_TYPES.PRESSURE:
						// let localizedPressureType = VALUES_TYPES.PRESSURE;

						// switch (language) {
						// 	case LANGUAGE_APP.LV:
						// 		localizedPressureType = VALUES_TYPES_TRANSLATED.LV.PRESSURE;
						// 		break;
						// 	case LANGUAGE_APP.RU:
						// 		localizedPressureType = VALUES_TYPES_TRANSLATED.RU.PRESSURE;
						// 		break;
						// 	case LANGUAGE_APP.EN:
						// 		localizedPressureType = VALUES_TYPES_TRANSLATED.EN.PRESSURE;
						// 		break;
						// }

						// resultValues.push({
						// 	type: VALUES_TYPES.PRESSURE,
						// 	label: localizedPressureType,
						// 	values: pressureValues,
						// });
						resultValues.push(PRESSURE_VALUES(language));
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
			reset: () => {
				set({
					lengthValues: LENGTH_VALUES(LANGUAGE_APP.EN),
					areaValues: AREA_VALUES(LANGUAGE_APP.EN),
					volumeValues: VOLUME_VALUES(LANGUAGE_APP.EN),
					weightValues: WEIGHT_VALUES(LANGUAGE_APP.EN),
					speedValues: SPEED_VALUES(LANGUAGE_APP.EN),
					temperatureValues: TEMPERATURE_VALUES(LANGUAGE_APP.EN),
					pressureValues: PRESSURE_VALUES(LANGUAGE_APP.EN),
					favoritesValues: [],
				});
			},
		}),
		{
			name: 'values-storage',
			storage: createJSONStorage(() => AsyncStorage),
		},
	),
);
