import * as React from "react"
import Svg, { Path } from "react-native-svg"
const CloseIcon = props => {
    const { width, height, color } = props

    return (
        < Svg
            xmlns="http://www.w3.org/2000/svg"
            width={width || 14.782}
            height={height || 14.782}
            fill={color || 'none'}
            {...props}
        >
            <Path
                stroke="#14142B"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1.004 1.004 12.774 12.774m-12.774 0L13.778 1.004"
            />
        </Svg >
    )
}
export default CloseIcon
