import {StyleSheet} from 'react-native';

export const animatedBackgroundStyles = StyleSheet.create({
	mainContainer: {
		flex: 1,
	},
	backgroundBottom: {
		position: 'absolute',
		zIndex: 2,
		// bottom: 500,
		// width: '100%',
		// height: '100%',
	},
	animatedBackground: {},
	content: {
		// justifyContent: 'space-between',
		// alignItems: 'center',
		zIndex: 3,
	},
});
