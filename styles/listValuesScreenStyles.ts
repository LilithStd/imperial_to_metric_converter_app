import {StyleSheet} from 'react-native';

export const listValuesScreenStyles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		width: '100%',
		height: '100%',
	},
	mainBackground: {
		flex: 1,
		width: '100%',
		height: '100%',
	},
	listValuesContainer: {
		flex: 1,
		width: '100%',
		height: '100%',
		alignItems: 'center',
		paddingBottom: 10,
	},
	listValues: {},
	sectionsButton: {
		gap: 5,
	},
	valuesContainer: {
		// backgroundColor: 'turquoise',
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
	valuesMetricContainer: {
		width: '50%',
	},
	valuesMetric: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	values: {},
	valuesTextContainer: {
		flex: 1,
		alignItems: 'flex-end',
		marginRight: 10,
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
