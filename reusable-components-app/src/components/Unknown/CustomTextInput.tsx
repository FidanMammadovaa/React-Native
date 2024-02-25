import { StyleSheet, View } from "react-native"
import { TextInput } from "react-native-gesture-handler"


interface ICustomTextInput {
    placeholder: string;
    width: number;
    borderWidth: number;
    borderColor: string;
    backgroundColor: string;
    borderRadius: number;
    marginVertical: number;
    fontSize: number;
    padding: number;
    color: string;
    value: string; 
    onChangeText: (text: string) => void; 
}

export const CustomTextInput = ({
    placeholder,
    width,
    borderWidth,
    borderColor,
    backgroundColor,
    borderRadius,
    marginVertical,
    fontSize,
    padding,
    color,
    value,
    onChangeText,
}: ICustomTextInput) => {


    const dynamicStyles = StyleSheet.create({
        inputStyle: {
            width: width,
            borderWidth: borderWidth,
            borderColor: borderColor,
            backgroundColor: backgroundColor,
            borderRadius: borderRadius,
            marginVertical: marginVertical,
        },
        textStyle:
        {
            fontSize: fontSize,
            padding: padding,
            fontWeight: '400',
            color: color,
        }
    });
    return (
        <View style={dynamicStyles.inputStyle}>
        <TextInput 
            style={dynamicStyles.textStyle} 
            placeholder={placeholder} 
            value={value} 
            onChangeText={onChangeText} 
        />
    </View>
    )
}



