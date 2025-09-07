import {LIST_LABEL, LIST_LABEL_TRANSLATE} from '@/helpers/helpersConst';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {LANGUAGE_APP} from './const/globalStoreConst';
import {
	AREA_VALUES,
	HISTORY_VALUE_TYPE,
	LENGTH_VALUES,
	PRESSURE_VALUES,
	RESULT_VALUES_TYPE,
	SPEED_VALUES,
	TEMPERATURE_VALUES,
	VALUES_TYPES,
	VOLUME_VALUES,
	WEIGHT_VALUES,
} from './const/listValues';
export type GROUPED_HISTORY_TYPE = {
	date: string;
	values: {
		imperialValues: {label: string; value: string};
		metricValues: {label: string; value: string};
	}[];
};
interface ValuesStoreInterface {
	lengthValues: RESULT_VALUES_TYPE;
	areaValues: RESULT_VALUES_TYPE;
	volumeValues: RESULT_VALUES_TYPE;
	weightValues: RESULT_VALUES_TYPE;
	speedValues: RESULT_VALUES_TYPE;
	temperatureValues: RESULT_VALUES_TYPE;
	pressureValues: RESULT_VALUES_TYPE;
	favoritesValues: string[];
	historyValues: HISTORY_VALUE_TYPE[];

	addHistoryValues: (values: HISTORY_VALUE_TYPE[]) => void;
	getListValues: (type: string, language: LANGUAGE_APP) => RESULT_VALUES_TYPE[];
	getHistoryValues: (language: LANGUAGE_APP) => GROUPED_HISTORY_TYPE[];
	checkIsFavorites: (id: string) => boolean;
	setFavoritesValues: (id: string) => void;
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
			historyValues: [],
			addHistoryValues: (values) => {
				set((state) => ({
					historyValues: [...state.historyValues, ...values],
				}));
			},
			getListValues: (type, language) => {
				const resultValues: RESULT_VALUES_TYPE[] = [];
				//label
				switch (type) {
					case VALUES_TYPES.ALL:
						resultValues.push(
							LENGTH_VALUES(language),
							AREA_VALUES(language),
							VOLUME_VALUES(language),
							WEIGHT_VALUES(language),
							SPEED_VALUES(language),
							TEMPERATURE_VALUES(language),
							PRESSURE_VALUES(language),
							SPEED_VALUES(language),
						);
						break;
					case VALUES_TYPES.FAVORITES:
						const allValues = [
							...LENGTH_VALUES(language).values,
							...WEIGHT_VALUES(language).values,
							...AREA_VALUES(language).values,
							...VOLUME_VALUES(language).values,
							...TEMPERATURE_VALUES(language).values,
							...PRESSURE_VALUES(language).values,
							...SPEED_VALUES(language).values,
						];
						const favoriteItems = allValues.filter((item) =>
							get().favoritesValues.includes(item.id),
						);
						resultValues.push({
							type: LIST_LABEL.FAVORITES,
							label: LIST_LABEL_TRANSLATE.FAVORITES[language],
							values: favoriteItems,
						});
						break;
					case VALUES_TYPES.LENGTH:
						resultValues.push(LENGTH_VALUES(language));
						break;
					case VALUES_TYPES.WEIGHT:
						resultValues.push(WEIGHT_VALUES(language));
						break;
					case VALUES_TYPES.AREA:
						resultValues.push(AREA_VALUES(language));
						break;
					case VALUES_TYPES.TEMPERATURE:
						resultValues.push(TEMPERATURE_VALUES(language));
						break;
					case VALUES_TYPES.SPEED:
						resultValues.push(SPEED_VALUES(language));
						break;
					case VALUES_TYPES.VOLUME:
						resultValues.push(VOLUME_VALUES(language));
						break;
					case VALUES_TYPES.PRESSURE:
						resultValues.push(PRESSURE_VALUES(language));
						break;
				}
				return resultValues;
			},
			getHistoryValues: (language) => {
				const history = get().historyValues;

				const uniqueDates = Array.from(
					new Set(history.map((item) => item.data)),
				);

				const groupedHistory = uniqueDates.map((date) => ({
					date,
					values: history
						.filter((h) => h.data === date) // все записи с этой датой
						.flatMap((h) => h.values), // распаковываем массив values
				}));
				return groupedHistory;
			},
			checkIsFavorites: (id) => {
				return get().favoritesValues.includes(id);
			},
			setFavoritesValues: (id) => {
				const exists = get().favoritesValues.includes(id);

				if (exists) {
					set((state) => ({
						favoritesValues: state.favoritesValues.filter(
							(favId) => favId !== id,
						),
					}));
				} else {
					set((state) => ({
						favoritesValues: [...state.favoritesValues, id],
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
					historyValues: [],
				});
			},
		}),
		{
			name: 'values-storage',
			storage: createJSONStorage(() => AsyncStorage),
		},
	),
);
