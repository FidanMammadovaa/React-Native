import * as React from "react"
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg"

interface HomeIconProps {
    width?: number;
    height?: number;
    fill?: string;
}

const HomeIcon = ({ width, height, fill }: HomeIconProps) => {

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
                <Path d="m12 2 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9l9-7Z" />
                <Path strokeLinecap="round" d="M9 22V12h6v10" />
            </G>
        </Svg>
    )
}
export default HomeIcon
