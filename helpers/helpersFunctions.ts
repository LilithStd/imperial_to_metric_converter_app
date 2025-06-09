import {ResultAfterConvertationType} from '@/app/converter';
import {GLOBAL_VALUES_TYPES} from '@/constants/global';

export function convertFahrenheitToCelsius(fahrenheit: string) {
	const fahrenheitValue = Number(fahrenheit);
	const resultNumber = ((fahrenheitValue - 32) * 5) / 9;
	return resultNumber.toFixed(2).toString();
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

export const isExistsValueIsArray = (
	array: ResultAfterConvertationType[],
	valueId: string,
) => {
	return array.some((item) => item.id === valueId);
};
