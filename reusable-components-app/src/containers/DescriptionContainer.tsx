import React from "react";
import { View, Text, Image, StyleSheet, Pressable, Alert, FlatList } from "react-native";

export default function DescriptionContainer({ descriptions }) {
    const handleImagePress = (description) => {
        Alert.alert(`${description.name}`, `${description.biography}`,
            [
                {
                    text: 'Ok',
                }
            ])
    }

    const MarketItem = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <Pressable onPress={() => handleImagePress(item)}>
                    <Image source={{ uri: item.image }} style={styles.imgStyle} />
                </Pressable>
                <Text>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>
            </View>
        );
    };
    
    return (
        <FlatList
            data={descriptions}
            renderItem={({ item }) => <MarketItem item={item} />}
            keyExtractor={item => item.id} 
            horizontal
            contentContainerStyle={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    itemContainer: {
        width: 200,
        marginRight: 15
    },
    name: {
        fontSize: 24,
        fontWeight: '500',
    },
    price: {
        fontWeight: '600'
    },
    imgStyle: {
        width: 200,
        height: 200,
        borderRadius: 8,
    }
});
