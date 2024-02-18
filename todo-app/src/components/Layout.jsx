import React from "react"
import { StyleSheet, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Layout({children}) {
    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: 
    {
        flex: 1,
        backgroundColor: '#F1F5F9',
        alignItems: 'center',
        // justifyContent: 'center'

    }
})