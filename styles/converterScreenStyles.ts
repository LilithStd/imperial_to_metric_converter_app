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
		margin: 10,
	},
	valuesSectionsContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		// gap: 2,
		margin: 10,
	},
	historyContainer: {
		flex: 1,
		top: 22,
	},
	dataContainer: {
		width: 240,
		height: 40,
		alignContent: 'center',
		justifyContent: 'center',
		margin: 'auto',
		borderRadius: 10,
	},
	dataContent: {
		textAlign: 'center',
	},
	valuesBlockBackground: {
		borderRadius: 20,
	},
	historyDataContainer: {
		alignItems: 'center',
	},
	valuesBlockContainer: {
		margin: 20,
		justifyContent: 'center',
		textAlign: 'center',
		alignContent: 'center',
	},
	valuesItemContainer: {
		flexDirection: 'column',
		// width: 160,
		// height: 120,
		// alignItems: 'center',
	},
	favoritesContainer: {
		flexDirection: 'row',
		margin: 10,
	},
	gradientContainer: {
		width: 160,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		height: '100%',
	},
	valuesItem: {
		fontSize: 20,
		fontWeight: 900,
		textAlign: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	valuesMetricTitleItemContainer: {
		// justifyContent: 'flex-start',
	},
	valuesImperialTitleItemContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonBackground: {
		borderRadius: 10,
		borderWidth: 2,
	},
	valuesGroupContainer: {
		margin: 20,
	},
	valuesGroupActiveTab: {
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
	textContainer: {
		textAlign: 'center',
		marginTop: 10,
	},
	textLable: {
		fontWeight: '900',
		fontSize: 16,
		textAlign: 'center',
	},
	textValue: {
		fontSize: 16,
		textAlign: 'center',
		fontStyle: 'italic',
	},
	resetButton: {
		justifyContent: 'center',
		alignContent: 'center',
		marginBottom: 10,
		marginLeft: 'auto',
		marginRight: 'auto',
	},
});
