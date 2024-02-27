import { View, Pressable, StyleSheet, Text } from "react-native";
import Layout from "../components/Layouts/Layout";
import BackDrop from "../components/Unknown/BackDrop";
import { BaseText } from "../components/Unknown/DesignSystem";
import CustomTextInput from "../components/Unknown/CustomTextInput";
import CustomButton from "../components/Unknown/CustomButton";
import { useState } from "react";
import { User, useAuth } from "../context/AuthContext";
import { checkEmailValidation, checkIsEmpty, checkPasswordValidation } from "../validation";

interface LogInProps {
    route?: any;
    navigation?: any;
}

export default function LogIn({ route, navigation }: LogInProps) {

    const authContext = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [showPassword, setShowPassword] = useState(true)


    const handleNavToSignUp = () => {
        navigation.navigate('Sign Up')
    }
    
    const handleShowPassword = () =>
    {
        setShowPassword((prev) => !prev)
    }

    const clearFields = () => {
        setEmail('')
        setPassword('')
    }

    const handleLogin = async () => {
        clearFields()
        let emailValidationResult = checkEmailValidation(email)
        let passwordValidationResult = checkPasswordValidation(password)

        if (emailValidationResult && passwordValidationResult) {
            let user: User = {
                email: email,
                password: password
            }
            await authContext.signIn(user)
        }
        setEmailError('Invalid email format')
        setPasswordError("Length shouldn't be less than 8 symbols")
    }
    return (
        <Layout backgroundColor='#A259FF' justifyContent='center'>
            <BackDrop
                width={350}
                height={500}
                alignItems="flex-start"
                backgroundColor="#F6F5F5"
                borderRadius={16}>
                <View style={styles.container}>
                    <BaseText
                        fontSize={28}
                        weight="semiBold"
                        alignSelf="center"
                        text="Log In"
                        color="#2D0C57"
                    />
                    <BaseText
                        marginTop={10}
                        fontSize={18}
                        weight="normal"
                        text="Email"
                        color="#2D0C57"
                    />
                    <CustomTextInput
                        alignSelf="center"
                        width={300}
                        height={50}
                        value={email}
                        placeholder="Email"
                        borderRadius={16}
                        onChangeText={(value) => setEmail(value)}
                        backgroundColor="#ffffff" />
                    {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
                    <BaseText
                        marginTop={10}
                        fontSize={18}
                        weight="normal"
                        text="Password"
                        color="#2D0C57"
                    />
                    <View>
                        <CustomTextInput
                            alignSelf="center"
                            width={300}
                            height={50}
                            secureTextEntry={showPassword}
                            value={password}
                            placeholder="Password"
                            borderRadius={16}
                            onChangeText={(value) => setPassword(value)}
                            backgroundColor="#FFFFFF" />
                        <Pressable style={styles.showButton}
                        onPress={handleShowPassword}>
                            <BaseText
                                text={showPassword ? 'Show' : 'Hide'}
                                fontSize={14}
                                weight="normal"
                                color="#2D0C57"
                            />
                        </Pressable>
                    </View>

                    {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
                    <CustomButton
                        onPress={handleLogin}
                        marginTop={10}
                        width={300}
                        height={50}
                        alignSelf="center"
                        borderRadius={16}
                        backgroundColor="#0BCE83"
                    >
                        <BaseText
                            fontSize={18}
                            alignSelf="center"
                            weight="semiBold"
                            text="Log In"
                            color="#FFFFFF"
                        />
                    </CustomButton>
                    <View style={styles.linkContainer}>
                        <BaseText
                            fontSize={16}
                            marginTop={10}
                            weight="normal"
                            alignSelf="center"
                            text="Not a member yet? "
                            color="#2D0C57"
                        />
                        <Pressable onPress={handleNavToSignUp}>
                            <BaseText
                                fontSize={16}
                                marginTop={10}
                                textStyles={{ textDecorationLine: 'underline' }}
                                weight="normal"
                                alignSelf="center"
                                text="Sign Up"
                                color="#2D0C57" />
                        </Pressable>
                    </View>
                </View>
            </BackDrop>

        </Layout>
    )
}

const styles = StyleSheet.create({
    container:
    {
        alignSelf: 'center'
    },
    linkContainer:
    {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    errorText:
    {
        color: 'red',
        fontSize: 14,
    },
    showButton:
    {
        position: 'absolute',
        right: 20,
        bottom: 15
    }
})