import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView } from "react-native";
import { useFonts, Inter_600SemiBold, Inter_400Regular } from '@expo-google-fonts/inter';
import Header from "../components/Header";
import CloseIcon from '../icons/CloseIcon'
import Layout from '../components/Layout'
import TaskIcon from '../icons/TaskIcon'
import EventIcon from '../icons/EventIcon'
import GoalIcon from '../icons/GoalIcon'
import InputIcon from '../icons/InputIcon'
import ClockIcon from '../icons/ClockIcon'
import Circle from "../components/Circle";
import CustomButton from "../components/CustomButton";

export default function NewTask({ route, navigation }) {

    let [fontsLoaded] = useFonts({
        Inter_600SemiBold,
        Inter_400Regular
    });

    if (!fontsLoaded) {
        return null;
    }

    const handleSaveButtonPress = () => {
        console.log('Saved');
    }

    const handleClosePress = () => {
        navigation.navigate('My Todo List')
    }

    return (
        <Layout>
            <Header onPress={handleClosePress} svgIcon={CloseIcon} route={route} height={96} />
            <KeyboardAvoidingView style={styles.secondContainer} behavior="padding">
                <View style={styles.taskTitleSection}>
                    <Text style={styles.boldTextStyle}>Task Title</Text>
                    <TextInput style={styles.taskTitleInput} placeholder="Task Title" />
                </View>
                <View style={styles.categorySection}>
                    <Text style={styles.boldTextStyleCenter}>Category</Text>
                    <View style={styles.iconContainer}>
                        <Circle
                            svgIcon={TaskIcon} backgroundColor={'#DBECF6'} />
                        <Circle
                            svgIcon={EventIcon} backgroundColor={'#E7E2F3'} />
                        <Circle
                            svgIcon={GoalIcon} backgroundColor={'#FEF5D3'} />
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.dateSection}>
                        <Text style={styles.boldTextStyle}>Date</Text>
                        <TextInput style={styles.smallTextInput} placeholder="Date" />
                        <InputIcon />
                    </View>
                    <View style={styles.timeSection}>
                        <Text style={styles.boldTextStyle}>Time</Text>
                        <TextInput style={styles.smallTextInput} placeholder="Time" />
                        <ClockIcon />
                    </View>
                </View>
                <View style={styles.notesSection}>
                    <Text style={styles.boldTextStyle}>Notes</Text>
                    <TextInput style={styles.bigTextInput} placeholder="Input" />
                </View>
                <CustomButton buttonText={'Save'} onPress={handleSaveButtonPress} />
            </KeyboardAvoidingView>
        </Layout>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    secondContainer: {
        flex: 1,
        top: -55,
        justifyContent: 'center',
        marginBottom: 20,
    },
    dateSection: {
        flex: 1,
        marginTop: 10,
        paddingRight: 20
    },
    timeSection: {
        flex: 1,
        marginTop: 10,
    },
    iconContainer:
    {
        flexDirection: 'row',
        marginLeft: 20,
        gap: 15
    },
    taskTitleSection:
    {
        marginVertical: 20,
        width: 358,
    },
    categorySection:
    {
        flexDirection: 'row',
        width: 358,
    },
    notesSection:
    {

    },
    boldTextStyle:
    {
        fontFamily: 'Inter_600SemiBold',
        fontSize: 16,
        marginBottom: 10
    },
    boldTextStyleCenter:
    {
        fontFamily: 'Inter_600SemiBold',
        fontSize: 16,
        alignSelf: 'center'
    },
    taskTitleInput:
    {
        height: 55,
        fontFamily: 'Inter_400Regular',
        backgroundColor: '#FFFFFF',
        fontSize: 16,
        paddingLeft: 15,
        borderRadius: 6,
    },
    smallTextInput:
    {
        height: 55,
        fontFamily: 'Inter_400Regular',
        backgroundColor: '#FFFFFF',
        fontSize: 16,
        paddingLeft: 20,
        borderRadius: 6,
    },
    bigTextInput:
    {
        width: 358,
        height: 177,
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 6,
        fontSize: 16,
        textAlignVertical: 'top'
    }
})