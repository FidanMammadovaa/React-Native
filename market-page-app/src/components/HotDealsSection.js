import { StyleSheet, View, Text } from "react-native";
import DescriptionContainer from "./DescriptionContainer";


export default function HotDealsSection() {
    let descriptionArray = [
        {
            image: 'https://static.tvtropes.org/pmwiki/pub/images/john_marston___red_dead_redemption_2.jpg',
            name: 'John Marston',
            price: '$19.99',
        },
        {
            image: 'https://static.tvtropes.org/pmwiki/pub/images/arthur_morgan___red_dead_redemption_2.jpg',
            name: 'Arthur Morgan',
            price: '$19.99',
        },
        {
            image: 'https://static.tvtropes.org/pmwiki/pub/images/charles_smith___red_dead_redemption_2.jpg',
            name: 'Charles Smith',
            price: '$19.99',
        },
        {
            image: 'https://static.wikia.nocookie.net/villains/images/1/1b/Sadie_official_art.jpg/revision/latest?cb=20220315205105',
            name: 'Sadie Adler',
            price: '$19.99',
        }
    ];
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hot deals</Text>
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
