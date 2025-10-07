import { AnimatedGradientBackground } from "@/components/animatedGradientBackground";
import ResetComponent from "@/components/resetComponent";
import SortingByDate from "@/components/sortingByDate";
import { GLOBAL_VALUES_TYPES, TEMPERATURE_TYPE } from "@/constants/global";
import { EMPTY_FAVORITES_DESCRIPTION, EMPTY_HISTORY_DESCRIPTION, FAVORITES_RESET_VALUES, HISTORY_RESET_VALUES, VALUES_TYPES } from "@/constants/translateContent";
import { LIST_LABEL } from "@/helpers/helpersConst";
import { checkAvailibeValueToInput, convertImperialToMetric, convertTemperature, currentGradientColors, translatedLabelForCurrentLanguage } from "@/helpers/helpersFunctions";
import { ANIMATED_TYPES } from "@/stores/const/animatedBackgroundConsts";
import { fahrenheitToCelsiusFormula, RESULT_VALUES_TYPE, VALUES_ITEM } from "@/stores/const/listValues";
import { GROUPED_HISTORY_TYPE, SORTING_TYPES } from "@/stores/const/valuesStoreConsts";
import { useGlobalStore } from "@/stores/globalStore";
import { useThemeStore } from "@/stores/themeStore";
import { useValuesStore } from "@/stores/valuesStore";
import { converterScreenStyles } from "@/styles/converterScreenStyles";
import dayjs from "dayjs";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { AppState, AppStateStatus, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FavoritesIcon from '../assets/images/icons/heart(empty).svg';
import SwitchValueArrow from '../assets/images/icons/repeat.svg';


export type ResultAfterConvertationType = {
    id: string,
    imperialValues: string,
    metricValues: string
}

export type ResultAfterConvertationType2 = {
    imperialValues: {
        label: string;
        value: string;
    };
    metricValues: {
        label: string;
        value: string;
    };
}

export default function Convertor() {
    //app_state
    const [appState, setAppState] = useState<AppStateStatus>(AppState.currentState);
    //
    //consts_converter_screens

    //
    const valuesListStore = useValuesStore(state => state.getListValues)
    const currentLanguage = useGlobalStore(state => state.currentLanguage)

    const checkIsFavorites = useValuesStore(state => state.checkIsFavorites)
    const addFavorites = useValuesStore(state => state.setFavoritesValues)
    const historyValues = useValuesStore(state => state.historyValues)
    const getHistoryValues = useValuesStore(state => state.getHistoryValues)
    const addValuesToHistory = useValuesStore(state => state.addHistoryValues)
    const resetHistoryValues = useValuesStore(state => state.resetHistoryValues)
    const resetFavoritesValues = useValuesStore(state => state.resetFavoritesValues)
    const colorScheme = useThemeStore(state => state.colorScheme)

    const valuesListToView = valuesListStore(VALUES_TYPES.ALL, currentLanguage)
    //state_screens
    const [activeInputId, setActiveInputId] = useState<string | null>(null)
    const [activeGroup, setActiveGroup] = useState(VALUES_TYPES.ALL)
    const [currentGroupValues, setCurrentGroupValues] = useState(valuesListStore(VALUES_TYPES.ALL, currentLanguage))
    const [resultAfterConvertion, setResultAfterConvertion] = useState<ResultAfterConvertationType2[]>([])
    const [tempImperialValue, setTempImperialValue] = useState('')
    const [tempMetricValue, setTempMetricValue] = useState('')
    const [endChangeValue, setEndChangeValue] = useState(false)
    const [updateFavorites, setUpdateFavorites] = useState(false)
    const [sortingType, SetSortingType] = useState(SORTING_TYPES.DESCENDING_DATE)

    const [compleateLoading, setCompleateLoading] = useState(false)
    //functions_screens
    const valuesGroups = [
        { type: VALUES_TYPES.ALL, label: translatedLabelForCurrentLanguage(LIST_LABEL.ALL, currentLanguage), values: [{ id: 'all', imperialTypeValue: '', metricTypeValue: '', value: 0 }] },
        { type: VALUES_TYPES.FAVORITES, label: translatedLabelForCurrentLanguage(LIST_LABEL.FAVORITES, currentLanguage), values: [{ id: 'favorites', imperialTypeValue: '', metricTypeValue: '', value: 0 }] },
        {
            type: VALUES_TYPES.HISTORY, label: translatedLabelForCurrentLanguage(LIST_LABEL.HISTORY, currentLanguage), values: [{ id: 'history', imperialTypeValue: '', metricTypeValue: '', value: 0 }]
        },
        ...valuesListToView,

    ];
    const historyItems = getHistoryValues(currentLanguage, sortingType).map(item => item.values).flat()

    //functions

    const handleImperialChange = (text: string, id: string, conversionValue: number) => {
        if (text === '') {
            setTempImperialValue('');
            setTempMetricValue('');
            return;
        }

        const incomingValue = checkAvailibeValueToInput(text);
        if (incomingValue) {
            setTempImperialValue(text);

            const num = parseFloat(text);
            if (!isNaN(num)) {
                const convertedValue =
                    id === TEMPERATURE_TYPE.FAHRENHEIT
                        ? convertTemperature(text, TEMPERATURE_TYPE.FAHRENHEIT)
                        : text.includes('.') ?
                            convertImperialToMetric(GLOBAL_VALUES_TYPES.IMPERIAL, num, conversionValue).toFixed(2)
                            : convertImperialToMetric(GLOBAL_VALUES_TYPES.IMPERIAL, num, conversionValue).toString();

                setTempMetricValue(convertedValue);

            } else {
                setTempMetricValue('');
            }

        }
    };


    const handleMetricChange = (text: string, id: string, conversionValue: number) => {
        setTempMetricValue(text)

        const num = parseFloat(text)
        if (!isNaN(num)) {
            const convertedValue = id === TEMPERATURE_TYPE.FAHRENHEIT ? convertTemperature(text, TEMPERATURE_TYPE.CELSIUS) : convertImperialToMetric(GLOBAL_VALUES_TYPES.METRIC, num, conversionValue).toFixed(2)
            setTempImperialValue(convertedValue)
        } else {
            setTempImperialValue('')
        }
    }


    const handleFocus = (id: string) => {
        const existingItem = resultAfterConvertion.find(item => item.imperialValues.label === id)

        if (existingItem) {
            setTempImperialValue(existingItem.imperialValues.value)
            setTempMetricValue(existingItem.metricValues.value)
        } else {
            setTempImperialValue('')
            setTempMetricValue('')
        }

        setActiveInputId(id)
    }

    const handleBlur = (element: VALUES_ITEM) => {
        setResultAfterConvertion((prev) => {
            const existingIndex = prev.findIndex(
                (item) => item.imperialValues.label === element.id
            );

            if (existingIndex !== -1) {
                return prev.map((item) =>
                    item.imperialValues.label === element.id
                        ? {
                            ...item,
                            imperialValues: { label: element.id, value: tempImperialValue },
                            metricValues: { label: element.id, value: tempMetricValue },
                        }
                        : item
                );
            } else {
                return [
                    ...prev,
                    {
                        imperialValues: { label: element.id, value: tempImperialValue },
                        metricValues: { label: element.id, value: tempMetricValue },
                    },
                ];
            }
        });
        addValuesToHistory([
            {
                data: dayjs().format("YYYY-MM-DD"),
                values: {
                    imperialValues: { label: element.imperialTypeValue, value: tempImperialValue },
                    metricValues: { label: element.metricTypeValue, value: tempMetricValue },
                }

            },
        ]);
        setActiveInputId(null);
    };


    const getDisplayValue = (id: string, type: GLOBAL_VALUES_TYPES) => {
        if (activeInputId === id) {
            return type === GLOBAL_VALUES_TYPES.IMPERIAL ? tempImperialValue : tempMetricValue

        }

        const savedItem = resultAfterConvertion.find(item => item.imperialValues.label === id)
        if (savedItem) {
            return type === GLOBAL_VALUES_TYPES.IMPERIAL ? savedItem.imperialValues.value : savedItem.metricValues.value
        }

        return ''
    }



    const renderGroupItem = ({ item }: { item: RESULT_VALUES_TYPE }) => (
        <TouchableOpacity
            style={[converterScreenStyles.valuesGroupItem, activeGroup === item.type ? { backgroundColor: colorScheme.button[0], borderRadius: 10 } : '']}
            onPress={() => setActiveGroup(item.type)}
        >
            <Text style={[
                converterScreenStyles.valuesGroupItemTitle,
                { color: colorScheme.text }
            ]}>{item.label}</Text>
        </TouchableOpacity>
    )

    const renderItem = ({ item }: { item: RESULT_VALUES_TYPE }) => (

        <View style={converterScreenStyles.valuesBlockContainer}>
            <View style={[
                converterScreenStyles.valuesBlockBackground,

            ]}>
                <Text style={[converterScreenStyles.valuesTitle, { color: colorScheme.text }]}>{item.label}</Text>

                {activeGroup === LIST_LABEL.HISTORY && historyItems.length > 0 && (
                    <View style={{ gap: 10 }}>
                        <ResetComponent
                            title={HISTORY_RESET_VALUES[currentLanguage].RESET_HISTORY}
                            callback={resetHistoryValues}
                        />
                        <SortingByDate
                            callBack={SetSortingType}
                            typeSorting={sortingType}
                            colorScheme={colorScheme}
                        />
                    </View>

                )}

                {activeGroup === LIST_LABEL.FAVORITES && item.values.length > 0 && (
                    <ResetComponent
                        title={FAVORITES_RESET_VALUES[currentLanguage].RESET_FAVORITES}
                        callback={resetFavoritesValues}
                        additionalCallback={setUpdateFavorites}
                    />
                )}
                {activeGroup === LIST_LABEL.HISTORY ?
                    <View style={converterScreenStyles.historyContainer}>
                        {historyItems.length > 0 && <View style={[converterScreenStyles.dataContainer, { backgroundColor: colorScheme.button[1] }]}>

                            <Text style={[converterScreenStyles.dataContent, { color: colorScheme.text }]}>{getHistoryValues(currentLanguage, sortingType).map((element) => element.date)}</Text>

                        </View>

                        }

                        <FlatList
                            data={historyItems}
                            renderItem={({ item }) => (
                                <View style={converterScreenStyles.historyContainer}>
                                    <View style={converterScreenStyles.valuesSectionsContainer}>
                                        <LinearGradient
                                            style={[
                                                converterScreenStyles.buttonBackground,
                                                converterScreenStyles.gradientContainer,
                                                { borderColor: colorScheme.border }

                                            ]}
                                            colors={currentGradientColors(colorScheme.button)}
                                        >
                                            <View style={converterScreenStyles.textContainer}>
                                                <Text style={[converterScreenStyles.textLable, { color: colorScheme.text }]}>{item.imperialValues.label}</Text>
                                                <Text style={[converterScreenStyles.textValue, { color: colorScheme.text }]}>{item.imperialValues.value}</Text>
                                            </View>
                                        </LinearGradient>
                                        <LinearGradient
                                            style={[
                                                converterScreenStyles.buttonBackground,
                                                converterScreenStyles.gradientContainer,
                                                { borderColor: colorScheme.border }

                                            ]}

                                            colors={currentGradientColors(colorScheme.button)}

                                        >
                                            <View>
                                                <Text style={[converterScreenStyles.textLable, { color: colorScheme.text }]}>{item.metricValues.label}</Text>
                                                <Text style={[converterScreenStyles.textValue, { color: colorScheme.text }]}>{item.metricValues.value}</Text>
                                            </View>
                                        </LinearGradient>
                                    </View>
                                </View>
                            )}
                            ListEmptyComponent={
                                <Text style={[
                                    converterScreenStyles.valuesGroupEmptyFavorites,
                                    { color: colorScheme.text }
                                ]}>empty history</Text>
                            }
                        />


                    </View>
                    : <FlatList
                        data={item.values}
                        nestedScrollEnabled={true}
                        renderItem={({ item }) => (
                            <View style={converterScreenStyles.valuesSectionsContainer}>
                                <LinearGradient
                                    style={[
                                        converterScreenStyles.buttonBackground,
                                        converterScreenStyles.gradientContainer,
                                        { borderColor: colorScheme.border }

                                    ]}
                                    colors={currentGradientColors(colorScheme.button)}
                                >
                                    <TextInput
                                        style={[
                                            converterScreenStyles.valuesItem,
                                            { color: colorScheme.text }
                                        ]}
                                        placeholder={'1'}
                                        placeholderTextColor={colorScheme.text}
                                        keyboardType='decimal-pad'
                                        value={getDisplayValue(item.id, GLOBAL_VALUES_TYPES.IMPERIAL)}
                                        onFocus={() => handleFocus(item.id)}
                                        onChangeText={(text) => handleImperialChange(text, item.id, item.value)}
                                        onBlur={() => handleBlur(item)}
                                    />
                                    <Text style={[
                                        converterScreenStyles.valuesItem,
                                        { color: colorScheme.text }
                                    ]}>
                                        {item.imperialTypeValue}
                                    </Text>
                                </LinearGradient>
                                <View style={converterScreenStyles.favoritesContainer}>
                                    <SwitchValueArrow stroke={colorScheme.text} />
                                    <TouchableOpacity onPress={() => {
                                        addFavorites(item.id);
                                        setUpdateFavorites(true)
                                    }}
                                    >
                                        <FavoritesIcon
                                            stroke={colorScheme.text}
                                            fill={checkIsFavorites(item.id) ? 'red' : 'transparent'}
                                        />
                                    </TouchableOpacity>
                                </View>


                                <LinearGradient
                                    style={[
                                        converterScreenStyles.buttonBackground,
                                        converterScreenStyles.gradientContainer,
                                        { borderColor: colorScheme.border }

                                    ]}

                                    colors={currentGradientColors(colorScheme.button)}

                                >

                                    <TextInput
                                        style={[
                                            converterScreenStyles.valuesItem,
                                            item.id === TEMPERATURE_TYPE.FAHRENHEIT ? converterScreenStyles.temperaturePlaceholderText : '',
                                            { color: colorScheme.text }
                                        ]}
                                        placeholderTextColor={colorScheme.text}
                                        placeholder={item.id === TEMPERATURE_TYPE.FAHRENHEIT ? fahrenheitToCelsiusFormula : item.value.toString()}
                                        keyboardType='decimal-pad'
                                        value={getDisplayValue(item.id, GLOBAL_VALUES_TYPES.METRIC)}
                                        onFocus={() => {
                                            console.log(item.id);

                                            handleFocus(item.id)
                                        }}

                                        onChangeText={(text) => handleMetricChange(text, item.id, item.value)}
                                        onBlur={() => handleBlur(item)}
                                    />
                                    <Text style={[
                                        converterScreenStyles.valuesItem,
                                        { color: colorScheme.text }
                                    ]}>
                                        {item.metricTypeValue}
                                    </Text>

                                </LinearGradient>
                            </View>
                        )}
                        ListEmptyComponent={
                            <Text style={[
                                converterScreenStyles.valuesGroupEmptyFavorites,
                                { color: colorScheme.text }
                            ]}>{activeGroup === LIST_LABEL.FAVORITES ? EMPTY_FAVORITES_DESCRIPTION[currentLanguage] : EMPTY_HISTORY_DESCRIPTION[currentLanguage]}</Text>
                        }
                    />}
            </View>
        </View>
    )

    const renderHistory = ({ item }: { item: GROUPED_HISTORY_TYPE }) => (
        <View style={converterScreenStyles.valuesBlockContainer}>
            <View style={[
                converterScreenStyles.valuesBlockBackground,

            ]}>
                <View style={[converterScreenStyles.dataContainer, { backgroundColor: colorScheme.button[1] }]}>

                    <Text style={[converterScreenStyles.dataContent, { color: colorScheme.text }]}>{item.date}</Text>


                </View>
                <View style={converterScreenStyles.valuesSectionsContainer}>
                    <FlatList
                        data={item.values}
                        renderItem={({ item }) => (
                            <View style={converterScreenStyles.historyContainer}>
                                <View style={converterScreenStyles.valuesSectionsContainer}>
                                    <LinearGradient
                                        style={[
                                            converterScreenStyles.buttonBackground,
                                            converterScreenStyles.gradientContainer,
                                            { borderColor: colorScheme.border }

                                        ]}
                                        colors={currentGradientColors(colorScheme.button)}
                                    >
                                        <View style={converterScreenStyles.textContainer}>
                                            <Text style={[converterScreenStyles.textLable, { color: colorScheme.text }]}>{item.imperialValues.label}</Text>
                                            <Text style={[converterScreenStyles.textValue, { color: colorScheme.text }]}>{item.imperialValues.value}</Text>
                                        </View>
                                    </LinearGradient>
                                    <LinearGradient
                                        style={[
                                            converterScreenStyles.buttonBackground,
                                            converterScreenStyles.gradientContainer,
                                            { borderColor: colorScheme.border }

                                        ]}

                                        colors={currentGradientColors(colorScheme.button)}

                                    >
                                        <View>
                                            <Text style={[converterScreenStyles.textLable, { color: colorScheme.text }]}>{item.metricValues.label}</Text>
                                            <Text style={[converterScreenStyles.textValue, { color: colorScheme.text }]}>{item.metricValues.value}</Text>
                                        </View>
                                    </LinearGradient>
                                </View>
                            </View>
                        )}
                        ListEmptyComponent={
                            <Text style={[
                                converterScreenStyles.valuesGroupEmptyFavorites,
                                { color: colorScheme.text }
                            ]}>empty history</Text>
                        }
                    />
                </View>
            </View>
        </View>
    );

    //useEffect_block
    //app_state_watcher
    useEffect(() => {
        const subscription = AppState.addEventListener("change", nextAppState => {
            if (nextAppState === "background") {
            }
            if (nextAppState === "inactive") {

            }
            if (nextAppState === "active") {

            }
            setAppState(nextAppState);
        });

        return () => subscription.remove();
    }, []);


    //change_active_group
    useEffect(() => {
        setCurrentGroupValues(valuesListStore(activeGroup, currentLanguage))
        setUpdateFavorites(false)
    }, [activeGroup, updateFavorites])

    useEffect(() => {
        if (activeGroup === LIST_LABEL.FAVORITES) {
            setCompleateLoading(true);
        }
    }, [activeGroup]);
    //useEffect_block_end

    return (
        <SafeAreaView style={converterScreenStyles.mainContainer}>
            <AnimatedGradientBackground
                typeAnimate={ANIMATED_TYPES.WITH_GRADIENT}
            >
                <View>
                    <FlatList
                        data={valuesGroups}
                        renderItem={renderGroupItem}
                        style={converterScreenStyles.valuesGroupContainer}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                {/* {activeGroup === LIST_LABEL.HISTORY ? (
                    <View style={converterScreenStyles.historyContainer}>
                        <Text style={[converterScreenStyles.valuesTitle, { color: colorScheme.text }]}>{LIST_LABEL_TRANSLATE.HISTORY[currentLanguage]}</Text>
                        {getHistoryValues(currentLanguage, sortingType).length > 0 &&
                            <View>
                                <View style={converterScreenStyles.resetButton}>
                                    <ResetComponent
                                        title={HISTORY_RESET_VALUES[currentLanguage].RESET_HISTORY}
                                        callback={resetHistoryValues}

                                    />
                                </View>

                                <SortingByDate
                                    callBack={SetSortingType}
                                    typeSorting={sortingType}
                                    colorScheme={colorScheme}
                                />
                            </View>}

                        <FlatList
                            style={converterScreenStyles.valuesListContainer}
                            data={getHistoryValues(currentLanguage, sortingType)}
                            renderItem={renderHistory}
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            extraData={sortingType}
                            ListEmptyComponent={
                                <Text style={[converterScreenStyles.valuesGroupEmptyFavorites, { color: colorScheme.text }]}>
                                    {EMPTUY_HISTORY_DESCRIPTION[currentLanguage]}
                                </Text>
                            }
                        />
                    </View>

                ) : (
                    <FlatList
                        data={currentGroupValues}
                        renderItem={renderItem}
                        style={converterScreenStyles.valuesListContainer}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}

                    />
                )} */}
                <FlatList
                    data={currentGroupValues}
                    renderItem={renderItem}
                    style={converterScreenStyles.valuesListContainer}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}

                />
            </AnimatedGradientBackground>
        </SafeAreaView>
    )
}