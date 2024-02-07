import { StyleSheet, View, Image, Text, ImageBackground, ScrollView } from 'react-native';

export default function FeedContainer({ feedsArray }) {
    let backgroundImage = { uri: 'https://c4.wallpaperflare.com/wallpaper/628/16/842/firewatch-video-games-hd-wallpaper-preview.jpg' }
    let containerImage = { uri: 'https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg?t=1695140956' }
    return (
        <ScrollView>
            <View style={styles.container}>
                <ImageBackground source={backgroundImage} style={styles.imgBackgroundStyle}>
                    {feedsArray.map((feed, index) => (
                        <View key={index} style={styles.feedItem}>
                            {feed.image && <Image source={{ uri: feed.image }} style={styles.imgStyle} />}
                            <View style={styles.textContainer}>
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
                    ))}
                </ImageBackground>
                <Image source={containerImage} style={styles.containerImage} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
    },
    imgBackgroundStyle: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
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
        marginRight: 10,
    },
    feedItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
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
