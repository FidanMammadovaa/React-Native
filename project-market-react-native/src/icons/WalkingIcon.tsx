import * as React from "react"
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg"


interface WalkingIconProps
{
    width?: number;
    height?: number;
    fill?: string;
}

const WalkingIcon = ({width, height, fill} : WalkingIconProps) => {
    return (
        <Svg
            width={24}
            height={24}
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
                <Path d="M12.868 5.347a1.174 1.174 0 1 1 0-2.347 1.174 1.174 0 0 1 0 2.347ZM15.215 21.778l-.998-2.995a2.348 2.348 0 0 0-.567-.918l-3.13-3.129M7 21.778l3.52-7.042 1.174-5.868M7 14.736l.919-2.757c.165-.495.49-.92.925-1.21l2.85-1.901 3.252 3.252c.178.178.384.326.61.44l2.007 1.002" />
            </G>
        </Svg>
    )
}
export default WalkingIcon
