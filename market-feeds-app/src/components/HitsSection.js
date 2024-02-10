import { StyleSheet, View, Text } from "react-native";
import DescriptionContainer from "./DescriptionContainer";


export default function HitsSection() {
    let descriptionArray = [
        {
            id: 1,
            image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1686849472-91tGH-GCuiL.jpg?crop=1xw:1xh;center,top&resize=980:*',
            name: 'Flash',
            biography: "Originating as a forensic chemist, Barry accidentally gains superpowers following a lightning strike in his laboratory. Like other heroes who go by The Flash, Barry is a 'speedster', with powers that derive mainly from his superhuman speed.",
            price: '$19.99',
        },
        {
            id: 2,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrDeRQahihbHPAPS8yj43I-2C3wR9tThhvgvICs4u_iIs6vxIjiENSLiPd96JVCIYzH64&usqp=CAU',
            name: 'Wonder Woman',
            biography: "Her original backstory says she was formed out of clay by her mother, Hippolyta, and had life bestowed upon her by the Greek gods — making her the only Amazon not conceived by a man. She grows up free of men on Paradise Island where the Amazons teach her warrior skills as well as lessons of love and peace.",
            price: '$19.99',
        },
        {
            id: 3,
            image: 'https://i.ebayimg.com/images/g/CF0AAOSwGAJghkLH/s-l1200.webp',
            name: 'Batman',
            biography: "Batman's origin story features him swearing vengeance against criminals after witnessing the murder of his parents Thomas and Martha as a child, a vendetta tempered with the ideal of justice. He trains himself physically and intellectually, crafts a bat-inspired persona, and monitors the Gotham streets at night.",
            price: '$19.99',
        },
        {
            id: 4,
            image: 'https://m.media-amazon.com/images/I/81Z+wNgdx6L._AC_UF1000,1000_QL80_.jpg',
            name: 'Superman',
            biography: "Superman was born on the fictional planet Krypton with the birth name of Kal-El. As a baby, his parents sent him to Earth in a small spaceship shortly before Krypton was destroyed in a natural cataclysm. His ship landed in the American countryside near the fictional town of Smallville.",
            price: '$19.99',
        },

    ];
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Popular</Text>
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
