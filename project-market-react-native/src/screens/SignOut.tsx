import { View } from "react-native";
import CustomButton from "../components/Unknown/CustomButton";
import { BaseText } from "../components/Unknown/DesignSystem";


interface SignOutProps {
    route?: any;
    navigation?: any;
}

export default function SignOut({ route, navigation }: SignOutProps) {
    return (
        <View>
            <CustomButton
            onPress={() => {}}
                marginTop={10}
                width={300}
                height={50}
                alignSelf="center"
                borderRadius={16}
                backgroundColor="#0BCE83">  
                <BaseText
                weight="semiBold"
                fontSize={18}
                text="Sign Out"/>
            </CustomButton>
        </View>
    )
}