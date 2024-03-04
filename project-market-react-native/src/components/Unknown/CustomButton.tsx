import { ReactNode } from "react";
import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";

interface CustomButtonProps {
    width: number;
    height: number;
    alignSelf?: 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';
    marginTop?: number;
    backgroundColor?: string;
    borderRadius?: number;
    onPress: () => void;
    style?: StyleProp<ViewStyle>
    children: ReactNode;
}


export default function CustomButton(
    {
        width,
        height,
        alignSelf,
        marginTop,
        backgroundColor,
        borderRadius,
        onPress,
        style,
        children
    }: CustomButtonProps
) {

    const styles = StyleSheet.create(
        {
            buttonStyle:
            {
                width: width,
                height: height,
                marginTop: marginTop,
                alignSelf: alignSelf ? alignSelf : 'auto',
                backgroundColor: backgroundColor,
                borderRadius: borderRadius,
                alignItems: 'center',
                justifyContent: 'center',
                // alignContent: 'center'
            }
        })
    return (
        <Pressable onPress={onPress} style={[style, styles.buttonStyle]}>
            {children}
        </Pressable>
    )

}