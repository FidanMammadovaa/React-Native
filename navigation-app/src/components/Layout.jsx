import React from "react";
import { StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout({ children }) {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.keyboardAvoidingContainer}
        >
            <SafeAreaView style={styles.container}>
                {children}
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DEEAE8',
        alignItems: 'center',
        justifyContent: 'center', // Adjust this based on your layout
    },
    keyboardAvoidingContainer: {
        flex: 1,
        justifyContent: 'center',
    },
});
