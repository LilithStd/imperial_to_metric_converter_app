export type GROUPED_HISTORY_TYPE = {
	date: string;
	values: {
		imperialValues: {label: string; value: string};
		metricValues: {label: string; value: string};
	}[];
};

export enum SORTING_TYPES {
	ASCENDING_DATE = 'ascending date',
	DESCENDING_DATE = 'descending date',
}
