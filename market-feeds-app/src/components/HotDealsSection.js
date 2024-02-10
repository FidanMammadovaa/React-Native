import { StyleSheet, View, Text } from "react-native";
import DescriptionContainer from "./DescriptionContainer";


export default function HotDealsSection() {
    let descriptionArray = [
        {
            id: 1,
            image: 'https://static.tvtropes.org/pmwiki/pub/images/john_marston___red_dead_redemption_2.jpg',
            name: 'John Marston',
            biography: 'John Marston was born in 1873. His father was an illiterate Scottish immigrant who was born on the boat to New York.',
            price: '$19.99',
        },
        {
            id: 2,
            image: 'https://static.tvtropes.org/pmwiki/pub/images/arthur_morgan___red_dead_redemption_2.jpg',
            name: 'Arthur Morgan',
            biography: 'Arthur Morgan was born circa 1863 to Beatrice and Lyle Morgan in the northern United States.',
            price: '$19.99',
        },
        {
            id: 3,
            image: 'https://static.tvtropes.org/pmwiki/pub/images/charles_smith___red_dead_redemption_2.jpg',
            name: 'Charles Smith',
            biography: 'Born to an African American father and a Native American mother, Charles Smith became one of the most recent additions to the Van der Linde gang',
            price: '$19.99',
        },
        {
            id: 4,
            image: 'https://static.wikia.nocookie.net/villains/images/1/1b/Sadie_official_art.jpg/revision/latest?cb=20220315205105',
            name: 'Sadie Adler',
            biography: 'Sadie grew up in a harsh environment and learned to hunt animals and ride horses in her youth. In September 1896, she became married to Jake Adler.',
            price: '$19.99',
        },
        {
            id: 5,
            image: 'https://static.wikia.nocookie.net/villains/images/1/1b/Sadie_official_art.jpg/revision/latest?cb=20220315205105',
            name: 'Sadie Adler',
            biography: 'Sadie grew up in a harsh environment and learned to hunt animals and ride horses in her youth. In September 1896, she became married to Jake Adler.',
            price: '$19.99',
        },
        {
            id: 6,
            image: 'https://static.wikia.nocookie.net/rdr2community/images/a/ac/Reverend_Swanson_-_Red_Dead_Redemption_2.jpg/revision/latest?cb=20181001134614',
            name: 'Reverend Swanson',
            biography: 'Swanson worked as a clergyman in the past, but as he indulged in earthly pleasures such as alcohol and sex, he slowly lost his job and his family, as well as his faith.',
            price: '$19.99',
        },

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
