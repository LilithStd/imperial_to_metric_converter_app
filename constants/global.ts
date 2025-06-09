import {LANGUAGE_APP} from '@/stores/const/globalStoreConst';

export enum GLOBAL_VALUES_TYPES {
	METRIC = 'metric',
	IMPERIAL = 'imperial',
}

export type VariantTextType = {
	[key in LANGUAGE_APP]: string;
};
