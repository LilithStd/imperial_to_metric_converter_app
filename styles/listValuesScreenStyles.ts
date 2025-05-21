import {StyleSheet} from 'react-native';

export const listValuesScreenStyles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		width: '100%',
		height: '100%',
	},
	mainBackground: {
		width: '100%',
		height: '100%',
	},
	listValuesContainer: {
		width: '90%',
		justifyContent: 'center',
	},
	sectionsButton: {
		backgroundColor: 'yellow',
		alignItems: 'center',
		gap: 10,
	},
	sectionsContainer: {
		flexDirection: 'row',
		gap: 10,
		justifyContent: 'space-between',
	},
	sectionButtonTitle: {},
});
