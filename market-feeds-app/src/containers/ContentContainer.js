import { StyleSheet, View, Image, Text, FlatList } from 'react-native';

export default function ContentContainer({ contentArray }) {


    const ContentItem = ({ content }) => (
     <View style={styles.contentItemStyle}>
         {content.image && <Image source={{ uri: content.image }} style={styles.imgStyle} />}
         <Text style={styles.titleStyle}>{content.title}</Text>
         <Text style={styles.infoStyle}>{content.info}</Text>
         <Text style={styles.publishTimeStyle}>{content.publishTime}</Text>
     </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={contentArray}
                renderItem={({ item }) => <ContentItem content={item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10,
    },
    contentItemStyle:
    {
        margin: 10
    },
    imgStyle:
    {
      width: 343,
      height: 240,
      borderRadius: 8
    },
    publishTimeStyle: {
        fontSize: 14,
        color: '#BDBDBD',
    },
    titleStyle: {
        fontWeight: '600',
        fontSize: 16,
    },
    infoStyle: {
        fontSize: 14,
        fontWeight: '400',
        marginTop: 5,
    },
});