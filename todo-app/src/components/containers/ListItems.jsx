import React from "react";
import { View, Text, StyleSheet } from "react-native";
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
        <View>

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

        </View>

    );
}

const styles = StyleSheet.create({
    firstContainer: {
        top: -70,
        width: 358,
        height: 242,
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
    },
    secondContainer:
    {
        top: -20,
        width: 358,
        height: 150,
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
    },
    thirdContainer:
    {
        top: -30
    },
    completedText:
    {
        fontSize: 16,
        fontFamily: 'Inter_600SemiBold'
    }
});
