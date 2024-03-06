import React, { useContext } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ListItem from "../ListItem";
import { useFonts, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { ToDoContext } from "../../contexts/ToDoContext";

export default function ListItems() {

    const todoContext = useContext(ToDoContext)


    let [fontsLoaded] = useFonts({
        Inter_600SemiBold,
    });

    if (!fontsLoaded) {
        return null;
    }


    const completedTodos = todoContext.todos.filter(todo => todo.completed);
    const incompleteTodos = todoContext.todos.filter(todo => !todo.completed);

    return (
        <View style={styles.container} >
            <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
                <View style={styles.incompleteTodosContainer}>
                    <View>
                        {incompleteTodos.map((todo) => (
                            <ListItem key={todo.id} id={todo.id} todo={todo} />
                        ))}
                    </View>
                </View>
                {completedTodos.length > 0 ? (
                    <View>
                        <View style={styles.titleContainer}>
                            <Text style={styles.completedText}>Completed</Text>
                        </View>
                        <View style={styles.completedTodosContainer}>
                            <View>
                                {completedTodos.map((todo) => (
                                    <ListItem key={todo.id} id={todo.id} todo={todo} />
                                ))}
                            </View>
                        </View>
                    </View>
                ) : <></>

                }

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
    incompleteTodosContainer: {
        width: 358,
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
    },
    scrollViewContent: {
        flex: 1,
        paddingBottom: 50,
    },
    completedTodosContainer:
    {
        marginTop: 20,
        width: 358,
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
    },
    titleContainer:
    {
        marginTop: 20,
    },
    completedText:
    {
        fontSize: 16,
        fontFamily: 'Inter_600SemiBold'
    }
});
