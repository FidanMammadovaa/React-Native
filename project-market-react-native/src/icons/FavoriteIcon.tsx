import * as React from "react"
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg"

interface FavoriteIconProps {
    width?: number;
    height?: number;
}

const FavoriteIcon = ({ width, height }: FavoriteIconProps) => {
    return (
        <Svg
            width={width ? width: 20}
            height={height ? height: 20}
            fill="none"
        >
            <Defs>
                <ClipPath id="a">
                    <Path fill="#fff" fillOpacity={0} d="M0 0h20v20H0z" />
                </ClipPath>
            </Defs>
            <Path fill="none" d="M0 0h20v20H0z" />
            <G clipPath="url(#a)">
                <Path
                    stroke="#9586A8"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15.88 2.848a4.583 4.583 0 0 0-4.997.994L10 4.725l-.883-.883a4.585 4.585 0 0 0-6.484 6.483l.884.883L10 17.692l6.483-6.484.884-.883a4.585 4.585 0 0 0-1.488-7.477Z"
                />
            </G>
        </Svg>
    )
}

export default FavoriteIcon
