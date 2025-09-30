import {
	IMPERIAL_AREA_VALUES,
	IMPERIAL_LENGTH_VALUES,
	IMPERIAL_PRESSURE_VALUES,
	IMPERIAL_SPEED_VALUES,
	IMPERIAL_TEMPERATURE_VALUES,
	IMPERIAL_VOLUME_VALUES,
	IMPERIAL_WEIGHT_VALUES,
	METRIC_AREA_VALUES,
	METRIC_LENGTH_VALUES,
	METRIC_PRESSURE_VALUES,
	METRIC_SPEED_VALUES,
	METRIC_TEMPERATURE_VALUES,
	METRIC_VOLUME_VALUES,
	METRIC_WEIGHT_VALUES,
	VALUES_TYPES,
	VALUES_TYPES_TRANSLATED,
} from '@/constants/translateContent';
import {LANGUAGE_APP} from './globalStoreConst';

export const fahrenheitToCelsiusFormula = '°C = (°F - 32) * 5 / 9';

export type HISTORY_VALUE_TYPE = {
	data: string;
	values: {
		imperialValues: {
			label: string;
			value: string;
		};
		metricValues: {
			label: string;
			value: string;
		};
	};
};

export type HISTORY_VALUES_TYPE = {
	data: string;
	values: HISTORY_VALUE_TYPE[];
};

export const DEFAULT_IMPERIAL_COUNT = 1;

export type VALUES_ITEM = {
	id: string;
	imperialTypeValue: string;
	metricTypeValue: string;
	value: number;
};

export type VALUES_TYPE = {
	type: string;
	imperialTypeValue: string;
	metricTypeValue: string;
	value: number;
};

export interface RESULT_VALUES_TYPE {
	type: string;
	label: string;
	values: VALUES_ITEM[];
}

export const LENGTH_VALUES = (language: LANGUAGE_APP) => ({
	type: VALUES_TYPES.LENGTH,
	label: VALUES_TYPES_TRANSLATED[language].LENGTH,
	values: [
		{
			id: 'inch',
			imperialTypeValue: IMPERIAL_LENGTH_VALUES[language].INCH,
			metricTypeValue: METRIC_LENGTH_VALUES[language].CM,
			value: 2.54,
		},
		{
			id: 'foot',
			imperialTypeValue: IMPERIAL_LENGTH_VALUES[language].FOOT,
			metricTypeValue: METRIC_LENGTH_VALUES[language].CM,
			value: 30.48,
		},
		{
			id: 'yard',
			imperialTypeValue: IMPERIAL_LENGTH_VALUES[language].YARD,
			metricTypeValue: METRIC_LENGTH_VALUES[language].CM,
			value: 91.44,
		},
		{
			id: 'mile',
			imperialTypeValue: IMPERIAL_LENGTH_VALUES[language].MILE,
			metricTypeValue: METRIC_LENGTH_VALUES[language].KM,
			value: 1.609,
		},
	],
});

export const WEIGHT_VALUES = (language: LANGUAGE_APP) => ({
	type: VALUES_TYPES.WEIGHT,
	label: VALUES_TYPES_TRANSLATED[language].WEIGHT,
	values: [
		{
			id: 'ounce',
			imperialTypeValue: IMPERIAL_WEIGHT_VALUES[language].OUNCE,
			metricTypeValue: METRIC_WEIGHT_VALUES[language].GRAM,
			value: 28.3495,
		},
		{
			id: 'pound',
			imperialTypeValue: IMPERIAL_WEIGHT_VALUES[language].POUND,
			metricTypeValue: METRIC_WEIGHT_VALUES[language].KILOGRAM,
			value: 0.4536,
		},
		{
			id: 'stone',
			imperialTypeValue: IMPERIAL_WEIGHT_VALUES[language].STONE,
			metricTypeValue: METRIC_WEIGHT_VALUES[language].KILOGRAM,
			value: 6.35,
		},
		{
			id: 'ton',
			imperialTypeValue: IMPERIAL_WEIGHT_VALUES[language].TON,
			metricTypeValue: METRIC_WEIGHT_VALUES[language].KILOGRAM,
			value: 907.185,
		},
	],
});

