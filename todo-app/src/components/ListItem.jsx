import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { useFonts, Inter_600SemiBold, Inter_500Medium } from '@expo-google-fonts/inter';
import TaskIcon from "../icons/TaskIcon";
import EventIcon from "../icons/EventIcon";
import GoalIcon from "../icons/GoalIcon";
import Circle from "./Circle";

export default function ListItem({ todo }) {

    const [isChecked, setChecked] = useState(todo.completed);

    useEffect(() => {
        setChecked(todo.completed);
    }, [todo.completed]);

    let [fontsLoaded] = useFonts({
        Inter_600SemiBold,
        Inter_500Medium
    });

    if (!fontsLoaded) {
        return null;
    }



    const handleCheckboxPress = () => {
        setChecked((prev) => !prev);
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

    const renderIcon = (icon, styles) => {
        switch (icon) {
            case 'EventIcon':
                return <EventIcon {...styles} />;
            case 'GoalIcon':
                return <GoalIcon {...styles} />;
            case 'TaskIcon':
                return <TaskIcon {...styles} />;
            default:
                return null;
        }
    };

    return (
        <View>
            {isChecked ? (
                <View style={styles.container}>
                    <View style={styles.taskContainer}>
                        <View style={styles.todoContainer}>
                            <View style={styles.categoryContainer}>
                                <Circle
                                    key={todo.id}
                                    svgIcon={renderIcon(todo.icon)}
                                    backgroundColor={todo.backgroundColor}
                                    opacity={0.5}
                                />
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={isChecked ? styles.linedTextMedium : styles.textMedium}>{todo.taskTitle}</Text>
                                <Text style={isChecked ? styles.linedTextSmall : styles.textSmall}>{todo.time}</Text>
                            </View>
                        </View>
                        <CustomCheckBox checked={isChecked} onPress={handleCheckboxPress} />
                    </View>
                </View>
            ) : (
                <View style={styles.container}>
                    <View style={styles.taskContainer}>
                        <View style={styles.todoContainer}>
                            <View style={styles.categoryContainer}>
                                <Circle
                                    key={todo.id}
                                    svgIcon={renderIcon(todo.icon)}
                                    backgroundColor={todo.backgroundColor} />
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.textMedium}>{todo.taskTitle}</Text>
                                <Text style={styles.textSmall}>{todo.time}</Text>
                            </View>
                        </View>
                        <CustomCheckBox checked={isChecked} onPress={handleCheckboxPress} />
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
        fontWeight: '600',
        lineHeight: 18,
        letterSpacing: 0,
        textAlign: 'left',
    },
    textSmall: {
        fontFamily: 'Inter_500Medium',
        opacity: 0.7,
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 17,
        letterSpacing: 0,
        textAlign: 'left',
    },
    linedTextMedium:
    {
        fontFamily: 'Inter_600SemiBold',
        fontSize: 16,
        fontWeight: '600',
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
        fontWeight: '500',
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
