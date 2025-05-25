import {GLOBAL_VALUES_TYPES} from '@/constants/global';

export function convertFahrenheitToCelsius(fahrenheit: number): number {
	return ((fahrenheit - 32) * 5) / 9;
}

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
