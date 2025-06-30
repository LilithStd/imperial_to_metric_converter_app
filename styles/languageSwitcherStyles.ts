import {StyleSheet} from 'react-native';

export const languageSwitcherStyles = StyleSheet.create({
	mainContainer: {},
	buttonContainer: {
		flexDirection: 'row',
		gap: 6,
		width: 100,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
	},
	backgroundColorDark: {
		backgroundColor: 'grey',
	},
	backgroundColorLight: {
		backgroundColor: 'teal',
	},
	buttonText: {},
	textColorLight: {
		color: 'black',
	},
	textColorDark: {
		color: 'white',
	},
	buttonDarkView: {},
	buttonLightView: {},
	buttonActiveLight: {
		backgroundColor: 'cyan',
		padding: 2,
		borderRadius: 8,
	},
	buttonActiveDark: {
		backgroundColor: '#143673',
		// backgroundColor: 'cyan',
		padding: 2,
		borderRadius: 8,
	},
});
