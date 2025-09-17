import {ColorValue} from 'react-native';

export type colorGradientType = [ColorValue, ColorValue, ...ColorValue[]];
export type colorScheme = {
	background: [ColorValue, ColorValue, ...ColorValue[]];
	button: [ColorValue, ColorValue, ...ColorValue[]];
	buttonWarning: string;
	text: string;
	border: string;
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
		background: ['#2DA3FD', '#2260C3'],
		button: ['#22C3B8', '#2DADFD'],
		buttonWarning: '#fa8072',
		text: 'black',
		border: '#0099e6',
	},
	dark: {
		background: ['#0f0f0f', '#093F79', '#0f0f0f'],
		button: ['#0059b3', '#051657'],
		buttonWarning: '#db7093',
		text: 'white',
		border: '#002b80',
	},
};
