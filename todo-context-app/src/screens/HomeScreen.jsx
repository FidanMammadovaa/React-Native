import { StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import Layout from "../components/Layout";


export default function HomeScreen({ route, navigation }) {

    const handleButtonPress = () => {
        navigation.navigate('My Todo List')
    }

    return (
        <Layout style={styles.container}>
            <CustomButton onPress={handleButtonPress} buttonText={'My Todo List'} />
        </Layout>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
})