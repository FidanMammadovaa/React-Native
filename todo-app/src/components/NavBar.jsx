import { Pressable, View, Text } from "react-native";
import { StyleSheet } from "react-native";
import Circle from "./Circle";



export default function NavBar({onPress, svgIcon, contentText}) {
    return (
        <View style={styles.container}>
            <Circle onPress={onPress} svgIcon={svgIcon} backgroundColor={'#FFFFFF'} />
            <Text style={styles.contentTextStyle}>{contentText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      marginLeft: 16,
      marginTop: 24,
      color: '#FFFFFF',
      flexDirection: 'row',
      alignItems: 'center', 
      justifyContent: 'flex-start', 
    },
    contentTextStyle: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '600',
      marginLeft: 70, 
    },
  });