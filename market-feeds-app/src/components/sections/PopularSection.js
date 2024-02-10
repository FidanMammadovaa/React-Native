import { StyleSheet, View, Text } from "react-native";
import DescriptionContainer from "../../containers/DescriptionContainer";


export default function PopularSection() {
    let descriptionArray = [
        {
            id: 1,
            image: 'https://m.media-amazon.com/images/I/71kfh-Z88wL._AC_UF1000,1000_QL80_.jpg',
            name: 'Thor',
            biography: "Thor was born to Odin, the king of Asgard, and Gaea, the Earth goddess. He was then raised by Odin's wife, Frigga, believing her to be his mother.",
            price: '$19.99',
        },
        {
            id: 2,
            image: 'https://ew.com/thmb/cfI3sDbVBeAX3kItAxkBzPyWHg0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/CAPASOL2022001_DC11-46258561f5da441b97bc3b476e4efc5d.jpg',
            name: 'Captain America',
            biography: "Steve Rogers was a would-be U.S. Army enlistee rejected by recruiters because of his small size. He volunteers to receive a top-secret serum and transforms into a “super-soldier.” Dubbed Captain America and clad in a red, white, and blue costume with a matching stars-and-stripes shield, Rogers joins the army.",
            price: '$19.99',
        },
        {
            id: 3,
            image: 'https://cdn.marvel.com/u/prod/marvel/i/mg/6/40/4bc5f0900856c/portrait_uncanny.jpg',
            name: 'Iron Man',
            biography: "Tony Stark is the wealthy son of industrialist and weapons manufacturer Howard Stark and his wife, Maria. Tony grew up a genius with a brilliant mind for technology and inventions and, naturally, followed in his father's footsteps, inheriting Stark Industries upon his parents' untimely death.",
            price: '$19.99',
        },
        {
            id: 4,
            image: 'https://cdn.marvel.com/u/prod/marvel/i/mg/6/d0/648735ae5b54e/clean.jpg',
            name: 'Hulk',
            biography: "The Incredible Hulk's alter ego is nuclear scientist Robert Bruce Banner, inventor of the gamma bomb, who absorbed a vast quantity of gamma rays after risking his life to save a teenager. The Incredible Hulk embodies the darkest, angriest, and most antisocial aspects of Banner's personality.",
            price: '$19.99',
        },

    ];
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Popular</Text>
            <DescriptionContainer descriptions={descriptionArray} />
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
