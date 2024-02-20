import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ListItem from "../ListItem";
import { useFonts, Inter_600SemiBold } from '@expo-google-fonts/inter';

export default function ListItems({ todos }) {

    let [fontsLoaded] = useFonts({
        Inter_600SemiBold,
    });

    if (!fontsLoaded) {
        return null;
    }
    const completedTodos = todos.filter(todo => todo.completed);
    const incompleteTodos = todos.filter(todo => !todo.completed);

    return (
        <View style={styles.container} >
            <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
                <View style={styles.firstContainer}>
                    <View>
                        {incompleteTodos.map((todo) => (
                            <ListItem key={todo.id} todo={todo} />
                        ))}
                    </View>
                </View>
                <View style={styles.thirdContainer}>
                    <Text style={styles.completedText}>Completed</Text>
                </View>
                <View style={styles.secondContainer}>
                    <View>
                        {completedTodos.map((todo) => (
                            <ListItem key={todo.id} todo={todo} />
                        ))}
                    </View>
                </View>

            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        top: -70,
    },
    firstContainer: {
        width: 358,
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
    },
    scrollViewContent: {
        flex: 1,
        paddingBottom: 50, 
    },
    secondContainer:
    {
        marginTop: 20,
        width: 358,
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
    },
    thirdContainer:
    {
        marginTop: 20,
    },
    completedText:
    {
        fontSize: 16,
        fontFamily: 'Inter_600SemiBold'
    }
});
