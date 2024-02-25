import React from "react";
import { Text, TextStyle } from "react-native";

const Weight: any = {
    normal: {
        fontWeight: '400'
    },
    medium: {
        fontWeight: '500'
    },
    semiBold: {
        fontWeight: '600'
    },
    bold: {
        fontWeight: '800'
    },
}

interface IBaseText {
    text: string,
    alignSelf: string,
    marginTop: number,
    fontSize: number,
    color: string,
    weight: 'normal' | 'medium' | 'semiBold' | 'bold',
    textStyles?: TextStyle
}

export const BaseText = ({
    text,
    alignSelf, 
    marginTop,
    fontSize,
    color,
    weight,
    textStyles
}: IBaseText) => {
    return (
        <Text style={[
            {
            fontSize,
            color,
            alignSelf,
            marginTop,
            ...Weight[weight],
            }, textStyles]}>{text}</Text>
    )
}