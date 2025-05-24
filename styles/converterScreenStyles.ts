import {StyleSheet} from 'react-native';

export const converterScreenStyles = StyleSheet.create({
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
	valuesListContainer: {},
	valuesTitle: {
		textAlign: 'center',
	},
	valuesSectionsContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	valuesBlockBackground: {
		backgroundColor: '#7fff00',
		borderRadius: 20,
		padding: 20,
	},
	valuesBlockContainer: {
		padding: 20,
	},
	valuesItemContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '40%',
		backgroundColor: '#66cdaa',
		borderWidth: 1,
		alignItems: 'center',
	},
	valuesItem: {
		backgroundColor: '#66cdaa',
		// borderWidth: 1,
	},
	valuesMetricTitleItemContainer: {
		justifyContent: 'flex-start',
		width: '30%',
	},
	valuesimperialTitleItemContainer: {
		justifyContent: 'flex-start',
		width: '40%',
	},
});
