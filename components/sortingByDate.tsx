import { SORTING_TYPES } from "@/stores/const/valuesStoreConsts";
import { sortingByDateStyles } from "@/styles/components/sortingByDateStyles";
import { Text, TouchableOpacity, View } from "react-native";

interface SortingByDateInterface {
    callBack: (sortingType: SORTING_TYPES) => void,
    typeSorting: SORTING_TYPES,
    textContent: string
}
export default function SortingByDate({ callBack, typeSorting, textContent }: SortingByDateInterface) {
    return (
        <View style={sortingByDateStyles.mainContainer}>
            <TouchableOpacity
                onPress={() => callBack(typeSorting === SORTING_TYPES.DESCENDING_DATE ? SORTING_TYPES.ASCENDING_DATE : SORTING_TYPES.DESCENDING_DATE)}
            >
                <View style={sortingByDateStyles.contentContainer}>
                    <Text>
                        {textContent}
                    </Text>
                </View>
            </TouchableOpacity>
            <View style={sortingByDateStyles.contentContainer}>
                <Text>
                    {typeSorting}
                </Text>
            </View>

        </View>
    )
}
