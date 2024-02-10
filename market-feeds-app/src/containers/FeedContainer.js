import { StyleSheet, View, Image, Text, ImageBackground, FlatList } from 'react-native';

export default function FeedContainer({ feedsArray }) {
    let backgroundImageUrl = { uri: 'https://c4.wallpaperflare.com/wallpaper/628/16/842/firewatch-video-games-hd-wallpaper-preview.jpg' }
    let containerImageUrl = { uri: 'https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg?t=1695140956' }


    const FeedItem = ({ feed }) => (
        <View style={styles.feedItem}>
            {feed.image && <Image source={{ uri: feed.image }} style={styles.imgStyle} />}
            <View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleStyle} numberOfLines={2} ellipsizeMode="tail">
                        {feed.title}
                    </Text>
                    <Text style={styles.publishTime}>{feed.publishTime}</Text>
                </View>
                <Text style={styles.feedContentStyle} numberOfLines={4} ellipsizeMode="tail">
                    {feed.feedContent}
                </Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImageUrl} style={styles.backgroundImage}>
                <FlatList
                    data={feedsArray}
                    renderItem={({ item }) => <FeedItem feed={item} />}
                    keyExtractor={(item) => item.id}
                />
            </ImageBackground>

            <View style={styles.imageContainer}>
                <Image source={containerImageUrl} style={styles.containerImage} />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10,
    },
    imageContainer: {
        alignItems: 'center',
    },
    containerImage: {
        width: 350,
        height: 250,
        borderRadius: 20,
        marginTop: 15,
    },
    imgStyle: {
        width: 200,
        height: 120,
    },
    feedItem: {
        marginBottom: 10,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titleStyle: {
        fontWeight: '600',
        fontSize: 16,
        color: 'white',
    },
    feedContentStyle: {
        fontSize: 14,
        fontWeight: '400',
        marginTop: 5,
        color: 'white',
    },
    publishTime: {
        fontSize: 14,
        color: '#BDBDBD',
    },
});