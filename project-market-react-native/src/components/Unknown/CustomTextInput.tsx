import React from "react";
import { TextInput, StyleSheet, StyleProp, TextStyle } from "react-native";

interface CustomTextInputProps {
  width: number;
  height: number;
  alignSelf?: 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';
  marginVertical?: number;
  backgroundColor?: string;
  borderRadius?: number;
  paddingLeft?: number;
  padding?: number;
  placeholder: string;
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
  value?: string;
  borderColor?: string;
  textStyles?: StyleProp<TextStyle>;
}

export default function CustomTextInput({
  width,
  height,
  alignSelf,
  padding,
  paddingLeft,
  marginVertical,
  secureTextEntry,
  backgroundColor,
  borderRadius,
  placeholder,
  onChangeText,
  value,
  borderColor,
  textStyles
}: CustomTextInputProps){
  const styles = StyleSheet.create({
    inputStyle: {
      width: width,
      height: height,
      alignSelf: alignSelf ? alignSelf : 'auto',
      marginVertical: marginVertical,
      backgroundColor: backgroundColor,
      borderRadius: borderRadius,
      padding: padding ? padding: 10,
      paddingLeft: paddingLeft,
      borderColor: borderColor
    }
  });

  return (
    <TextInput
      secureTextEntry={secureTextEntry}
      style={[styles.inputStyle, textStyles]}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

