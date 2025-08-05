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
		// gap: 4,
	},
	valuesBlockBackground: {
		borderRadius: 20,
	},
	valuesBlockContainer: {
		margin: 20,
		justifyContent: 'center',
		textAlign: 'center',
		alignContent: 'center',
	},
	valuesItemContainer: {
		flexDirection: 'column',
		// justifyContent: 'space-between',
		width: 160,
		alignItems: 'center',
	},
	valuesItem: {
		fontSize: 20,
		fontWeight: 900,
		padding: 10,
		textAlign: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	valuesMetricTitleItemContainer: {
		justifyContent: 'flex-start',
	},
	valuesImperialTitleItemContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonBackground: {
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
		borderWidth: 1,
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
	textLight: {
		color: 'black',
	},
	textDark: {
		color: 'white',
	},
});
