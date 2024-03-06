import { StyleSheet, Pressable, View, Text, TextInput, KeyboardAvoidingView, Dimensions } from "react-native";
import { useFonts, Inter_600SemiBold, Inter_400Regular } from '@expo-google-fonts/inter';
import Header from "../components/Header";
import Layout from '../components/Layout'
import InputIcon from '../icons/InputIcon'
import ClockIcon from '../icons/ClockIcon'
import Circle from "../components/Circle";
import CustomButton from "../components/CustomButton";
import { useContext, useState } from "react";
import { ToDoContext } from "../contexts/ToDoContext";
import { BaseText } from "../components/Unknown/DesignSystem";
import CustomTextInput from "../components/Unknown/CustomTextInput";

export default function NewTask({ route, navigation }) {


    const todoContext = useContext(ToDoContext)

    let [fontsLoaded] = useFonts({
        Inter_600SemiBold,
        Inter_400Regular
    });


    const [taskData, setTaskData] = useState({
        completed: false,
        icon: "TaskIcon",
        taskTitle: "",
        backgroundColor: "#DBECF6",
        time: "",
        date: "",
        notes: ""
    });

    const clearFields = () => {
        setTaskData({ taskTitle: '', time: '', date: '', notes: '' });
    }

    const handleCategorySelect = (categoryIcon, backgroundColor) => {
        setTaskData((prevData) => ({
            ...prevData,
            icon: categoryIcon,
            backgroundColor: backgroundColor,
        }));
    };

    if (!fontsLoaded) {
        return null;
    }
    const handleClosePress = () => {
        console.log('pressed');
        navigation.navigate('My Todo List')
    }

    const handleSaveButtonPress = () => {
        const newTask = {
            id: todoContext.todos.length + 1,
            ...taskData,
        };

        todoContext.handleAddTodo(newTask);
        clearFields()
        navigation.navigate("My Todo List")
    };



    return (
        <Layout>
            <Header onPress={() => handleClosePress()} svgIcon={'CloseIcon'} route={route} height={96} />
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.taskTitleSection}>
                    <BaseText
                        text='Task Title'
                        weight="semiBold"
                        textStyles={{ fontFamily: 'Inter_600SemiBold' }}
                        fontSize={14}
                        color="#1B1B1D" />
                    <CustomTextInput
                        backgroundColor="#FFFFFF"
                        borderColor="#E0E0E0"
                        borderRadius={8}
                        value={taskData.taskTitle}
                        onChangeText={(text) => setTaskData({ ...taskData, taskTitle: text })}
                        borderWidth={1}
                        placeholder="Task Title"
                        textStyles={{ padding: 16, fontSize: 16, fontFamily: 'Inter_400Regular' }}
                    />
                </View>
                <View style={styles.rowContainer}>
                    <BaseText
                        text='Category'
                        weight="semiBold"
                        textStyles={{ fontFamily: 'Inter_600SemiBold' }}
                        fontSize={14}
                        color="#1B1B1D" />
                    <View style={styles.iconContainer}>
                        <Circle onPress={() => handleCategorySelect('TaskIcon', '#DBECF6')} svgIcon={'TaskIcon'} backgroundColor={'#DBECF6'} />
                        <Circle onPress={() => handleCategorySelect('EventIcon', '#E7E2F3')} svgIcon={'EventIcon'} backgroundColor={'#E7E2F3'} />
                        <Circle onPress={() => handleCategorySelect('GoalIcon', '#FEF5D3')} svgIcon={'GoalIcon'} backgroundColor={'#FEF5D3'} />
                    </View>
                </View>
                <View style={styles.rowContainer}>
                    <View>
                        <BaseText
                            text='Date'
                            weight="semiBold"
                            textStyles={{ fontFamily: 'Inter_600SemiBold' }}
                            fontSize={14}
                            color="#1B1B1D" />
                        <View>
                            <CustomTextInput
                                marginVertical={10}
                                borderRadius={8}
                                width={156}
                                placeholder="Date"
                                backgroundColor="#FFFFFF"
                                onChangeText={(text) => setTaskData({ ...taskData, date: text })}
                                value={taskData.date}
                                borderColor="#E0E0E0"
                                borderWidth={1}
                                textStyles={{ padding: 16, fontSize: 16, fontFamily: 'Inter_400Regular' }} />
                            <InputIcon />
                        </View>
                    </View>
                    <View>
                        <BaseText
                            text='Time'
                            weight="semiBold"
                            textStyles={{ fontFamily: 'Inter_600SemiBold' }}
                            fontSize={14}
                            color="#1B1B1D" />
                        <View>
                            <CustomTextInput
                                marginVertical={10}
                                borderRadius={8}
                                width={156}
                                onChangeText={(text) => setTaskData({ ...taskData, time: text })}
                                value={taskData.time}
                                placeholder="Time"
                                backgroundColor="#FFFFFF"
                                borderColor="#E0E0E0"
                                borderWidth={1}
                                textStyles={{ padding: 16, fontSize: 16, fontFamily: 'Inter_400Regular' }} />
                            <ClockIcon />
                        </View>
                    </View>
                </View>
                <View>
                    <BaseText
                        text='Notes'
                        weight="semiBold"
                        textStyles={{ fontFamily: 'Inter_600SemiBold' }}
                        fontSize={14}
                        color="#1B1B1D" />
                    <CustomTextInput
                        marginVertical={10}
                        borderRadius={8}
                        height={178}
                        placeholder="Notes"
                        backgroundColor="#FFFFFF"
                        borderColor="#E0E0E0"
                        value={taskData.notes}
                        onChangeText={(text) => setTaskData({ ...taskData, notes: text })}
                        borderWidth={1}
                        textStyles={{ paddingLeft: 16, fontSize: 16, fontFamily: 'Inter_400Regular' }} />
                </View>
                <CustomButton onPress={handleSaveButtonPress} buttonText={"Save"} />

            </KeyboardAvoidingView>

        </Layout>
    )
}


const styles = StyleSheet.create({
    container:
    {
        paddingTop: 16,
        justifyContent: 'space-between',
        width: Dimensions.get('window').width - 50
    },
    rowContainer:
    {
        paddingTop: 16,
        gap: 30,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
    },
    iconContainer:
    {
        flexDirection: 'row',
        marginLeft: 20,
        gap: 15
    },
})