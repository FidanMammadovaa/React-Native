import React, { useEffect, useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import { BaseText } from "../components/Unknown/DesignSystem";
import CustomButton from "../components/Unknown/CustomButton";
import CreditCardIcon from "../icons/CreditCardIcon";
import HomeIcon from "../icons/HomeIcon";
import WalkingIcon from "../icons/WalkingIcon";
import BikeIcon from "../icons/BikeIcon";
import DroneIcon from "../icons/DroneIcon";
import CheckIcon from "../icons/CheckIcon";
interface CheckoutProps {
  navigation?: any;
  route?: any;
}

export default function Checkout({ navigation, route }: CheckoutProps) {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => 
  {
    setIsEnabled((prev) => !prev);
  }
  return (
    <View style={styles.containerStyle}>
      <View style={styles.rowSpaceContainer}>
        <BaseText
          text='Payment method'
          fontSize={22}
          weight="semiBold700"
          color="#2D0C57" />
        <CustomButton
          width={68}
          height={18}
          onPress={() => { }}
        >
          <BaseText
            text='Change'
            color="#7203FF"
            weight="semiBold"
            fontSize={16} />
        </CustomButton>
      </View>
      <View style={styles.rowContainer}>
        <CreditCardIcon />
        <BaseText
          textStyles={{ paddingLeft: 16 }}
          text='**** **** **** 4747'
          color="#9586A8"
          weight="normal"
          fontSize={17} />
      </View>
      <View style={styles.rowSpaceContainer}>
        <BaseText
          text='Delivery address'
          fontSize={22}
          weight="semiBold700"
          color="#2D0C57" />
        <CustomButton
          width={68}
          height={18}
          onPress={() => { }}
        >
          <BaseText
            text='Change'
            color="#7203FF"
            weight="semiBold"
            fontSize={16} />
        </CustomButton>
      </View>

      <View style={styles.rowContainer}>
        <HomeIcon />
        <View>
          <BaseText
            textStyles={{ paddingLeft: 16, top: -22 }}
            text={`
Alexandra Smith
Cesu 31 k-2 5.st, SIA Chili
Riga
LV–1012
Latvia`}
            weight="normal"
            fontSize={17}
            color="#9586A8" />
        </View>
      </View>
      <View style={styles.rowSpaceContainer}>
        <BaseText
          text='Delivery options'
          fontSize={22}
          weight="semiBold700"
          color="#2D0C57" />
        <CustomButton
          width={68}
          height={18}
          onPress={() => { }}
        >
          <BaseText
            text='Change'
            color="#7203FF"
            weight="semiBold"
            fontSize={16} />
        </CustomButton>
      </View>

      <View style={styles.rowContainer}>
        <WalkingIcon />
        <BaseText
          textStyles={{ paddingLeft: 16 }}
          text="I'll pick it up myself"
          color="#9586A8"
          weight="normal"
          fontSize={17} />
      </View>
      <View style={styles.rowContainer}>
        <BikeIcon />
        <BaseText
          textStyles={{ paddingLeft: 16 }}
          text="By courier"
          color="#9586A8"
          weight="normal"
          fontSize={17} />
      </View>
      <View style={styles.rowContainer}>
        <DroneIcon />
        <BaseText
          textStyles={{ paddingLeft: 16 }}
          text="By Drone"
          color="#7203FF"
          weight="normal"
          fontSize={17} />
        <CheckIcon style={{ position: "absolute", right: 16 }} />
      </View>

      <View style={styles.rowSpaceContainer}>
        <BaseText
          text='Non-contact-delivery'
          fontSize={22}
          weight="semiBold700"
          color="#2D0C57" />
          <Switch
            trackColor={{false: '#9586A8', true: '#E2CBFF'}}
            thumbColor={'#ffffff'}
            onValueChange={toggleSwitch}
            value={isEnabled}
            />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle:
  {
    justifyContent: 'space-between',
    padding: 16
  },
  rowSpaceContainer:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  rowContainer:
  {
    flexDirection: 'row',
    marginBottom: 10,
  }
})