import { Pressable, View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { useFonts, Inter_700Bold } from '@expo-google-fonts/inter';



export default function CustomButton({ onPress, buttonText }) {
    let [fontsLoaded] = useFonts({
        Inter_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Pressable onPress={onPress} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>{buttonText}</Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    buttonStyle:
    {
        marginTop: 20,
        width: 356,
        marginBottom: 30,
        height: 56,
        borderRadius: 50,
        backgroundColor: '#4A3780',
        justifyContent: 'center',
        alignItems: 'center',

    },
    textStyle:
    {
        fontFamily: 'Inter_700Bold',
        fontSize: 16,
        color: '#FFFFFF',
    }
})