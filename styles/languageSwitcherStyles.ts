import {StyleSheet} from 'react-native';

export const languageSwitcherStyles = StyleSheet.create({
	mainContainer: {},
	buttonContainer: {
		backgroundColor: 'teal',
		flexDirection: 'row',
		gap: 6,
		width: 100,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
	},
	buttonText: {},
	buttonDarkView: {},
	buttonLightView: {},
	buttonActiveLight: {
		backgroundColor: 'cyan',
		padding: 2,
		borderRadius: 8,
	},
	buttonActiveDark: {},
});
