import { View, Text, StyleSheet, Pressable } from "react-native";
import Layout from "../components/Layouts/Layout";
import BackDrop from "../containers/BackDrop";
import { BaseText } from "../components/Unknown/DesignSystem";
import CustomTextInput from "../components/Unknown/CustomTextInput";
import CustomButton from "../components/Unknown/CustomButton";
import { useState } from "react";
import { checkEmailValidation, checkPasswordValidation, checkPasswordsMatch } from "../validation";
import { User, useAuth } from "../context/AuthContext";

interface SignUpProps {
    route?: any;
    navigation?: any;
}
export default function SignUp({ route, navigation }: SignUpProps) {

    const authContext = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [repeatPasswordError, setRepeatPasswordError] = useState('')

    const [showPassword, setShowPassword] = useState(true)
    const [showRepeatPassword, setShowRepeatPassword] = useState(true)


    const clearFields = () => {
        setEmail('')
        setPassword('')
        setRepeatPassword('')
    }
    const clearErrors = () => {
        setEmailError('')
        setPasswordError('')
        setRepeatPassword('')
    }

    const handleSignUp = async () => {
        clearErrors()
        clearFields()

        let emailValidationResult = checkEmailValidation(email);
        let passwordValidationResult = checkPasswordValidation(password);
        let repeatPasswordValidationResult = checkPasswordValidation(repeatPassword)

        if (checkPasswordsMatch(password, repeatPassword)) {
            if (emailValidationResult && passwordValidationResult) {
                let user: User = {
                    email: email,
                    password: password
                }
                await authContext.fetchSignUpUser(user)
                return;
            }
            else {

                if (!emailValidationResult) {
                    setEmailError('Invalid email format');
                }

                if (!passwordValidationResult) {
                    setPasswordError("Length shouldn't be less than 8 symbols");
                }

                if (!repeatPasswordValidationResult) {
                    setRepeatPasswordError("Length shouldn't be less than 8 symbols");
                }
            }
        }
        else {
            setPasswordError('Passwords must match');
            setRepeatPasswordError('Passwords must match');
        }


    }

    const handleShowPassword = () => {
        setShowPassword((prev) => !prev)
    }

    const handleShowRepeatPassword = () => {
        setShowRepeatPassword((prev) => !prev)
    }

    const handleNavToLogin = () => {
        navigation.navigate('Log In')
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
                        text="Sign Up"
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
                        value={email}
                        onChangeText={(value) => setEmail(value)}
                        height={50}
                        placeholder="Email"
                        borderRadius={16}
                        backgroundColor="#ffffff" />
                    {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
                    <BaseText
                        marginTop={10}
                        fontSize={18}
                        weight="normal"
                        text="Password"
                        color="#2D0C57"
                    />
                    <View >
                        <CustomTextInput
                            alignSelf="center"
                            width={300}
                            height={50}
                            value={password}
                            onChangeText={(value) => setPassword(value)}
                            placeholder="Password"
                            secureTextEntry={showPassword}
                            borderRadius={16}
                            backgroundColor="#FFFFFF" >
                        </CustomTextInput>
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
                    <BaseText
                        marginTop={10}
                        fontSize={18}
                        weight="normal"
                        text="Repeat"
                        color="#2D0C57"
                    />

                    <View>
                        <CustomTextInput
                            alignSelf="center"
                            width={300}
                            height={50}
                            value={repeatPassword}
                            onChangeText={(value) => setRepeatPassword(value)}
                            placeholder="Repeat password"
                            secureTextEntry={showRepeatPassword}
                            borderRadius={16}
                            backgroundColor="#FFFFFF" />
                        <Pressable style={styles.showButton}
                            onPress={handleShowRepeatPassword}>
                            <BaseText
                                text={showRepeatPassword ? 'Show' : 'Hide'}
                                fontSize={14}
                                weight="normal"
                                color="#2D0C57"
                            />
                        </Pressable>
                    </View>
                    {repeatPasswordError ? <Text style={styles.errorText}>{repeatPasswordError}</Text> : null}
                    <CustomButton
                        onPress={handleSignUp}
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
                            text="Sign Up"
                            color="#FFFFFF"
                        />
                    </CustomButton>
                    <View style={styles.linkContainer}>
                        <BaseText
                            fontSize={16}
                            marginTop={10}
                            weight="normal"
                            alignSelf="center"
                            text="Already have an account? "
                            color="#2D0C57"
                        />
                        <Pressable onPress={handleNavToLogin}>
                            <BaseText
                                fontSize={16}
                                marginTop={10}
                                textStyles={{ textDecorationLine: 'underline' }}
                                weight="normal"
                                alignSelf="center"
                                text="Log In"
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