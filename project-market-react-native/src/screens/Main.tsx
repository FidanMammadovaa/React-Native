import { StyleSheet } from "react-native";
import LogoIcon from "../icons/LogoIcon";
import BackDrop from "../containers/BackDrop";
import BoxIcon from "../icons/BoxIcon";
import { BaseText } from "../components/Unknown/DesignSystem";
import CustomButton from "../components/Unknown/CustomButton";
import Layout from "../components/Layouts/Layout";
import { useAuth } from "../context/AuthContext";

interface MainProps {
    route?: any;
    navigation?: any;
}


export default function Main({ route, navigation }: MainProps) {

    const authContext = useAuth()
    const userToken = authContext.userToken
    const handleNavigateSignUp = () => {
        if (userToken) {
            navigation.navigate('Categories')
        }
        else {
            navigation.navigate('Sign Up')
        }

    }
    return (
        <Layout backgroundColor='#A259FF'>
            <LogoIcon />
            <BackDrop
                height={520}
                backgroundColor="#F6F5F5"
                borderRadius={8}
            >
                <BoxIcon />
                <BaseText
                    text="Non-Contact"
                    marginTop={10}
                    fontSize={34}
                    color="#2D0C57"
                    weight="semiBold700" />
                <BaseText
                    text="Deliveries"
                    fontSize={34}
                    color="#2D0C57"
                    weight="semiBold700" />
                <BaseText
                    marginTop={10}
                    text="When placing an order, select the option"
                    fontSize={18}
                    alignSelf="center"
                    numberOfLines={1}
                    marginHorizontal={30}
                    color="#9586A8"
                    weight="normal" />
                <BaseText
                    text="“Contactless delivery” and the courier will leave"
                    fontSize={18}
                    alignSelf="center"
                    color="#9586A8"
                    weight="normal" />
                <BaseText
                    text="your order at the door."
                    fontSize={18}
                    alignSelf="center"
                    color="#9586A8"
                    weight="normal" />
                <CustomButton
                    onPress={handleNavigateSignUp}
                    width={374}
                    marginTop={40}
                    height={56}
                    backgroundColor="#0BCE83"
                    borderRadius={8}
                >
                    <BaseText
                        text="ORDER NOW"
                        fontSize={16}
                        alignSelf="center"
                        color="#FFFFFF"
                        weight="semiBold" />
                </CustomButton>
                <CustomButton
                    onPress={() => { }}
                    width={64}
                    height={18}
                    marginTop={20}>
                    <BaseText
                        text="DISMISS"
                        fontSize={16}
                        alignSelf="center"
                        color="#9586A8"
                        weight="semiBold" />
                </CustomButton>
            </BackDrop>

        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
});
