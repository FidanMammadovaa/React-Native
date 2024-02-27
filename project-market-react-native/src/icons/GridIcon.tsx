import * as React from "react"
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg"

interface GridIconProps {
    focused?: boolean,
    color?: string, 
    size?: number,
    width?: number;
    height?: number;
}

const GridIcon = ({ width, height }: GridIconProps) => {

    return (
        <Svg
            // xmlns="http://www.w3.org/2000/svg"
            width={width? width: 24}
            height={height? height: 24}
            fill="none"
        >
            <Defs>
                <ClipPath id="a">
                    <Path fill="#fff" fillOpacity={0} d="M0 0h24v24H0z" />
                </ClipPath>
            </Defs>
            <Path fill="none" d="M0 0h24v24H0z" />
            <G
                stroke="#9586A8"
                strokeLinejoin="round"
                strokeWidth={1.5}
                clipPath="url(#a)"
            >
                <Path d="M10 3v7H3V3h7ZM21 3v7h-7V3h7ZM21 14v7h-7v-7h7ZM10 14v7H3v-7h7Z" />
            </G>
        </Svg>
    )
}
export default GridIcon