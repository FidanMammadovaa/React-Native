import { ReactNode } from "react";
import { Pressable, StyleSheet } from "react-native";

interface CustomButtonProps {
    width: number;
    height: number;
    alignSelf?: 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';
    marginTop?: number;
    backgroundColor?: string;
    borderRadius?: number;
    onPress: () => void;
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
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center'
            }
        })
    return (
        <Pressable onPress={onPress} style={styles.buttonStyle}>
            {children}
        </Pressable>
    )

}