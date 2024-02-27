import React from "react";
import { TextInput, StyleSheet } from "react-native";

interface CustomTextInputProps {
  width: number;
  height: number;
  alignSelf?: 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';
  marginVertical?: number;
  backgroundColor?: string;
  borderRadius?: number;
  placeholder?: string;
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
  value?: string;
}

export default function CustomTextInput({
  width,
  height,
  alignSelf,
  marginVertical,
  secureTextEntry,
  backgroundColor,
  borderRadius,
  placeholder,
  onChangeText,
  value
}: CustomTextInputProps){
  const styles = StyleSheet.create({
    inputStyle: {
      width: width,
      height: height,
      alignSelf: alignSelf ? alignSelf : 'auto',
      marginVertical: marginVertical,
      backgroundColor: backgroundColor,
      borderRadius: borderRadius,
      padding: 10,
    }
  });

  return (
    <TextInput
      secureTextEntry={secureTextEntry}
      style={styles.inputStyle}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

