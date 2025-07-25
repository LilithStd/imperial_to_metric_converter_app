import {ResultAfterConvertationType} from '@/app/converter';
import {GLOBAL_VALUES_TYPES, TEMPERATURE_TYPE} from '@/constants/global';
import {LANGUAGE_APP} from '@/stores/const/globalStoreConst';
import {ColorValue} from 'react-native';
import {
	EMPTY_FAVORITES_DESCRIPTION,
	LIST_LABEL,
	LIST_LABEL_TRANSLATE,
} from './helpersConst';

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

export const checkAvailibeValueToInput = (incomingValue: string) => {
	const regularNumeric = /^\d+(\.\d*)?$/;
	return regularNumeric.test(incomingValue);
};

export const translatedLabelForCurrentLanguage = (
	lable: string,
	currentLanguage: string,
) => {
	let translatedLabel = '';
	switch (lable) {
		case LIST_LABEL.ALL:
			switch (currentLanguage) {
				case LANGUAGE_APP.LV:
					translatedLabel = LIST_LABEL_TRANSLATE.ALL.LV;
					break;
				case LANGUAGE_APP.RU:
					translatedLabel = LIST_LABEL_TRANSLATE.ALL.RU;
					break;
				case LANGUAGE_APP.EN:
					translatedLabel = LIST_LABEL_TRANSLATE.ALL.EN;
					break;
			}
			break;
		case LIST_LABEL.FAVORITES:
			switch (currentLanguage) {
				case LANGUAGE_APP.LV:
					translatedLabel = LIST_LABEL_TRANSLATE.FAVORITES.LV;
					break;
				case LANGUAGE_APP.RU:
					translatedLabel = LIST_LABEL_TRANSLATE.FAVORITES.RU;
					break;
				case LANGUAGE_APP.EN:
					translatedLabel = LIST_LABEL_TRANSLATE.FAVORITES.EN;
					break;
			}
			break;
	}
	return translatedLabel;
};

export const emptyFavoritesDescription = (language: LANGUAGE_APP) => {
	switch (language) {
		case LANGUAGE_APP.EN:
			return EMPTY_FAVORITES_DESCRIPTION.EN;
		case LANGUAGE_APP.LV:
			return EMPTY_FAVORITES_DESCRIPTION.LV;
		case LANGUAGE_APP.RU:
			return EMPTY_FAVORITES_DESCRIPTION.RU;
	}
};

export const currentGradientColors = (
	element?: ColorValue | ColorValue[],
): [ColorValue, ColorValue] => {
	if (!element) return ['#000000', '#000000'];

	if (Array.isArray(element)) {
		return element.length >= 2
			? (element as [ColorValue, ColorValue])
			: [element[0], element[0]];
	}

	// Если передали одну строку (цвет)
	return [element, element];
};
