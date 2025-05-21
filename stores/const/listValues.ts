const METRIC_LENGTH_VALUES = {
	CM: 'cm',
	KM: 'km',
};

const IMPERIAL_LENGTH_VALUES = {
	INCH: 'inch',
	FOOT: 'foot',
	YARD: 'yard',
	MILE: 'mile',
};

const METRIC_AREA_VALUES = {
	SQUARE_CM: 'см²',
	SQUARE_METER: 'м²',
	HECTARE: 'ga',
	SQUARE_KILOMETER: 'км²',
};

const IMPERIAL_AREA_VALUES = {
	SQUARE_INCH: 'square Inch',
	SQUARE_FOOT: 'square Foot',
	SQUARE_YARD: 'square Yard',
	ACRE: 're',
	SQUARE_MILE: 'square Mile',
};
const METRIC_WEIGHT_VALUES = {
	GRAM: 'gr',
	KILOGRAM: 'kg',
};
const IMPERIAL_WEIGHT_VALUES = {
	OUNCE: 'ounce',
	POUND: 'pound',
	STONE: 'stone',
	TON: 'ton',
};

const METRIC_VOLUME_VALUES = {
	CUBIC_CM: 'см³',
	CUBIC_M: 'м³',
	LITER: 'l',
};

const IMPERIAL_VOLUME_VALUES = {
	CUBIC_INCH: 'cubic inch',
	CUBIC_FOOT: 'cubic foot',
	CUBIC_YARD: 'cubic yard',
	GALLON: 'gallon',
	PINT: 'pint',
	QUART: 'quart',
};
const METRIC_TEMPERATURE_VALUES = {
	CELSIUS: '℃',
};

export const IMPERIAL_TEMPERATURE_VALUES = {
	FAHRENHEIT: '℉',
};
const METRIC_SPEED_VALUES = {
	KM_PER_HOUR: 'km/h',
};

const IMPERIAL_SPEED_VALUES = {
	MILE_PER_HOUR: 'mp/h',
};
const METRIC_PRESSURE_VALUES = {
	PASCALS: 'Pa',
};

const IMPERIAL_PRESSURE_VALUES = {
	PSI: 'psi',
};

export const DEFAULT_IMPERIAL_COUNT = 1;

export const VALUES_TYPES = {
	ALL: 'All',
	LENGTH: 'Length',
	AREA: 'Area',
	VOLUME: 'Volume',
	WEIGHT: 'Weight',
	TEMPERATURE: 'Temperature',
	SPEED: 'Speed ',
	PRESSURE: 'Pressure',
};
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
	values: VALUES_ITEM[];
}

export const LENGTH_VALUES: RESULT_VALUES_TYPE = {
	type: VALUES_TYPES.LENGTH,
	values: [
		{
			id: '0',
			imperialTypeValue: IMPERIAL_LENGTH_VALUES.INCH,
			metricTypeValue: METRIC_LENGTH_VALUES.CM,
			value: 2.54,
		},
		{
			id: '1',
			imperialTypeValue: IMPERIAL_LENGTH_VALUES.FOOT,
			metricTypeValue: METRIC_LENGTH_VALUES.CM,
			value: 30.48,
		},
		{
			id: '2',
			imperialTypeValue: IMPERIAL_LENGTH_VALUES.YARD,
			metricTypeValue: METRIC_LENGTH_VALUES.CM,
			value: 91.44,
		},
		{
			id: '3',
			imperialTypeValue: IMPERIAL_LENGTH_VALUES.MILE,
			metricTypeValue: METRIC_LENGTH_VALUES.KM,
			value: 1.609,
		},
	],
};

export const WEIGHT_VALUES: RESULT_VALUES_TYPE = {
	type: VALUES_TYPES.WEIGHT,
	values: [
		{
			id: '0',
			imperialTypeValue: IMPERIAL_WEIGHT_VALUES.OUNCE,
			metricTypeValue: METRIC_WEIGHT_VALUES.GRAM,
			value: 28.3495,
		},
		{
			id: '1',
			imperialTypeValue: IMPERIAL_WEIGHT_VALUES.POUND,
			metricTypeValue: METRIC_WEIGHT_VALUES.KILOGRAM,
			value: 0.4536,
		},
		{
			id: '2',
			imperialTypeValue: IMPERIAL_WEIGHT_VALUES.STONE,
			metricTypeValue: METRIC_WEIGHT_VALUES.KILOGRAM,
			value: 6.35,
		},
		{
			id: '3',
			imperialTypeValue: IMPERIAL_WEIGHT_VALUES.TON,
			metricTypeValue: METRIC_WEIGHT_VALUES.KILOGRAM,
			value: 907.185,
		},
	],
};

