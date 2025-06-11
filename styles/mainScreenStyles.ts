import {StyleSheet} from 'react-native';

export const mainScreenStyles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		justifyContent: 'center',
	},
	mainTitleContainer: {},
	mainTitle: {
		textAlign: 'center',
	},
	mainImageBackground: {
		flex: 1,
	},
	languageSwitcherContainer: {
		alignItems: 'center',
		bottom: -600,
	},
	themeSwitcherContainer: {
		left: 360,
	},

	buttonContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		top: '30%',
	},
	buttonBackground: {
		transform: [{scale: 0.7}],
		width: 263,
		height: 85,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonText: {
		textAlign: 'center',
		fontWeight: 900,
		fontSize: 30,
	},
	buttonDarkView: {},
	buttonLightView: {},
});
