import { SORT_BY_VALUES, SORTING_TYPES_TRANSLATED } from "@/constants/translateContent";
import { colorScheme } from "@/stores/const/themeStoreConsts";
import { SORTING_TYPES } from "@/stores/const/valuesStoreConsts";
import { useGlobalStore } from "@/stores/globalStore";
import { sortingByDateStyles } from "@/styles/components/sortingByDateStyles";
import { Text, TouchableOpacity, View } from "react-native";
import Arrow_down from '../assets/images/icons/arrow_down.svg';
import Arrow_up from '../assets/images/icons/arrow_up.svg';

interface SortingByDateInterface {
    callBack: (sortingType: SORTING_TYPES) => void,
    typeSorting: SORTING_TYPES,
    colorScheme: colorScheme
}
export default function SortingByDate({ callBack, typeSorting, colorScheme }: SortingByDateInterface) {
    const currentLanguage = useGlobalStore(state => state.currentLanguage);
    console.log(typeSorting);

    return (
        <View style={[sortingByDateStyles.mainContainer, { backgroundColor: colorScheme.button[0] }]}>
            <TouchableOpacity
                onPress={() => callBack(typeSorting === SORTING_TYPES.DESCENDING_DATE ? SORTING_TYPES.ASCENDING_DATE : SORTING_TYPES.DESCENDING_DATE)}
            >
                <View style={sortingByDateStyles.contentContainer}>
                    <Text>
                        {SORT_BY_VALUES[currentLanguage].SORT_BY}
                    </Text>
                </View>
            </TouchableOpacity>
            <View style={sortingByDateStyles.contentContainer}>
                <Text>
                    {SORTING_TYPES_TRANSLATED[typeSorting][currentLanguage]}
                </Text>
                {typeSorting === SORTING_TYPES.DESCENDING_DATE
                    ? <Arrow_down width={22} height={22} />
                    : <Arrow_up width={22} height={22} />}
            </View>

        </View>
    )
}
