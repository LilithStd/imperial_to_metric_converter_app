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
		width: '100%',
		height: '100%',
		alignItems: 'center',
	},
	sectionsButton: {
		gap: 5,
	},
	valuesContainer: {
		backgroundColor: 'turquoise',
		borderRadius: 10,
		padding: 10,
	},
	valuesTitle: {
		textAlign: 'center',
	},
	valuesImperial: {
		width: '40%',
		alignItems: 'flex-start',
	},
	valuesMetric: {
		width: '40%',
		alignItems: 'flex-start',
	},
	valuesSectionsContainer: {
		flexDirection: 'row',
		gap: 10,
		justifyContent: 'space-between',
	},
	sectionButtonTitle: {
		fontSize: 16,
		fontWeight: 900,
	},
});
