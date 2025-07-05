import {Platform, StyleSheet} from 'react-native';

export const mainScreenStyles = StyleSheet.create({
	mainContainer: {
		flex: 1,
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
		// position: 'absolute',

		margin: 'auto',
	},
	themeSwitcherContainer: {
		// left: 360,
		// width: 50,
		// height: 50,
		// borderRadius: 40,
		right: '2%',
		top: '2%',
		justifyContent: 'center',
		alignItems: 'flex-end',
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
		borderRadius: 10,
	},
	buttonText: {
		textAlign: 'center',
		fontWeight: 900,
		fontSize: 30,
	},
	buttonContainerDark: {
		...Platform.select({
			ios: {
				shadowColor: '#000',
				shadowOffset: {width: 0, height: 2},
				shadowOpacity: 0.25,
				shadowRadius: 3.84,
			},
			android: {
				elevation: 5,
			},
		}),
	},
	buttonContainerLight: {
		...Platform.select({
			ios: {
				shadowColor: '#000',
				shadowOffset: {width: 0, height: 2},
				shadowOpacity: 0.25,
				shadowRadius: 3.84,
			},
			android: {
				elevation: 5,
			},
		}),
	},
	buttonDarkView: {
		color: 'white',
		textShadowColor: 'black',
		textShadowOffset: {width: 2, height: 2},
		textShadowRadius: 1,
	},
	buttonLightView: {
		color: 'black',
		textShadowColor: 'grey',
		textShadowOffset: {width: 2, height: 2},
		textShadowRadius: 1,
	},
});
