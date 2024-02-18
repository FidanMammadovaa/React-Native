import * as React from "react"
import Svg, { Path } from "react-native-svg"
const EventIcon = props => {
    const { width, height, color } = props

    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={width || 20}
            height={height || 20}
            fill="none"
            {...props}
        >
            <Path
                fill={color || '#4A3780'}
                d="M15 2h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4V0h2v2h6V0h2v2ZM2 8v10h16V8H2Zm2 4h5v4H4v-4Z"
            />
        </Svg>
    )
}
export default EventIcon
