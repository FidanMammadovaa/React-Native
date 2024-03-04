import { ReactNode } from "react";
import { Dimensions, StyleProp, StyleSheet, View, ViewStyle } from "react-native";

interface BackDropProps {
    height: number;
    width?: number;
    borderRadius: number;
    backgroundColor: string;
    borderColor?: string;
    alignItems?: 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch'
    justifyContent?: 'center' | 'flex-end' | 'space-around' | 'space-between' | 'space-evenly'
    children: ReactNode;
    marginBottom?: number,
    style?: StyleProp<ViewStyle>;
}

const dimensionWidth = Dimensions.get('window').width
export default function BackDrop({
    height,
    width,
    borderRadius,
    backgroundColor,
    borderColor,
    justifyContent,
    alignItems,
    marginBottom,
    style,
    children}: BackDropProps) {
    const styles = StyleSheet.create(
        {
            backDropStyle:
            {
                width: width ? width : dimensionWidth,
                height: height,
                alignSelf: 'center',
                borderColor: borderColor,
                backgroundColor: backgroundColor,
                borderRadius: borderRadius,
                justifyContent: justifyContent ? justifyContent : 'center',
                marginBottom: marginBottom,
                alignItems: alignItems ? alignItems : 'center',
            }
        })

    return (
        <View style={[style, styles.backDropStyle]}>
            {children}
        </View>
    )
}