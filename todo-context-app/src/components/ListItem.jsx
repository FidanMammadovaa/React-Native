import React, {useContext } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { useFonts, Inter_600SemiBold, Inter_500Medium } from '@expo-google-fonts/inter';
import Circle from "./Circle";
import { ToDoContext } from "../contexts/ToDoContext";
import { BaseText } from "./Unknown/DesignSystem";

export default function ListItem({ id, todo }) {


    const toDoContext = useContext(ToDoContext)

    let [fontsLoaded] = useFonts({
        Inter_600SemiBold,
        Inter_500Medium
    });

    if (!fontsLoaded) {
        return null;
    }

    const handleCheckboxPress = () => {
        toDoContext.finishToDo(id)

    };


    const CustomCheckBox = ({ checked, onPress }) => {
        return (
            <Pressable onPress={onPress}>
                <View style={[styles.checkbox, checked && styles.checkedBox]}>
                    {checked && <Text style={styles.checkIcon}>✔</Text>}
                </View>
            </Pressable>
        );
    };


    return (
        <View>
            {todo.completed ? (
                <View style={styles.container}>
                    <View style={styles.taskContainer}>
                        <View style={styles.todoContainer}>
                            <View style={styles.categoryContainer}>
                                <Circle
                                    key={todo.id}
                                    svgIcon={todo.icon}
                                    backgroundColor={todo.backgroundColor}
                                    opacity={0.5}
                                />
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={todo.completed ? styles.linedTextMedium : styles.textMedium}>{todo.taskTitle}</Text>
                                <Text style={todo.completed ? styles.linedTextSmall : styles.textSmall}>{todo.time}</Text>
                            </View>
                        </View>
                        <CustomCheckBox checked={todo.completed} onPress={handleCheckboxPress} />
                    </View>
                </View>
            ) : (
                <View style={styles.container}>
                    <View style={styles.taskContainer}>
                        <View style={styles.todoContainer}>
                            <View style={styles.categoryContainer}>
                                <Circle
                                    key={todo.id}
                                    svgIcon={todo.icon}
                                    backgroundColor={todo.backgroundColor} />
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.textMedium}>{todo.taskTitle}</Text>
                                <Text style={styles.textSmall}>{todo.time}</Text>
                            </View>
                        </View>
                        <CustomCheckBox checked={todo.completed} onPress={handleCheckboxPress} />
                    </View>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 358,
        height: 80,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
    },
    taskContainer: {
        width: 344,
        height: 80,
        top: 16,
        borderBottomColor: '#9747FF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    todoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginBottom: 25
    },
    checkedtodoContainer:
    {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        opacity: 0.5
    },
    categoryContainer: {
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    calendarImg: {
        width: 24,
        height: 24,
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 2,
    },
    textMedium: {
        fontFamily: 'Inter_600SemiBold',
        fontSize: 16,
        lineHeight: 18,
        letterSpacing: 0,
        textAlign: 'left',
    },
    textSmall: {
        fontFamily: 'Inter_500Medium',
        opacity: 0.7,
        fontSize: 14,
        lineHeight: 17,
        letterSpacing: 0,
        textAlign: 'left',
    },
    linedTextMedium:
    {
        fontFamily: 'Inter_600SemiBold',
        fontSize: 16,
        lineHeight: 18,
        letterSpacing: 0,
        textAlign: 'left',
        textDecorationLine: 'line-through',
    },
    linedTextSmall:
    {
        fontFamily: 'Inter_500Medium',
        opacity: 0.7,
        fontSize: 14,
        lineHeight: 17,
        letterSpacing: 0,
        textAlign: 'left',
        textDecorationLine: 'line-through'
    },
    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 1,
        borderColor: '#4A3780',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25
    },
    checkedBox: {
        backgroundColor: '#4A3780',
    },
    checkIcon: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
});
