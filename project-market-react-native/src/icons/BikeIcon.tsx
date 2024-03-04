import * as React from "react"
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg"

interface BikeIconProps {
    width?: number;
    height?: number;
    fill?: string;
}

const BikeIcon = ({ width, height, fill }: BikeIconProps) => {
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
                <Path d="M14.267 6.267a1.133 1.133 0 1 1 0-2.267 1.133 1.133 0 0 1 0 2.267Z" />
                <Path
                    strokeLinecap="round"
                    d="M12 18.733V14.2l-3.4-2.267 3.4-3.4 2.267 2.267 2.266 1.133"
                />
                <Path d="M5.2 21a3.4 3.4 0 1 1 0-6.8 3.4 3.4 0 0 1 0 6.8ZM18.8 21a3.4 3.4 0 1 1 0-6.8 3.4 3.4 0 0 1 0 6.8Z" />
            </G>
        </Svg>
    )

}

export default BikeIcon
