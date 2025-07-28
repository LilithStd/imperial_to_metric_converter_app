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
	linearGradienButtontContainer: {
		width: '100%',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		height: '100%',
		// gap: 10,
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
	valuesImperialContainer: {
		width: '50%',
		// alignItems: 'flex-start',
	},
	valuesMetricContainer: {
		width: '50%',
	},
	valuesMetric: {
		// margin: 10,
	},
	values: {},
	valuesTextContainer: {
		flex: 1,
		alignItems: 'center',
		borderWidth: 2,
		borderRadius: 10,
		height: 100,
		// margin: 10,
	},
	valuesSectionsContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
	},
	sectionButtonTitle: {
		fontSize: 16,
		fontWeight: 900,
	},
});
