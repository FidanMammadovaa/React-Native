import * as React from "react"
import Svg, { Path } from "react-native-svg"
const GoalIcon = props => {
    const { width, height, color } = props

    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={width || 22}
            height={height || 18}
            fill="none"
            {...props}
        >
            <Path
                fill={color || '#403100'}
                d="M12 13.938V16h5v2H5v-2h5v-2.062A8 8 0 0 1 3 6V0h16v6a8 8 0 0 1-7 7.938ZM5 2v4a6 6 0 1 0 12 0V2H5ZM0 2h2v4H0V2Zm20 0h2v4h-2V2Z"
            />
        </Svg>
    )
}
export default GoalIcon