export const AREA_VALUES: RESULT_VALUES_TYPE = {
	type: VALUES_TYPES.AREA,
	values: [
		{
			id: '0',
			imperialTypeValue: IMPERIAL_AREA_VALUES.SQUARE_INCH,
			metricTypeValue: METRIC_AREA_VALUES.SQUARE_CM,
			value: 6.4516,
		},
		{
			id: '1',
			imperialTypeValue: IMPERIAL_LENGTH_VALUES.FOOT,
			metricTypeValue: METRIC_AREA_VALUES.SQUARE_METER,
			value: 0.0929,
		},
		{
			id: '2',
			imperialTypeValue: IMPERIAL_LENGTH_VALUES.YARD,
			metricTypeValue: METRIC_AREA_VALUES.SQUARE_METER,
			value: 0.8361,
		},
		{
			id: '3',
			imperialTypeValue: IMPERIAL_AREA_VALUES.ACRE,
			metricTypeValue: METRIC_AREA_VALUES.HECTARE,
			value: 0.4047,
		},
		{
			id: '4',
			imperialTypeValue: IMPERIAL_AREA_VALUES.SQUARE_MILE,
			metricTypeValue: METRIC_AREA_VALUES.SQUARE_KILOMETER,
			value: 2.59,
		},
	],
};

export const VOLUME_VALUES: RESULT_VALUES_TYPE = {
	type: VALUES_TYPES.VOLUME,
	values: [
		{
			id: '0',
			imperialTypeValue: IMPERIAL_VOLUME_VALUES.CUBIC_INCH,
			metricTypeValue: METRIC_VOLUME_VALUES.CUBIC_CM,
			value: 16.387,
		},
		{
			id: '1',
			imperialTypeValue: IMPERIAL_VOLUME_VALUES.CUBIC_FOOT,
			metricTypeValue: METRIC_VOLUME_VALUES.CUBIC_M,
			value: 0.0283,
		},
		{
			id: '2',
			imperialTypeValue: IMPERIAL_VOLUME_VALUES.CUBIC_YARD,
			metricTypeValue: METRIC_VOLUME_VALUES.CUBIC_M,
			value: 0.7646,
		},
		{
			id: '3',
			imperialTypeValue: IMPERIAL_VOLUME_VALUES.GALLON,
			metricTypeValue: METRIC_VOLUME_VALUES.LITER,
			value: 0.4047,
		},
		{
			id: '4',
			imperialTypeValue: IMPERIAL_VOLUME_VALUES.PINT,
			metricTypeValue: METRIC_VOLUME_VALUES.LITER,
			value: 0.473,
		},
		{
			id: '5',
			imperialTypeValue: IMPERIAL_VOLUME_VALUES.QUART,
			metricTypeValue: METRIC_VOLUME_VALUES.LITER,
			value: 0.946,
		},
	],
};

export const SPEED_VALUES: RESULT_VALUES_TYPE = {
	type: VALUES_TYPES.SPEED,
	values: [
		{
			id: '0',
			imperialTypeValue: IMPERIAL_SPEED_VALUES.MILE_PER_HOUR,
			metricTypeValue: METRIC_SPEED_VALUES.KM_PER_HOUR,
			value: 1.609,
		},
	],
};

export const PRESSURE_VALUES: RESULT_VALUES_TYPE = {
	type: VALUES_TYPES.PRESSURE,
	values: [
		{
			id: '0',
			imperialTypeValue: IMPERIAL_PRESSURE_VALUES.PSI,
			metricTypeValue: METRIC_PRESSURE_VALUES.PASCALS,
			value: 6894.76,
		},
	],
};

export const TEMPERATURE_VALUES: RESULT_VALUES_TYPE = {
	type: VALUES_TYPES.TEMPERATURE,
	values: [
		{
			id: '0',
			imperialTypeValue: IMPERIAL_TEMPERATURE_VALUES.FAHRENHEIT,
			metricTypeValue: METRIC_TEMPERATURE_VALUES.CELSIUS,
			value: 32,
		},
	],
};
