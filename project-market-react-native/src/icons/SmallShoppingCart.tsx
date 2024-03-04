import * as React from "react"
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg"

interface SmallShoppingCartProps {
    width?: number;
    height?: number;
    fill?: string;
}

const SmallShoppingCart = ({ width, height, fill }: SmallShoppingCartProps) => {

    return (
        <Svg
            width={width ? width : 20}
            height={height ? height : 20}
            fill="none"
        >
            <Defs>
                <ClipPath id="a">
                    <Path fill="#fff" fillOpacity={0} d="M0 0h20v20H0z" />
                </ClipPath>
            </Defs>
            <Path fill="none" d="M0 0h20v20H0z" />
            <G
                stroke={fill}
                strokeLinejoin="round"
                strokeWidth={1.5}
                clipPath="url(#a)"
            >
                <Path d="m18.571 4.167-1.428 8.571H5.714L4.286 4.167H18.57ZM7.143 17.5a.952.952 0 1 1 0-1.905.952.952 0 0 1 0 1.905ZM15.714 17.5a.952.952 0 1 1 0-1.905.952.952 0 0 1 0 1.905Z" />
                <Path strokeLinecap="round" d="M4.286 4.167H1.428" />
            </G>
        </Svg>
    )
}
export default SmallShoppingCart
