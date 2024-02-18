import { View, Text } from "react-native";
import NavBar from "./NavBar";
import { StyleSheet } from "react-native";

export default function Header({onPress, svgIcon, route, height }) {
    const { contentText, titleShown } = route.params;

    return (
        <View style={[styles.container, { height }]}  >
            <NavBar onPress={onPress} svgIcon={svgIcon} contentText={contentText} />
            {titleShown ?
                <Text style={styles.titleStyle}>{route.name}</Text>

                : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#4A3780'
    },
    titleStyle:
    {
        marginVertical: 20,
        alignSelf: 'center',
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 30
    },

});
