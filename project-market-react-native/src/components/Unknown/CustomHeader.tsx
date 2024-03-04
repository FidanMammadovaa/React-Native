import { Dimensions, Pressable, StyleProp, StyleSheet, TextStyle, View } from "react-native";
import BackIcon from "../../icons/BackIcon";
import { BaseText } from "./DesignSystem";

interface CustomHeaderProps {
    navigation?: any;
    title?: any;
    onPress: () => void
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    textStyles?: StyleProp<TextStyle>;
}


const width = Dimensions.get('screen').width
export default function CustomHeader({ navigation, title, textStyles, flexDirection, onPress }: CustomHeaderProps) {

    return (
        <View style={[styles.headerStyle, { flexDirection }]}>
            <Pressable onPress={onPress}>
                <BackIcon />
            </Pressable>
            <BaseText
                textStyles={textStyles}
                text={title}
                weight="bold"
                fontSize={28}
                color='#2D0C57'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle:
    {
        flex: 1,
        width: width,
        marginVertical: 20,
        padding: 20,
    }
})

