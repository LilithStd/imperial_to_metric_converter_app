import {ColorValue} from 'react-native';

export type colorGradientType = [ColorValue, ColorValue, ...ColorValue[]];
export type colorScheme = {
	background: [ColorValue, ColorValue, ...ColorValue[]];
	button: [ColorValue, ColorValue, ...ColorValue[]];
};
interface colorLinearGradient {
	light: colorScheme;
	dark: colorScheme;
}

export const COLOR_SCHEME: colorLinearGradient = {
	light: {
		background: ['#2193b0', '#6dd5ed'],
		button: ['#EEAECA', '#94BBE9'],
	},
	dark: {
		background: ['#0f0f0f', '#093F79', '#0f0f0f'],
		button: ['#EEAECA', '#94BBE9'],
	},
};
