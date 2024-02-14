import { StyleSheet, View, Text, Pressable } from "react-native";



export default function Header({ pageName, navigation }) {

    const handleNavigation = (pageName) => {
        navigation.navigate(pageName)
    }
    return (
        <View >
            <View style={styles.header}>
                <Pressable onPress={() => handleNavigation(pageName === 'Market' ? 'Feed' : 'Market')}>
                    <Text style={styles.smallTextGreen}>Go to {pageName === 'Market' ? 'Feed' : 'Market'}</Text>
                </Pressable>
                <Text style={styles.boldTextMarket}>{pageName}</Text>
                <Text style={styles.smallTextGreen}>Filter</Text>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    smallTextGreen:
    {
        fontSize: 16,
        fontWeight: '500',
        color: '#5DB075',
    },
    boldTextMarket:
    {
        fontSize: 30,
        flex: 1,
        textAlign: 'center',
        fontWeight: '600',
    }
});
