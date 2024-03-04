import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

interface ShoppingCartIconProps {
  focused?: boolean,
  fill?: string,
  size?: number,
  width?: number;
  height?: number;
}

const ShoppingCartIcon = ({ width, height, fill }: ShoppingCartIconProps) => {
  return (
    <Svg
      width={width ? width : 24}
      height={height ? height : 24}
      viewBox="0 0 483.1 483.1"
    >

      <Path
        fill={fill ? fill : "#9586A8"}
        d="m434.55 418.7-27.8-313.3c-.5-6.2-5.7-10.9-12-10.9h-58.6c-.1-52.1-42.5-94.5-94.6-94.5s-94.5 42.4-94.6 94.5h-58.6c-6.2 0-11.4 4.7-12 10.9l-27.8 313.3v1.1c0 34.9 32.1 63.3 71.5 63.3h243c39.4 0 71.5-28.4 71.5-63.3v-1.1zM241.55 24c38.9 0 70.5 31.6 70.6 70.5h-141.2c.1-38.9 31.7-70.5 70.6-70.5zm121.5 435h-243c-26 0-47.2-17.3-47.5-38.8l26.8-301.7h47.6v42.1c0 6.6 5.4 12 12 12s12-5.4 12-12v-42.1h141.2v42.1c0 6.6 5.4 12 12 12s12-5.4 12-12v-42.1h47.6l26.8 301.8c-.3 21.4-21.5 38.7-47.5 38.7z" />
    </Svg>
  )
}

export default ShoppingCartIcon