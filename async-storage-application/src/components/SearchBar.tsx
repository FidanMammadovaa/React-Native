import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";

export default function SearchBar() {
    const [searchInput, setSearchInput] = useState('');

    const handleTextChange = (text) => {
        setSearchInput(text);
    }

    return (
        <View style={styles.searchBar}>
            <TextInput style={styles.searchText} placeholder="Search" onChangeText={handleTextChange} value={searchInput}/>
        </View>
    );
}

const styles = StyleSheet.create({
    searchBar:
    {
        borderWidth: 1,
        borderColor: '#E8E8E8',
        verticalAlign: 'center',
        backgroundColor: '#F6F6F6',
        borderRadius: 30,
        marginVertical: 10,
        marginHorizontal: 10,
    },
    searchText:
    {
        fontSize: 16,
        padding: 16,
        fontWeight: '500',
        color: '#BDBDBD'
    }
});
