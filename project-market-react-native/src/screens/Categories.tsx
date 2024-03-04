import { ScrollView } from "react-native";
import CategoriesContainer from "../containers/CategoriesContainer";
import SearchBar from "../components/SearchBar";

interface CategoriesProps {
    route: any;
    navigation: any;
};

export default function Categories({ route, navigation }: CategoriesProps) {

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SearchBar/>
            <CategoriesContainer navigation={navigation}/>
        </ScrollView>
    )
}