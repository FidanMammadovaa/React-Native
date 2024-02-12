import { Text, View, StyleSheet } from "react-native"
import React from "react"

export default function HomePage() {
    return (
        <View style={styles.container}>
            <Text>Home Page</Text>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  