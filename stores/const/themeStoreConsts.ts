import {ColorValue} from 'react-native';

export type colorGradientType = [ColorValue, ColorValue, ...ColorValue[]];
export type colorScheme = {
	background: [ColorValue, ColorValue, ...ColorValue[]];
	button: string;
};
interface colorLinearGradient {
	light: colorScheme;
	dark: colorScheme;
}

export enum STATUS_THEME {
	static = 'static',
	update = 'update',
}

export const COLOR_SCHEME: colorLinearGradient = {
	light: {
		background: ['#2193b0', '#6dd5ed'],
		button: '#00ace6',
	},
	dark: {
		background: ['#0f0f0f', '#093F79', '#0f0f0f'],
		button: '#1a75ff',
	},
};
