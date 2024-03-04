import * as React from "react"
import { StyleProp, ViewStyle } from "react-native";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg"

interface SearchIconProps {
    width?: number;
    height?: number;
    style?: StyleProp<ViewStyle>;

}

const SearchIcon = ({ width, height, style }: SearchIconProps) => (
    <Svg
        // xmlns="http://www.w3.org/2000/svg"
        width={width ? width : 24}
        height={height ? height : 24}
        style={style}
        fill="none"
    >
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" fillOpacity={0} d="M0 0h24v24H0z" />
            </ClipPath>
        </Defs>
        <Path fill="none" d="M0 0h24v24H0z" />
        <G
            stroke="#000"
            strokeLinejoin="round"
            strokeWidth={1.5}
            clipPath="url(#a)"
        >
            <Path d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z" />
            <Path strokeLinecap="round" d="m21 21-4.35-4.35" />
        </G>
    </Svg>
)
export default SearchIcon
