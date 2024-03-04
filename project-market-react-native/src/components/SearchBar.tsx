import { Dimensions, StyleSheet, View } from "react-native"
import SearchIcon from "../icons/SearchIcon"
import CustomTextInput from "./Unknown/CustomTextInput"

interface SearchBarProps
{
    value: string;
    onChangeText: (text: string) => void;
}

const width = Dimensions.get('window').width 

export default function SearchBar() {

    return (
        <View style={styles.searchBarStyle}>
            <SearchIcon style={[styles.iconStyle]}/>
            <CustomTextInput
                paddingLeft={30}
                width={width - 50}
                height={48}
                borderRadius={26}
                placeholder="Search"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchBarStyle:
    {
        width: width - 50,
        alignSelf: 'center',
        flexDirection: 'row',
        borderRadius: 26,
        // justifyContent: 'center',
        backgroundColor: "#FFFFFF"
    },
    iconStyle:
    {
        position: 'relative',
        top: 12,
        left: 20
    }
})

