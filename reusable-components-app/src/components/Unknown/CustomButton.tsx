import { Pressable, StyleSheet, Text, ViewStyle } from "react-native";

interface ICustomButton {
    width: number;
    height: number;
    backgroundColor: string;
    fontSize: number;
    color: string;
    text: string;
    borderRadius: number;
    onPress: () => Promise<void>;
}

export const CustomButton = ({
    width,
    height,
    backgroundColor,
    fontSize,
    color,
    text,
    borderRadius,
    onPress,
}: ICustomButton) => {
    const dynamicStyles = StyleSheet.create({
        buttonStyle: {
            height: height,
            backgroundColor: backgroundColor,
            borderRadius: borderRadius,
            justifyContent: 'center',
            width: width
        },
        textStyle: {
            fontSize: fontSize,
            fontWeight: '600',
            color: color,
            alignSelf: 'center',
        },
    });

    return (
        <Pressable style={dynamicStyles.buttonStyle as ViewStyle} onPress={onPress}>
            <Text style={dynamicStyles.textStyle}>{text}</Text>
        </Pressable>
    );
};
