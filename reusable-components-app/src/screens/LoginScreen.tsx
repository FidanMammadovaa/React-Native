import { TextInput, Text, Linking, Pressable, View, StyleSheet } from "react-native"
import React, { useState } from "react"
import { checkIsEmpty } from "../validation";
import {  useAuth } from "../context/AuthContext";
import { CustomButton } from "../components/Unknown/CustomButton";
import { CustomTextInput } from "../components/Unknown/CustomTextInput";
import { BaseText } from "../components/Unknown/DesignSystem";

export default function LoginScreen({ navigation }) {
    const authContext = useAuth()
    

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(true);

    let [emailError, setEmailError] = useState('')
    let [passwordError, setPasswordError] = useState('')

    let supportUrl = 'mailto: support@gmail.com'

    const clearFields = () => {
        setEmail('')
        setPassword('')
    }

    const handlePasswordChange = (password: string) => {
        setPassword(password)
    }

    const handleShowPassword = () => {
        setShowPassword((prev) => !prev);
    }

    const handleMailNavPress = () => {
        Linking.openURL(supportUrl)
    }

    const handleLoginUser = async () => {
        let user = {
            email: email,
            password: password
        }

        const emailIsValid = checkIsEmpty(email)
        const passwordIsValid = checkIsEmpty(password)

        if (emailIsValid && passwordIsValid) {
            await authContext.signIn(user)
            clearFields()
        }
        else {
            setEmailError("Invalid email")
            setPasswordError("Invalid password")
            clearFields()
        }

    }
    return (
        <View style={styles.container}>

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
            <View style={styles.passwordInput}>
                <TextInput
                    placeholder="Password"
                    style={styles.textStyle}
                    secureTextEntry={showPassword}
                    onChangeText={handlePasswordChange}
                    value={password}
                />
                <Pressable onPress={handleShowPassword}>
                    <Text style={styles.smallTextGreen}>{showPassword ? 'Show' : 'Hide'}</Text>
                </Pressable>
            </View>
            {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
            <View>
                <CustomButton
                    width={343}
                    height={51}
                    backgroundColor="#5DB075"
                    fontSize={16}
                    color="white"
                    text="Log In"
                    borderRadius={100}
                    onPress={handleLoginUser}
                />
            </View>
            <Pressable onPress={handleMailNavPress}>
                <View>
                    <BaseText
                        text="Forgot your password?"
                        marginTop={10} 
                        fontSize={16}
                        weight='semiBold' 
                        alignSelf='center'
                        color='#5DB075'
                    />
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
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
        marginVertical: 10
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
    errorText:
    {
        color: 'red',
        fontSize: 14,
    },
});
