import { StyleSheet, View, Text, Pressable } from "react-native";

export default function Header({ pageName, navigation }) {

    const handleNavigation = (pageName) => {
        navigation.navigate(pageName);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => handleNavigation('Home')}>
                    <Text style={styles.smallTextGreen} >X</Text>
                </Pressable>
                <Text style={styles.boldTextMarket}>{pageName}</Text>
                <Pressable onPress={() => handleNavigation(pageName === 'Log In' ? 'Sign Up' : 'Log In')}>
                    <Text style={styles.smallTextGreen}>{pageName === 'Log In' ? 'Sign Up' : 'Log In'}</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    smallTextGreen: {
        fontSize: 16,
        fontWeight: '500',
        color: '#5DB075',
    },
    boldTextMarket: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '600',
        flex: 1,
    },
});
