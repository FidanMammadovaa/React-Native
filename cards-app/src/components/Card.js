import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useFonts, Inter_600SemiBold, Inter_500Medium } from '@expo-google-fonts/inter';
import { CheckBox } from "react-native-web";
import { useState } from "react";
export default function Card() {

    const [isChecked, setChecked] = useState(false);

    const handleCheckboxPress = () => {
        setChecked(!isChecked);
    };
    let [fontsLoaded] = useFonts({
        Inter_600SemiBold,
        Inter_500Medium
    });

    if (!fontsLoaded) {
        return null;
    }

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
        <View style={styles.container}>
        <View style={styles.completed}>
            <View style={isChecked ? styles.checkedtodoContainer : styles.todoContainer}>
                <View style={styles.categoryContainer}>
                    <Image
                        source={require('../../assets/calendar-event-fill.png')}
                        style={styles.calendarImg}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={isChecked ? styles.linedTextMedium : styles.textMedium}>Enter Title</Text>
                    <Text style={isChecked ? styles.linedTextSmall : styles.textSmall}>Enter Time</Text>
                </View>
            </View>
            <CustomCheckBox checked={isChecked} onPress={handleCheckboxPress} />
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        width: 376,
        height: 202,
        top: 106,
        left: 648,
        borderWidth: 1,
        borderColor: '#9747FF',
        borderStyle: 'dashed',
        borderRadius: 5,
        justifyContent: 'center',
    },
    completed: {
        width: 344,
        height: 80,
        top: 16,
        // left: 16,
        // padding: 16,
        borderBottomColor: '#9747FF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    todoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    checkedtodoContainer:
    {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        opacity: 0.5
    },
    categoryContainer: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#E7E2F3',
        justifyContent: 'center',
        alignItems: 'center',
    },
    calendarImg: {
        width: 24,
        height: 24,
    },
    textContainer: {
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
    },
    checkedBox: {
        backgroundColor: '#4A3780',
    },
    checkIcon: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
});
