import React from "react";
import { StyleSheet, View, Text, TextInput, Pressable, Image} from "react-native";
import { useFonts, Poppins_700Bold, Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';
import Layout from "../components/Layout";
import CustomButton from "../components/CustomButton";

export default function Login({ route, navigation }) {

    let imageUrl = 'https://t3.ftcdn.net/jpg/05/43/99/80/360_F_543998018_GfRQVmrDAaZDVxM9EGBC9Ry5Yknr3gWQ.jpg'
    let [fontsLoaded] = useFonts({
        Poppins_700Bold,
        Poppins_500Medium,
        Poppins_400Regular
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
           <Text style={styles.boldBigText}>Welcome back!</Text>
           <Image style={styles.imageStyle} source={{uri: imageUrl}}/>
            <TextInput
                style={styles.textInputStyle}
                placeholder="Enter your email"
            />
            <TextInput
                style={styles.textInputStyle}
                placeholder="Enter your password" />
            <CustomButton textContent={route.name} />
            <View style={styles.rowContainer}>
                <Text style={styles.bottomBoldSmallText}>Don't have an account ? </Text>
                <Pressable onPress={handleNavigateToRegister}>
                    <Text style={styles.smallGreenText}>Sign up.</Text>
                </Pressable>
            </View>
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
    rowContainer:
    {
        flexDirection: 'row',
        marginBottom: 30
    },
    textInputStyle:
    {
        fontFamily: 'Poppins_400Regular',
        fontSize: 13,
        paddingLeft: 20,
        backgroundColor: '#FFFFFF',
        width: 360,
        height: 49,
        borderRadius: 100,
        marginVertical: 10
    },
    bottomBoldSmallText:
    {
        fontFamily: 'Poppins_500Medium',
        fontSize: 13
    },
    smallGreenText:
    {
        fontFamily: 'Poppins_500Medium',
        fontSize: 13,
        color: '#009A9A'
    },
    imageStyle: {
        width: 322,
        height: 239,
        marginBottom: 20
    }
});
