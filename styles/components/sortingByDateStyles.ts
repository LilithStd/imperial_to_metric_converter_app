import {StyleSheet} from 'react-native';

export const sortingByDateStyles = StyleSheet.create({
	mainContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		gap: 6,
		width: 310,
		alignContent: 'center',
		alignItems: 'center',
		margin: 'auto',
		height: 40,
		borderRadius: 10,
	},
	contentContainer: {
		// width: '50%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		alignContent: 'center',
	},
	content: {},
	text: {
		width: '50%',
	},
	iconsBlock: {
		width: '70%',
	},
	sortingButtonBlock: {
		width: 'auto',
	},
});
