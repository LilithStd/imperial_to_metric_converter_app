import { useThemeStore } from '@/stores/themeStore';
import { resetComponentStyles } from '@/styles/components/resetComponentStyle';
import { Text, TouchableOpacity, View } from 'react-native';
interface ResetComponentProps {
    title: string;
    callback: () => void;
}

export default function ResetComponent({ title, callback }: ResetComponentProps) {
    const colorScheme = useThemeStore(state => state.colorScheme);
    return (
        <View style={[resetComponentStyles.mainContainer, { backgroundColor: colorScheme.buttonWarning }]}>
            <TouchableOpacity onPress={callback}>
                <Text>{title}</Text>
            </TouchableOpacity>

        </View>
    )
}