export const AREA_VALUES = (language: LANGUAGE_APP) => ({
	type: VALUES_TYPES.AREA,
	label: VALUES_TYPES_TRANSLATED[language].AREA,
	values: [
		{
			id: 'square_inch',
			imperialTypeValue: IMPERIAL_AREA_VALUES[language].SQUARE_INCH,
			metricTypeValue: METRIC_AREA_VALUES[language].SQUARE_CM,
			value: 6.4516,
		},
		{
			id: 'square_foot',
			imperialTypeValue: IMPERIAL_AREA_VALUES[language].SQUARE_FOOT,
			metricTypeValue: METRIC_AREA_VALUES[language].SQUARE_METER,
			value: 0.0929,
		},
		{
			id: 'square_yard',
			imperialTypeValue: IMPERIAL_AREA_VALUES[language].SQUARE_YARD,
			metricTypeValue: METRIC_AREA_VALUES[language].SQUARE_METER,
			value: 0.8361,
		},
		{
			id: 'acre',
			imperialTypeValue: IMPERIAL_AREA_VALUES[language].ACRE,
			metricTypeValue: METRIC_AREA_VALUES[language].HECTARE,
			value: 0.4047,
		},
		{
			id: 'square_mile',
			imperialTypeValue: IMPERIAL_AREA_VALUES[language].SQUARE_MILE,
			metricTypeValue: METRIC_AREA_VALUES[language].SQUARE_KILOMETER,
			value: 2.59,
		},
	],
});

export const VOLUME_VALUES = (language: LANGUAGE_APP) => ({
	type: VALUES_TYPES.VOLUME,
	label: VALUES_TYPES_TRANSLATED.EN.VOLUME,
	values: [
		{
			id: 'cubic_inch',
			imperialTypeValue: IMPERIAL_VOLUME_VALUES[language].CUBIC_INCH,
			metricTypeValue: METRIC_VOLUME_VALUES[language].CUBIC_CM,
			value: 16.387,
		},
		{
			id: 'cubic_foot',
			imperialTypeValue: IMPERIAL_VOLUME_VALUES[language].CUBIC_FOOT,
			metricTypeValue: METRIC_VOLUME_VALUES[language].CUBIC_M,
			value: 0.0283,
		},
		{
			id: 'cubic_yard',
			imperialTypeValue: IMPERIAL_VOLUME_VALUES[language].CUBIC_YARD,
			metricTypeValue: METRIC_VOLUME_VALUES[language].CUBIC_M,
			value: 0.7646,
		},
		{
			id: 'gallon',
			imperialTypeValue: IMPERIAL_VOLUME_VALUES[language].GALLON,
			metricTypeValue: METRIC_VOLUME_VALUES[language].LITER,
			value: 0.4047,
		},
		{
			id: 'pint',
			imperialTypeValue: IMPERIAL_VOLUME_VALUES[language].PINT,
			metricTypeValue: METRIC_VOLUME_VALUES[language].LITER,
			value: 0.473,
		},
		{
			id: 'quart',
			imperialTypeValue: IMPERIAL_VOLUME_VALUES[language].QUART,
			metricTypeValue: METRIC_VOLUME_VALUES[language].LITER,
			value: 0.946,
		},
	],
});

export const SPEED_VALUES = (currentLanguage: LANGUAGE_APP) => ({
	type: VALUES_TYPES.SPEED,
	label: VALUES_TYPES_TRANSLATED[currentLanguage].SPEED,
	values: [
		{
			id: 'mile_per_hour',
			imperialTypeValue: IMPERIAL_SPEED_VALUES[currentLanguage].MILE_PER_HOUR,
			metricTypeValue: METRIC_SPEED_VALUES[currentLanguage].KM_PER_HOUR,
			value: 1.609,
		},
	],
});

export const PRESSURE_VALUES = (language: LANGUAGE_APP) => ({
	type: VALUES_TYPES.PRESSURE,
	label: VALUES_TYPES_TRANSLATED[language].PRESSURE,
	values: [
		{
			id: 'psi',
			imperialTypeValue: IMPERIAL_PRESSURE_VALUES[language].PSI,
			metricTypeValue: METRIC_PRESSURE_VALUES[language].PASCALS,
			value: 6894.76,
		},
	],
});

export const TEMPERATURE_VALUES = (language: LANGUAGE_APP) => ({
	type: VALUES_TYPES.TEMPERATURE,
	label: VALUES_TYPES_TRANSLATED[language].TEMPERATURE,
	values: [
		{
			id: 'fahrenheit',
			imperialTypeValue: IMPERIAL_TEMPERATURE_VALUES[language].FAHRENHEIT,
			metricTypeValue: METRIC_TEMPERATURE_VALUES[language].CELSIUS,
			value: 32,
		},
	],
});
