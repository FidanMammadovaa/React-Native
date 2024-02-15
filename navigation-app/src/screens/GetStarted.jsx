import { StyleSheet, Text, Image } from "react-native";
import { useFonts, Poppins_700Bold, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import CustomButton from "../components/CustomButton";
import Layout from "../components/Layout";


export default function GetStarted({ route, navigation }) {
    let imageUrl = 'https://d31sxl6qgne2yj.cloudfront.net/wordpress/wp-content/uploads/20220629081646/Alice-Wonderland.jpg'
    let [fontsLoaded] = useFonts({
        Poppins_700Bold,
        Poppins_600SemiBold
    });


    if (!fontsLoaded) {
        return null;
    }

    const handleNavigateToRegister = () =>
    {
        navigation.navigate('Register')
    }
    return (
        <Layout>
            <Image style={styles.imageStyle} source={{ uri: imageUrl }} />
            <Text style={styles.boldBigText}>Get things done with today</Text>
            <Text style={styles.boldMediumText}>Welcome to Wonderland</Text>
            <CustomButton
                onPress={handleNavigateToRegister}
                textContent={route.name}
                navigation={navigation} />
        </Layout>

    )
}

const styles = StyleSheet.create({
    boldBigText:
    {
        fontFamily: 'Poppins_700Bold',
        fontSize: 22,
        alignSelf: 'center'
    },
    boldMediumText:
    {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 16,
        alignSelf: 'center'
    },
    imageStyle: {
        width: 322,
        height: 239,
    }
});