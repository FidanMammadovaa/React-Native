import React from 'react';
import { StyleSheet, View, Image, Text, FlatList } from 'react-native';

export default function ContentContainer({ contentArray }) {

    const ContentItem = ({ content }) => (
        <View style={styles.contentItemStyle}>
            {content.image && <Image source={{ uri: content.image }} style={styles.imgStyle} />}
            <Text style={styles.titleStyle}>{content.title}</Text>
            <Text style={styles.infoStyle} >{content.info}</Text>
            <Text style={styles.publishTimeStyle}>{content.publishTime}</Text>
        </View>
    );

    return (
        <FlatList
            contentContainerStyle={styles.container}
            data={contentArray}
            renderItem={({ item }) => <ContentItem content={item} />}
            keyExtractor={(item) => item.id} 
        />
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    contentItemStyle: {
        marginHorizontal: 20,
        height: 400
    },
    imgStyle: {
        width: 343,
        height: 200,
        borderRadius: 8,
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
    },
});
