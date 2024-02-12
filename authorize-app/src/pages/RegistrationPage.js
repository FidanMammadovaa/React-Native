import { TextInput, Text, View, StyleSheet, Pressable } from "react-native"
import Checkbox from "expo-checkbox"
import React, { useState } from "react"

export default function RegistrationPage() {
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);

    const handleNameChange = (name) => {
        setName(name)
    }

    const handleEmailChange = (email) => {
        setEmail(email)
    }

    const handlePasswordChange = (password) => {
        setPassword(password)
    }

    const handleShowPassword = () => {
        setShowPassword((prev) => !prev);
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputStyle}>
                <TextInput
                    placeholder="Name"
                    style={styles.textStyle}
                    onChangeText={handleNameChange}
                    value={name}
                />
            </View>
            <View style={styles.inputStyle}>
                <TextInput
                    placeholder="Email"
                    style={styles.textStyle}
                    onChangeText={handleEmailChange}
                    value={email}
                />
            </View>
            <View style={styles.passwordInput}>
                <TextInput
                    placeholder="Password"
                    style={styles.textStyle}
                    secureTextEntry={showPassword}
                    onChangeText={handlePasswordChange}
                    value={password}
                />
                <Pressable onPress={handleShowPassword} style={styles.showPasswordButton}>
                    <Text style={styles.smallTextGreen}>{showPassword ? 'Show' : 'Hide'}</Text>
                </Pressable>
            </View>
            <View style={styles.checkboxContainer}>
                <Checkbox />
                <Text style={styles.textStyle}>I would like to receive your newsletter and other promotional information.</Text>
            </View>
            <View>
                <Pressable style={styles.signUpButtonStyle}>
                    <Text style={styles.signUpTextStyle}>
                        Sign Up
                    </Text>
                </Pressable>
            </View>
            <View>
                <Text style={styles.forgotYourPassText}>Forgot your password?</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    inputStyle: {
        width: '90%',
        borderWidth: 1,
        borderColor: '#E8E8E8',
        backgroundColor: '#F6F6F6',
        borderRadius: 15,
        marginVertical: 10
    },
    passwordInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        borderWidth: 1,
        borderColor: '#E8E8E8',
        backgroundColor: '#F6F6F6',
        borderRadius: 15,
        marginVertical: 15
    },
    textStyle: {
        fontSize: 16,
        padding: 16,
        fontWeight: '400',
        color: '#BDBDBD',
    },
    smallTextGreen: {
        fontSize: 16,
        padding: 16,
        fontWeight: '500',
        color: '#5DB075',
    },
    showPasswordButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 15,
    },
    signUpButtonStyle:
    {
        width: 343,
        height: 51,
        backgroundColor: '#5DB075',
        justifyContent: 'center',
        borderRadius: 100
    },
    signUpTextStyle:
    {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        alignSelf: 'center'
    },
    forgotYourPassText:
    {
        marginTop: 10,
        fontSize: 16,
        fontWeight: '600',
        alignSelf: 'center',
        color: '#5DB075'
    }
});
