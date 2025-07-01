import {StyleSheet} from 'react-native';

export const languageSwitcherStyles = StyleSheet.create({
	mainContainer: {},
	buttonContainer: {
		flexDirection: 'row',
		gap: 6,
		// width: '40%',
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		padding: 6,
	},
	backgroundColorDark: {
		backgroundColor: '#0059b3',
	},
	backgroundColorLight: {
		backgroundColor: '#80d4ff',
	},
	buttonText: {},
	textColorLight: {
		color: 'black',
		textShadowColor: 'grey',
		textShadowOffset: {width: 1, height: 1},
		textShadowRadius: 0.5,
	},
	textColorDark: {
		color: 'white',

		textShadowColor: 'black',
		textShadowOffset: {width: 1, height: 1},
		textShadowRadius: 0.5,
	},
	buttonDarkView: {},
	buttonLightView: {},
	buttonActiveContainer: {
		padding: 6,
		borderRadius: 6,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonActiveLight: {
		backgroundColor: '#00a3cc',
	},
	buttonActiveDark: {
		backgroundColor: '#143673',
	},
});
