import { StyleSheet, View, Text } from "react-native";



export default function SearchBar() {

    return (
        <View style={styles.searchBar}>
            <Text style={styles.searchText}>Search</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    searchBar:
    {
        borderWidth: 1,
        borderColor: '#E8E8E8',
        textAlignVertical: 'center',
        backgroundColor: '#F6F6F6',
        borderRadius: 15,
    },
    searchText:
    {
        fontSize: 16,
        padding: 16,
        fontWeight: '500',
        color: '#BDBDBD'
    }
});
