import { ReactNode } from "react";
import { View, StyleSheet } from "react-native"

interface CircleProps {
    marginLeft?: number,
    marginTop?: number,
    width: number;
    height: number;
    backgroundColor: string;
    borderRadius: number;
    children: ReactNode
}

export default function Circle({ 
    marginLeft,
    marginTop,
    width,
    height,
    backgroundColor,
    borderRadius,
    children }: CircleProps) {

    const styles = StyleSheet.create(
        {
            circleStyle:
            {
                marginTop: marginTop,
                marginLeft: marginLeft,
                width: width,
                height: height,
                backgroundColor: backgroundColor,
                borderRadius: borderRadius,
                justifyContent: 'center',
                alignItems: 'center'
            }
        })
    return (
        <View style={styles.circleStyle}>
            {children}
        </View>
    )
}
