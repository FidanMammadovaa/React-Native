import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface BackIconProps {
  width?: number;
  height?: number
}

const BackIcon = ({ width, height }: BackIconProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={width ? width : 24}
    height={height ? height : 24}
    fill="none"
  >
    <Path
      stroke="#2D0C57"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.75 12.753-6-6 6-6"
    />
  </Svg>
)
export default BackIcon
