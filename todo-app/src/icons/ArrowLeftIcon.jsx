import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ArrowLeftIcon = props => {
  const { width, height, color } = props

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 7.778}
      height={height || 12.728}
      fill="none"
      {...props}
    >
      <Path
        fill={color || '#4A3780'}
        d="m2.828 6.364 4.95 4.95-1.414 1.414L0 6.364 6.364 0l1.414 1.414-4.95 4.95Z"
      />
    </Svg>
  )
}
export default ArrowLeftIcon
