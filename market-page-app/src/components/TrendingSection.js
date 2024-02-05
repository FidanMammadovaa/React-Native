import { StyleSheet, View, Text } from "react-native";
import DescriptionContainer from "./DescriptionContainer";

export default function TrendingSection() {

    let descriptionArray = [
        {
            image: 'https://static.tvtropes.org/pmwiki/pub/images/dutch_van_der_linde___red_dead_redemption_2.jpg',
            name: 'Dutch van der Linde',
            price: '$19.99',
        },
        {
            image: 'https://static.tvtropes.org/pmwiki/pub/images/javier_escuella___red_dead_redemption_2.jpg',
            name: 'Javier Escuella',
            price: '$19.99',
        },
        {
            image: 'https://static.tvtropes.org/pmwiki/pub/images/micah_bell___red_dead_redemption_2.jpg',
            name: 'Micah Bell',
            price: '$19.99',
        },
        {
            image: 'https://static.wikia.nocookie.net/p__/images/3/3f/Bill_Williamson2.jpg/revision/latest?cb=20210604144449&path-prefix=protagonist',
            name: 'Bill Williamson',
            price: '$19.99',
        },
    ];
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Trending</Text>
            <DescriptionContainer descriptions={descriptionArray}/>
        </View>
    )
}



const styles = StyleSheet.create({
    container:
    {
        paddingTop: 50
    },
    title:
    {
        fontSize: 24,
        fontWeight: '500',
    }
});
