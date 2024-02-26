import { TextInput, Text, View, StyleSheet, Pressable, Linking } from "react-native"
import Checkbox from "expo-checkbox"
import React, {  useState } from "react"
import { checkEmailValidation, checkNameValidation, checkPasswordValidation } from "../validation"
import {useAuth } from "../context/AuthContext"
import { CustomButton } from "../components/Unknown/CustomButton"
import { CustomTextInput } from "../components/Unknown/CustomTextInput"
import { BaseText } from "../components/Unknown/DesignSystem"

export default function RegistrationScreen() {

    const authContext = useAuth()


    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [nameError, setNameError] = useState('')
    let [emailError, setEmailError] = useState('')
    let [passwordError, setPasswordError] = useState('')
    const [showPassword, setShowPassword] = useState(true);

    let supportUrl = 'mailto: support@gmail.com'
    const handlePasswordChange = (password: string) => {
        setPassword(password)
    }

    const handleShowPassword = () => {
        setShowPassword((prev) => !prev);
    }

    const handleMailNavPress = () => {
        Linking.openURL(supportUrl)
    }

    const clearFields = () => {
        setName('')
        setEmail('')
        setPassword('')
    }

    const handleRegisterUser = async () => {
        const nameIsValid = checkNameValidation(name)
        const emailIsValid = checkEmailValidation(email)
        const passwordIsValid = checkPasswordValidation(password)


        setNameError(nameIsValid ? '' : "Name length must be not less than 5 symbols")
        setEmailError(emailIsValid ? '' : "Email is invalid")
        setPasswordError(passwordIsValid ? '' : "Password length must exceed 8 symbols")

        if (nameIsValid && emailIsValid && passwordIsValid) {
            let user =
            {
                id: authContext.users.length + 1,
                name: name,
                email: email,
                password: password
            }
            await authContext.signUp(user)
            clearFields()
        }
    }


    return (
        <View style={styles.container}>
            <CustomTextInput
                placeholder='Name'
                width={350}
                borderWidth={1}
                borderColor='#E8E8E8'
                backgroundColor='#F6F6F6'
                borderRadius={15}
                marginVertical={15}
                fontSize={16}
                padding={16}
                color='#BDBDBD'
                value={name}
                onChangeText={(text) => setName(text)}
            />
            {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
            <CustomTextInput
                placeholder='Email'
                width={350}
                borderWidth={1}
                borderColor='#E8E8E8'
                backgroundColor='#F6F6F6'
                borderRadius={15}
                marginVertical={15}
                fontSize={16}
                padding={16}
                color='#BDBDBD'
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
            <View style={styles.inputContainer}>
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
                {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
            </View>
            <View style={styles.checkboxContainer}>
                <Checkbox />
                <Text style={styles.textStyle}>I would like to receive your newsletter and other promotional information.</Text>
            </View>
            <View>
                <CustomButton
                    width={343}
                    height={51}
                    backgroundColor="#5DB075"
                    fontSize={16}
                    color="white"
                    text="Sign Up"
                    borderRadius={100}
                    onPress={handleRegisterUser}
                />
            </View>
            <View>
                <Pressable onPress={handleMailNavPress}>
                    <BaseText
                        text="Forgot your password?"
                        marginTop={10}
                        fontSize={16}
                        weight='semiBold'
                        alignSelf='center'
                        color='#5DB075'
                    />
                </Pressable>
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
    errorText:
    {
        color: 'red',
        fontSize: 14,
    },
    inputContainer: {
        width: '90%',
    },
});
