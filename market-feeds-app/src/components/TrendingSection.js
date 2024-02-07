import { StyleSheet, View, Text } from "react-native";
import DescriptionContainer from "./DescriptionContainer";

export default function TrendingSection() {

    let descriptionArray = [
        {
            image: 'https://static.tvtropes.org/pmwiki/pub/images/dutch_van_der_linde___red_dead_redemption_2.jpg',
            name: 'Dutch van der Linde',
            biography: 'Dutch was born in 1855 to a woman of English descent named Greta and a father of Dutch ancestry somewhere near Philadelphia.',
            price: '$19.99',
        },
        {
            image: 'https://static.tvtropes.org/pmwiki/pub/images/javier_escuella___red_dead_redemption_2.jpg',
            name: 'Javier Escuella',
            biography: "Javier Escuella was born in Nuevo Paraíso, Mexico. Javier's father was a drunkard who worked as a laborer on land owned by Allende's uncle.",
            price: '$19.99',
        },
        {
            image: 'https://static.tvtropes.org/pmwiki/pub/images/micah_bell___red_dead_redemption_2.jpg',
            name: 'Micah Bell',
            biography: 'Micah Bell III was born circa 1860 to Micah Bell Jr., a ruthless petty outlaw.',
            price: '$19.99',
        },
        {
            image: 'https://static.wikia.nocookie.net/p__/images/3/3f/Bill_Williamson2.jpg/revision/latest?cb=20210604144449&path-prefix=protagonist',
            name: 'Bill Williamson',
            biography: 'Bill Williamson was born Marion Williamson in 1866. Embarrassed by his first name, which was supposedly a "family name," he would later adopt the name "Bill" after his surname.',
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
        paddingTop: 50,
    },
    title:
    {
        fontSize: 24,
        fontWeight: '500',
    }
});
