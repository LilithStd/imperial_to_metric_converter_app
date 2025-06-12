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
		fontSize: 24,
		fontWeight: 900,
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
		alignItems: 'center',
	},
	valuesItem: {
		fontSize: 30,
		fontWeight: 900,
	},
	valuesMetricTitleItemContainer: {
		justifyContent: 'flex-start',
		width: '80%',
	},
	valuesImperialTitleItemContainer: {
		justifyContent: 'flex-start',
		width: '90%',
	},
	buttonBackground: {
		transform: [{scale: 0.6}],
		width: 263,
		height: 85,
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: -50,
		marginLeft: -50,
	},
	valuesGroupContainer: {
		margin: 20,
	},
	valuesGroupActiveTab: {
		backgroundColor: '#7fff00',
		borderRadius: 6,
	},
	valuesGroupEmptyFavorites: {
		textAlign: 'center',
		opacity: 0.5,
	},
	valuesGroupSectionContainer: {},
	valuesGroupItem: {
		marginRight: 10,
		padding: 10,
	},
	valuesGroupItemTitle: {
		fontSize: 20,
	},
	valuesAllButtonContainer: {},
});
