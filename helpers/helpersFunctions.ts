import {ResultAfterConvertationType} from '@/app/converter';
import {GLOBAL_VALUES_TYPES, TEMPERATURE_TYPE} from '@/constants/global';

export const convertTemperature = (value: string, type: TEMPERATURE_TYPE) => {
	const numericValue = Number(value);

	if (isNaN(numericValue)) return '0.00';

	if (type === TEMPERATURE_TYPE.FAHRENHEIT) {
		// F → C
		const result = ((numericValue - 32) * 5) / 9;
		return result.toFixed(2);
	} else {
		// C → F
		const result = (numericValue * 9) / 5 + 32;
		return result.toFixed(2);
	}
};

export const convertImperialToMetric = (
	valueType: string,
	valueMetric: number,
	valueImperial: number,
) => {
	switch (valueType) {
		case GLOBAL_VALUES_TYPES.IMPERIAL:
			return valueImperial * valueMetric;
		case GLOBAL_VALUES_TYPES.METRIC:
			return valueMetric / valueImperial;
		default:
			return 0;
	}
};

export const isExistsValueIsArray = (
	array: ResultAfterConvertationType[],
	valueId: string,
) => {
	return array.some((item) => item.id === valueId);
};
