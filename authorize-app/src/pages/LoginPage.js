import { TextInput, Text, Pressable, View, StyleSheet } from "react-native"
import React, { useState } from "react"

export default function LoginPage() {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);

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
                    style={styles.textStyle}
                    placeholder="Email"
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
            <View>
                <Pressable style={styles.logInButtonStyle}>
                    <Text style={styles.logInTextStyle}>
                        Log In
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
        marginVertical: 15
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
        fontWeight: '500',
        color: '#BDBDBD',
    },
    smallTextGreen: {
        fontSize: 16,
        padding: 16,
        fontWeight: '500',
        color: '#5DB075',
    },
    logInButtonStyle:
    {
        width: 343,
        height: 51,
        backgroundColor: '#5DB075',
        justifyContent: 'center',
        borderRadius: 100
    },
    logInTextStyle:
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
