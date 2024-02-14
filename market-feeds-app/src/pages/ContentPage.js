import { ScrollView, StyleSheet, View, Image } from 'react-native';
import SearchBar from '../components/SearchBar';
import ContentContainer from '../containers/ContentContainer';

export default function ContentPage() {

    let contentArray = [
        {
            id: 1,
            image: 'https://s2-vogue.glbimg.com/WqtFY3kCTEljhH0oagldE6Rb7l8=/0x0:1440x1440/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_5dfbcf92c1a84b20a5da5024d398ff2f/internal_photos/bs/2022/U/t/EUmVS4TBSgyaJbRzhoFA/2022-05-15-xhooligan.marsx-280752633-296311942569189-2398214283753865221-n.jpg',
            title: 'New Duo',
            info: 'Silk Sonic is an American musical superduo composed of musicians Bruno Mars and Anderson .Paak. The duo released their debut single, "Leave the Door Open", in March 2021.',
            publishTime: '7m ago',
        },
        {
            id: 2,
            image: 'https://s1.ticketm.net/dam/a/a62/ba0a37d2-f25e-4c4a-ad50-9781b2a0ea62_1621921_RETINA_PORTRAIT_3_2.jpg',
            title: "Today's hits",
            info: 'The band achieved its first commercial success on Myspace as an unsigned act.[6] In late 2002, after OneRepublic played shows throughout the Los Angeles area, several record labels approached the band with interest, but the band signed with Velvet Hammer, an imprint of Columbia Records.',
            publishTime: '7m ago',
        },
        {
            id: 3,
            image: 'https://e.snmc.io/i/600/s/6d04447a51d85034a3f2dd9fb3082a00/11486295/michael-jackson-thriller-cover-art.jpg',
            title: 'Star was born',
            info: 'Michael Joseph Jackson (August 29, 1958 – June 25, 2009) was an American singer, songwriter, dancer, and philanthropist. Known as the "King of Pop", he is regarded as one of the most significant cultural figures of the 20th century. ',
            publishTime: '7m ago',
        },
    ]

    return (
        <ScrollView>
            <SearchBar />
            <ContentContainer contentArray={contentArray} />
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex',
    },

});
