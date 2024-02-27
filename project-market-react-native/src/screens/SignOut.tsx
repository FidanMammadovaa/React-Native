import { View } from "react-native";
import CustomButton from "../components/Unknown/CustomButton";
import { BaseText } from "../components/Unknown/DesignSystem";
import { useAuth } from "../context/AuthContext";


interface SignOutProps {
    route?: any;
    navigation?: any;
}



export default function SignOut({ route, navigation }: SignOutProps) {
    
    const authContext = useAuth()

    const handleSignOut = async () =>
    {
        await authContext.signOut()
    }
    
    return (
        <View>
            <CustomButton
            onPress={handleSignOut}
                marginTop={10}
                width={300}
                height={50}
                alignSelf="center"
                borderRadius={16}
                backgroundColor="#0BCE83">  
                <BaseText
                weight="semiBold"
                color="#FFFFFF"
                fontSize={18}
                text="Sign Out"/>
            </CustomButton>
        </View>
    )
}