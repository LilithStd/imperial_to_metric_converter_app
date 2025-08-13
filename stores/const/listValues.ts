import {LANGUAGE_APP} from './globalStoreConst';

export const fahrenheitToCelsiusFormula = '°C = (°F - 32) * 5 / 9';

export const METRIC_LENGTH_VALUES = {
	EN: {
		CM: 'cm',
		KM: 'km',
	},
	RU: {
		CM: 'см',
		KM: 'км',
	},
	LV: {
		CM: 'cm',
		KM: 'km',
	},
};
type ValuesHistoryType = {
	imperialValues: {
		label: string;
		value: string;
	};
	metricValues: {
		label: string;
		value: string;
	};
};

export type HISTORY_VALUES_TYPE = {
	data: string;
	values: ValuesHistoryType[];
};

export const IMPERIAL_LENGTH_VALUES = {
	EN: {
		INCH: 'inch',
		FOOT: 'foot',
		YARD: 'yard',
		MILE: 'mile',
	},
	RU: {
		INCH: 'дюйм',
		FOOT: 'фут',
		YARD: 'ярд',
		MILE: 'миля',
	},
	LV: {
		INCH: 'collas',
		FOOT: 'pēda',
		YARD: 'jards',
		MILE: 'jūdze',
	},
};

export const METRIC_AREA_VALUES = {
	EN: {
		SQUARE_CM: 'см²',
		SQUARE_METER: 'м²',
		HECTARE: 'ga',
		SQUARE_KILOMETER: 'км²',
	},
	RU: {
		SQUARE_CM: 'см²',
		SQUARE_METER: 'м²',
		HECTARE: 'га',
		SQUARE_KILOMETER: 'км²',
	},
	LV: {
		SQUARE_CM: 'см²',
		SQUARE_METER: 'м²',
		HECTARE: 'ga',
		SQUARE_KILOMETER: 'км²',
	},
};

export const IMPERIAL_AREA_VALUES = {
	EN: {
		SQUARE_INCH: 'square inch',
		SQUARE_FOOT: 'square foot',
		SQUARE_YARD: 'square yard',
		ACRE: 're',
		SQUARE_MILE: 'square mile',
	},
	RU: {
		SQUARE_INCH: 'квадратный дюйм',
		SQUARE_FOOT: 'квадратный фут',
		SQUARE_YARD: 'квадратный ярд',
		ACRE: 'акр',
		SQUARE_MILE: 'квадратная миля',
	},
	LV: {
		SQUARE_INCH: 'kvadrātcollu',
		SQUARE_FOOT: 'kvadrātpēda',
		SQUARE_YARD: 'kvadrātjards',
		ACRE: 'akrs',
		SQUARE_MILE: 'kvadrātjūdze',
	},
};
export const METRIC_WEIGHT_VALUES = {
	EN: {
		GRAM: 'gr',
		KILOGRAM: 'kg',
	},
	RU: {
		GRAM: 'гр',
		KILOGRAM: 'кг',
	},
	LV: {
		GRAM: 'gr',
		KILOGRAM: 'kg',
	},
};

export const WEIGHT_VALUES_00 = {
	imperial: {
		EN: {
			OUNCE: 'ounce',
			POUND: 'pound',
			STONE: 'stone',
			TON: 'ton',
		},
		RU: {
			OUNCE: 'унция',
			POUND: 'фунт',
			STONE: 'стоун',
			TON: 'тонна',
		},
		LV: {
			OUNCE: 'unce',
			POUND: 'mārciņa',
			STONE: 'stone',
			TON: 'tonna',
		},
	},
	metric: {
		EN: {
			GRAM: 'gr',
			KILOGRAM: 'kg',
		},
		RU: {
			GRAM: 'гр',
			KILOGRAM: 'кг',
		},
		LV: {
			GRAM: 'gr',
			KILOGRAM: 'kg',
		},
	},
};

export const IMPERIAL_WEIGHT_VALUES = {
	EN: {
		OUNCE: 'ounce',
		POUND: 'pound',
		STONE: 'stone',
		TON: 'ton',
	},
	RU: {
		OUNCE: 'унция',
		POUND: 'фунт',
		STONE: 'стоун',
		TON: 'тонна',
	},
	LV: {
		OUNCE: 'unce',
		POUND: 'mārciņa',
		STONE: 'stone',
		TON: 'tonna',
	},
};

