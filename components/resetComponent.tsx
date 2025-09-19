import { useThemeStore } from '@/stores/themeStore';
import { resetComponentStyles } from '@/styles/components/resetComponentStyle';
import { Text, TouchableOpacity, View } from 'react-native';
interface ResetComponentProps {
    title: string;
    callback: () => void;
    additionalCallback?: (status: boolean) => void;
}

export default function ResetComponent({ title, callback, additionalCallback }: ResetComponentProps) {
    const colorScheme = useThemeStore(state => state.colorScheme);
    return (
        <View style={[resetComponentStyles.mainContainer, { backgroundColor: colorScheme.buttonWarning }]}>
            <TouchableOpacity
                onPress={() => {
                    callback();
                    additionalCallback?.(true);
                }}
            >
                <Text>{title}</Text>
            </TouchableOpacity>

        </View>
    )
}
