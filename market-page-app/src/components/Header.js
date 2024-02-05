import { StyleSheet, View, Text } from "react-native";



export default function Header() {

    return (
        <View >
            <View style={styles.header}>
                <Text style={styles.smallTextGreen}>Back</Text>
                <Text style={styles.boldTextMarket}>Market</Text>
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
        fontWeight: '600',
    }
});
