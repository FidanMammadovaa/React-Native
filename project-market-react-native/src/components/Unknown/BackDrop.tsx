import { ReactNode } from "react";
import { Dimensions, StyleSheet, View } from "react-native";

interface BackDropProps {
    height: number;
    width?: number;
    borderRadius: number;
    backgroundColor: string;
    alignItems?: 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch'
    children: ReactNode;
}

const dimensionWidth = Dimensions.get('screen').width
export default function BackDrop({
    height,
    width,
    borderRadius,
    backgroundColor,
    alignItems,
    children}: BackDropProps) {
    const styles = StyleSheet.create(
        {
            backDropStyle:
            {
                width: width ? width : dimensionWidth,
                height: height,
                backgroundColor: backgroundColor,
                borderRadius: borderRadius,
                justifyContent: 'center',
                alignItems: alignItems ? alignItems : 'center',
                alignSelf: 'center'
            }
        })

    return (
        <View style={styles.backDropStyle}>
            {children}
        </View>
    )
}