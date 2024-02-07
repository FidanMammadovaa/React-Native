import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, Pressable, Alert } from "react-native";

export default function DescriptionContainer({ descriptions }) {
    const handleImagePress = (description) =>
    {
        Alert.alert(`${description.name}`, `${description.biography}`,
        [
            {
                text: 'Ok',
            }
        ])
    }

    return (
        <ScrollView horizontal contentContainerStyle={styles.container}>
            {descriptions.map((description, index) => (
                <View key={index} style={styles.itemContainer}>
                    <Pressable onPress={() => handleImagePress(description)}>
                        <Image source={{ uri: description.image }} style={styles.imgStyle} />
                    </Pressable>
                    <Text>{description.name}</Text>
                    <Text style={styles.price}>{description.price}</Text>
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
        width: 200,
        marginRight: 10
    },
    name: {
        fontSize: 24,
        fontWeight: '500',
    },
    price:
    {
        fontWeight: '600'
    },
    imgStyle: {
        width: 200,
        height: 200,
        borderRadius: 8,
    }
});
