import { StyleSheet, Text, Pressable } from "react-native";


export default function CustomButton({ onPress, textContent }) {


    return (
        <Pressable onPress={onPress} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>
                {textContent}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonStyle:
    {
        width: 320,
        height: 52,
        backgroundColor: '#30D5C8',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30
    },
    textStyle: {
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 20
    }
});