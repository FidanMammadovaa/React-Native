import { View, Pressable, StyleSheet, Text } from "react-native";
import Layout from "../components/Layouts/Layout";
import BackDrop from "../containers/BackDrop";
import { BaseText } from "../components/Unknown/DesignSystem";
import CustomTextInput from "../components/Unknown/CustomTextInput";
import CustomButton from "../components/Unknown/CustomButton";
import { useState } from "react";
import { User, useAuth } from "../context/AuthContext";
import { checkEmailValidation, checkPasswordValidation } from "../validation";

interface LogInProps {
    route?: any;
    navigation?: any;
}

export default function LogIn({ route, navigation }: LogInProps) {

    const authContext = useAuth()
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        emailError: '',
        passwordError: '',
    })

    const [showPassword, setShowPassword] = useState(true)


    const handleNavToSignUp = () => {
        navigation.navigate('Sign Up')
    }

    const handleShowPassword = () => {
        setShowPassword((prev) => !prev)
    }

    const clearForm = () => {
        setUserData({ email: '', password: '', });
        setErrors({ emailError: '', passwordError: '' });
    };

    const handleInputChange = (field: string, value: string) => {
        setUserData((prev) => ({ ...prev, [field]: value }));
    };

    const handleLogin = async () => {
        clearForm()
        let emailValidationResult = checkEmailValidation(userData.email)
        let passwordValidationResult = checkPasswordValidation(userData.password)

        if (emailValidationResult && passwordValidationResult) {
            let user: User = {
                email: userData.email,
                password: userData.password
            }
            await authContext.fetchLoginUser(user)
        }
        else {

            if (!emailValidationResult) {
                setErrors((prev) => ({ ...prev, emailError: 'Invalid email format' }));
            }

            if (!passwordValidationResult) {
                setErrors((prev) => ({ ...prev, passwordError: "Length shouldn't be less than 8 symbols" }));
            }
        }
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
                        value={userData.email}
                        placeholder="Email"
                        borderRadius={16}
                        onChangeText={(value) => handleInputChange('email', value)}
                        backgroundColor="#ffffff" />
                    {errors.emailError ? <Text style={styles.errorText}>{errors.emailError}</Text> : null}
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
                            value={userData.password}
                            placeholder="Password"
                            borderRadius={16}
                            onChangeText={(value) => handleInputChange('password', value)}
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

                    {errors.passwordError ? <Text style={styles.errorText}>{errors.passwordError}</Text> : null}
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