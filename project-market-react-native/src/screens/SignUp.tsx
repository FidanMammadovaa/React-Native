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
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        repeat: '',
    });


    const [errors, setErrors] = useState({
        emailError: '',
        passwordError: '',
        repeatPasswordError: ''
    })

    const [showPassword, setShowPassword] = useState(true)
    const [showRepeatPassword, setShowRepeatPassword] = useState(true)


    const clearForm = () => {
        setUserData({ email: '', password: '', repeat: '' });
        setErrors({ emailError: '', passwordError: '', repeatPasswordError: '' });
    };

    const handleSignUp = async () => {
        clearForm()

        let emailValidationResult = checkEmailValidation(userData.email);
        let passwordValidationResult = checkPasswordValidation(userData.password);
        let repeatPasswordValidationResult = checkPasswordValidation(userData.repeat)

        if (checkPasswordsMatch(userData.password, userData.repeat)) {
            if (emailValidationResult && passwordValidationResult) {
                let user: User = {
                    email: userData.email,
                    password: userData.password
                }
                await authContext.fetchSignUpUser(user)
                return;
            }
            else {

                if (!emailValidationResult) {
                    setErrors((prev) => ({ ...prev, emailError: 'Invalid email format' }));
                }

                if (!passwordValidationResult) {
                    setErrors((prev) => ({ ...prev, passwordError: "Length shouldn't be less than 8 symbols" }));
                }

                if (!repeatPasswordValidationResult) {
                    setErrors((prev) => ({ ...prev, repeatPasswordError: "Length shouldn't be less than 8 symbols" }));

                }
            }
        }
        else {
            setErrors((prev) => ({ ...prev, passwordError: "Passwords must match" }));
            setErrors((prev) => ({ ...prev, repeatPasswordError: "Passwords must match" }));
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

    const handleInputChange = (field: string, value: string) => {
        setUserData((prev) => ({ ...prev, [field]: value }));
    };

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
                        value={userData.email}
                        onChangeText={(value) => handleInputChange('email', value)}
                        height={50}
                        placeholder="Email"
                        borderRadius={16}
                        backgroundColor="#ffffff" />
                    {errors.emailError ? <Text style={styles.errorText}>{errors.emailError}</Text> : null}
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
                            value={userData.password}
                            onChangeText={(value) => handleInputChange('password', value)}
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
                    {errors.passwordError ? <Text style={styles.errorText}>{errors.passwordError}</Text> : null}
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
                            value={userData.repeat}
                            onChangeText={(value) => handleInputChange('repeat', value)}
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
                    {errors.repeatPasswordError ? <Text style={styles.errorText}>{errors.repeatPasswordError}</Text> : null}
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