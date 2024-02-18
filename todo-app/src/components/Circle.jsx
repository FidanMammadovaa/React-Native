import React from "react";
import { Pressable, StyleSheet } from "react-native";

export default function Circle({ onPress, svgIcon, backgroundColor, opacity }) {
    return (
        opacity ? (
            <Pressable onPress={onPress} style={[style.circleStyle, { backgroundColor, opacity }]}>
                {svgIcon}
            </Pressable>
        ) :
            <Pressable onPress={onPress} style={[style.circleStyle, { backgroundColor }]}>
                {svgIcon}
            </Pressable>
    );
}

const style = StyleSheet.create({
    circleStyle: {
        width: 48,
        height: 48,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
