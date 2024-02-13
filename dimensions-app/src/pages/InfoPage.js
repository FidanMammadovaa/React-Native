import { Alert, Text, StyleSheet, Pressable, View, Platform, useWindowDimensions, Linking } from "react-native";


export default function InfoPage() {
    const { width, height } = useWindowDimensions();

    const telUrl = 'tel:991'
    const handleShowInfoButtonPress = () => {
        Alert.alert('Device Info',
            `Operation system: ${Platform.OS}\nModel: ${Platform.constants.Model}\nWidth: ${width.toFixed(0)}\nHeight: ${height.toFixed(0)}`,
            [
                {

                    text: 'Ok',
                }

            ])
    }

    const handleCallButtonPress = () =>
    {
        Linking.openURL(telUrl)
    }


    return (
        <View style={styles.container}>
            <Pressable style={styles.buttonStyle} onPress={handleShowInfoButtonPress}>
                <Text style={styles.buttonTextStyle}>Show device info</Text>
            </Pressable>
            <Pressable style={styles.buttonStyle} onPress={handleCallButtonPress}>
                <Text style={styles.buttonTextStyle}>Call 911</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonStyle:
    {
        width: 343,
        height: 51,
        backgroundColor: '#5DB075',
        justifyContent: 'center',
        borderRadius: 100,
        marginVertical: 10,
    },
    buttonTextStyle:
    {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        alignSelf: 'center'
    },
  });