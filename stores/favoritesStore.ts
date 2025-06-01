import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {VALUES_ITEM} from './const/listValues';

interface FavoritesStoreInterface {
	favoritesValues: VALUES_ITEM[];
	checkIsFavorites: (id: string) => boolean;
	setFavoritesValues: (value: VALUES_ITEM) => void;
}

export const useFavoritesStore = create<FavoritesStoreInterface>()(
	persist(
		(set, get) => ({
			favoritesValues: [],
			checkIsFavorites: (id) => {
				return get().favoritesValues.some((item) => item.id === id);
			},
			setFavoritesValues: (value) => {
				const exists = get().favoritesValues.some(
					(item) => item.id === value.id,
				);
				if (exists) {
					set((state) => ({
						favoritesValues: state.favoritesValues.filter(
							(item) => item.id !== value.id,
						),
					}));
				} else {
					set((state) => ({
						favoritesValues: [...state.favoritesValues, value],
					}));
				}
			},
		}),
		{
			name: 'favorites-storage',
			storage: createJSONStorage(() => AsyncStorage),
		},
	),
);