export const METRIC_VOLUME_VALUES = {
	EN: {
		CUBIC_CM: 'см³',
		CUBIC_M: 'м³',
		LITER: 'l',
	},
	RU: {
		CUBIC_CM: 'см³',
		CUBIC_M: 'м³',
		LITER: 'л',
	},
	LV: {
		CUBIC_CM: 'см³',
		CUBIC_M: 'м³',
		LITER: 'l',
	},
};

export const IMPERIAL_VOLUME_VALUES = {
	EN: {
		CUBIC_INCH: 'cubic inch',
		CUBIC_FOOT: 'cubic foot',
		CUBIC_YARD: 'cubic yard',
		GALLON: 'gallon',
		PINT: 'pint',
		QUART: 'quart',
	},
	RU: {
		CUBIC_INCH: 'кубический дюйм',
		CUBIC_FOOT: 'кубический фут',
		CUBIC_YARD: 'кубический ярд',
		GALLON: 'галлон',
		PINT: 'пинта',
		QUART: 'кварта',
	},
	LV: {
		CUBIC_INCH: 'kubikcollas',
		CUBIC_FOOT: 'kubikfootas',
		CUBIC_YARD: 'kubikjards',
		GALLON: 'galons',
		PINT: 'pinta',
		QUART: 'kvarts',
	},
};
export const METRIC_TEMPERATURE_VALUES = {
	EN: {
		CELSIUS: '℃',
	},
	RU: {
		CELSIUS: '℃',
	},
	LV: {
		CELSIUS: '℃',
	},
};

export const IMPERIAL_TEMPERATURE_VALUES = {
	EN: {
		FAHRENHEIT: '℉',
	},
	RU: {
		FAHRENHEIT: '℉',
	},
	LV: {
		FAHRENHEIT: '℉',
	},
};
export const METRIC_SPEED_VALUES = {
	EN: {
		KM_PER_HOUR: 'km/h',
	},
	RU: {
		KM_PER_HOUR: 'км/ч',
	},
	LV: {
		KM_PER_HOUR: 'km/s',
	},
};

export const IMPERIAL_SPEED_VALUES = {
	EN: {
		MILE_PER_HOUR: 'mp/h',
	},
	RU: {
		MILE_PER_HOUR: 'м/ч',
	},
	LV: {
		MILE_PER_HOUR: 'mp/s',
	},
};
export const METRIC_PRESSURE_VALUES = {
	EN: {
		PASCALS: 'Pa',
	},
	RU: {
		PASCALS: 'Пa',
	},
	LV: {
		PASCALS: 'Pa',
	},
};

export const IMPERIAL_PRESSURE_VALUES = {
	EN: {
		PSI: 'psi',
	},
	RU: {
		PSI: 'пси',
	},
	LV: {
		PSI: 'psi',
	},
};

export const DEFAULT_IMPERIAL_COUNT = 1;

export const VALUES_TYPES = {
	ALL: 'All',
	FAVORITES: 'Favorites',
	HISTORY: 'History',
	LENGTH: 'Length',
	AREA: 'Area',
	VOLUME: 'Volume',
	WEIGHT: 'Weight',
	TEMPERATURE: 'Temperature',
	SPEED: 'Speed ',
	PRESSURE: 'Pressure',
};

export const VALUES_TYPES_TRANSLATED = {
	EN: {
		ALL: 'All',
		FAVORITES: 'Favorites',
		LENGTH: 'Length',
		AREA: 'Area',
		VOLUME: 'Volume',
		WEIGHT: 'Weight',
		TEMPERATURE: 'Temperature',
		SPEED: 'Speed ',
		PRESSURE: 'Pressure',
	},
	RU: {
		ALL: 'Все',
		FAVORITES: 'Избранные',
		LENGTH: 'Длина',
		AREA: 'Площадь',
		VOLUME: 'Объём',
		WEIGHT: 'Масса',
		TEMPERATURE: 'Температура',
		SPEED: 'Скорость',
		PRESSURE: 'Давление',
	},
	LV: {
		ALL: 'Visi',
		FAVORITES: 'Favorīti',
		LENGTH: 'Garums',
		AREA: 'Laukums',
		VOLUME: 'Tilpums',
		WEIGHT: 'Svars',
		TEMPERATURE: 'Temperatūra',
		SPEED: 'Ātrums',
		PRESSURE: 'Spiediens',
	},
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
