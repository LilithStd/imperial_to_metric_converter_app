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
	LENGTH: 'Length',
	AREA: 'Area',
	VOLUME: 'Volume',
	WEIGHT: 'Weight',
	TEMPERATURE: 'Temperature',
	SPEED: 'Speed ',
	PRESSURE: 'Pressure',
};

export const WIDTH_VALUES = [
	{
		imperialTypeValue: IMPERIAL_LENGTH_VALUES.INCH,
		metricTypeValue: METRIC_LENGTH_VALUES.CM,
		value: 2.54,
	},
	{
		imperialTypeValue: IMPERIAL_LENGTH_VALUES.FOOT,
		metricTypeValue: METRIC_LENGTH_VALUES.CM,
		value: 30.48,
	},
	{
		imperialTypeValue: IMPERIAL_LENGTH_VALUES.YARD,
		metricTypeValue: METRIC_LENGTH_VALUES.CM,
		value: 91.44,
	},
	{
		imperialTypeValue: IMPERIAL_LENGTH_VALUES.MILE,
		metricTypeValue: METRIC_LENGTH_VALUES.KM,
		value: 1.609,
	},
];
