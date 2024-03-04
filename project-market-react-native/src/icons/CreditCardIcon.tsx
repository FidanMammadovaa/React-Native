import * as React from "react"
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg"

interface CreditCardIconProps {
    width?: number;
    height?: number;
    fill?: string;
}

const CreditCardIcon = ({ width, height, fill }: CreditCardIconProps) => {
    return (
        <Svg
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
            <G
                stroke={fill ? fill : "#2D0C57"}
                strokeLinejoin="round"
                strokeWidth={1.5}
                clipPath="url(#a)"
            >
                <Path d="M21 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h18Z" />
                <Path strokeLinecap="round" d="M1 10h22" />
            </G>
        </Svg>
    )
}

export default CreditCardIcon
