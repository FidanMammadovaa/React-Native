import * as React from "react"
import { StyleProp, ViewStyle } from "react-native";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg"

interface CheckIconProps {
    width?: number;
    height?: number;
    fill?: string;
    style?: StyleProp<ViewStyle>
}


const CheckIcon = ({ width, style, height, fill }: CheckIconProps) => {
    return (

        <Svg
            style={style ? style : {}}
            width={width ? width : 24}
            height={height ? height : 24}
            fill="none"
        >
            <Defs>
                <ClipPath id="a">
                    <Path fill="#fff" fillOpacity={0} d="M0 0h24v24H0z" />
                </ClipPath>
            </Defs>
            <Path fill="none" d="M0 0h24v24H0z" />
            <G clipPath="url(#a)">
                <Path
                    stroke={fill ? fill : "#7203FF"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20 6 9 17l-5-5"
                />
            </G>
        </Svg>
    )

}

export default CheckIcon
