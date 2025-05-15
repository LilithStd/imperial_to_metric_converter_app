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

// export const WIDTH_VALUES: VALUES_TYPE[] = [
// 	{
// 		type: VALUES_TYPES.LENGTH,
// 		imperialTypeValue: IMPERIAL_LENGTH_VALUES.INCH,
// 		metricTypeValue: METRIC_LENGTH_VALUES.CM,
// 		value: 2.54,
// 	},
// 	{
// 		type: VALUES_TYPES.LENGTH,
// 		imperialTypeValue: IMPERIAL_LENGTH_VALUES.FOOT,
// 		metricTypeValue: METRIC_LENGTH_VALUES.CM,
// 		value: 30.48,
// 	},
// 	{
// 		type: VALUES_TYPES.LENGTH,
// 		imperialTypeValue: IMPERIAL_LENGTH_VALUES.YARD,
// 		metricTypeValue: METRIC_LENGTH_VALUES.CM,
// 		value: 91.44,
// 	},
// 	{
// 		type: VALUES_TYPES.LENGTH,
// 		imperialTypeValue: IMPERIAL_LENGTH_VALUES.MILE,
// 		metricTypeValue: METRIC_LENGTH_VALUES.KM,
// 		value: 1.609,
// 	},
// ];

export const WIDTH_VALUES: RESULT_VALUES_TYPE = {
	type: VALUES_TYPES.LENGTH,
	values: [
		{
			id: '1',
			imperialTypeValue: IMPERIAL_LENGTH_VALUES.INCH,
			metricTypeValue: METRIC_LENGTH_VALUES.CM,
			value: 2.54,
		},
		{
			id: '2',
			imperialTypeValue: IMPERIAL_LENGTH_VALUES.FOOT,
			metricTypeValue: METRIC_LENGTH_VALUES.CM,
			value: 30.48,
		},
		{
			id: '3',
			imperialTypeValue: IMPERIAL_LENGTH_VALUES.YARD,
			metricTypeValue: METRIC_LENGTH_VALUES.CM,
			value: 91.44,
		},
		{
			id: '4',
			imperialTypeValue: IMPERIAL_LENGTH_VALUES.MILE,
			metricTypeValue: METRIC_LENGTH_VALUES.KM,
			value: 1.609,
		},
	],
};
