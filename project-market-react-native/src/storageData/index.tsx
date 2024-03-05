import AsyncStorage from '@react-native-async-storage/async-storage';

export const setToken = async () => {
    try {
        await AsyncStorage.setItem('userToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
    } catch (error) {
        console.error(error);
    }
}

export const getToken = async () => {
    try {
        const userToken = await AsyncStorage.getItem('userToken');
        return userToken;
    } catch (error) {
        console.error(error);
    }
}

export const removeToken = async () => {
    try {
        await AsyncStorage.removeItem('userToken');
    } catch (error) {
        console.error(error);
    }
}