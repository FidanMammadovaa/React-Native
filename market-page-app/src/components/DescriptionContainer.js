import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default function DescriptionContainer({ descriptions }) {
    return (
        <ScrollView horizontal contentContainerStyle={styles.container}>
            {descriptions.map((description, index) => (
                <View key={index} style={styles.itemContainer}>
                    <Image source={{ uri: description.image }} style={styles.imgStyle} />
                    <Text>{description.name}</Text>
                    <Text>{description.price}</Text>
                </View>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    itemContainer: {
        width: 150
    },
    name: {
        fontSize: 24,
        fontWeight: '500',
    },
    imgStyle: {
        width: 120,
        height: 120,
        borderRadius: 8,
    }
});