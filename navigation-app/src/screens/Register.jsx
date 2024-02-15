import React from "react";
import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";
import { useFonts, Poppins_700Bold, Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';
import Layout from "../components/Layout";
import CustomButton from "../components/CustomButton";

export default function Register({ route, navigation }) {
    let [fontsLoaded] = useFonts({
        Poppins_700Bold,
        Poppins_500Medium,
        Poppins_400Regular
    });

    if (!fontsLoaded) {
        return null;
    }

    const handleNavigateToLogin = () =>
    {
        navigation.navigate('Login')
    }
    return (
        <Layout>
            <Text style={styles.boldBigText}>Welcome Onboard</Text>
            <Text style={styles.boldSmallText}>Let's help you meet up your tasks.</Text>
            <TextInput
                style={styles.textInputStyle}
                placeholder="Enter your full name"
            />
            <TextInput
                style={styles.textInputStyle}
                placeholder="Enter your email id" />
            <TextInput
                style={styles.textInputStyle}
                placeholder="Enter password" />
            <TextInput
                style={styles.textInputStyle}
                placeholder="Enter confirm password" />
            <CustomButton textContent={route.name} />
            <View style={styles.rowContainer}>
                <Text style={styles.bottomBoldSmallText}>Already have an account ? </Text>
                <Pressable onPress={handleNavigateToLogin}>
                    <Text style={styles.smallGreenText}>Sign in.</Text>
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
    boldSmallText:
    {
        fontFamily: 'Poppins_500Medium',
        fontSize: 16,
        alignSelf: 'center'
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
    }
});
