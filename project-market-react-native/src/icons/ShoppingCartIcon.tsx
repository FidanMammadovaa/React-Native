import * as React from "react"
import * as Svg from 'react-native-svg';


interface ShoppingCartIconProps {
  focused?: boolean,
  color?: string, 
  size?: number,
  width?: number;
  height?: number;
}

const ShoppingCartIcon = ({ width, height }: ShoppingCartIconProps) => {
  return (

    <Svg.Svg
      // xmlns="http://www.w3.org/2000/svg"
      width={width ? width: 24}
      height={height? height: 24}
      fill="none"
    >
      <Svg.Defs>
        <Svg.ClipPath id="a">
          <Svg.Path fill="#fff" fillOpacity={0} d="M0 0h24v24H0z" />
        </Svg.ClipPath>
      </Svg.Defs>
      <Svg.Path fill="none" d="M0 0h24v24H0z" />
      <Svg.G
        stroke="#9586A8"
        strokeLinejoin="round"
        strokeWidth={1.5}
        clipPath="url(#a)"
      >
        <Svg.Path d="M22.286 5 20.57 15.286H6.857L5.143 5h17.143ZM8.571 21a1.143 1.143 0 1 1 0-2.286 1.143 1.143 0 0 1 0 2.286ZM18.857 21a1.143 1.143 0 1 1 0-2.286 1.143 1.143 0 0 1 0 2.286Z" />
        <Svg.Path strokeLinecap="round" d="M5.143 5H1.714" />
      </Svg.G>
    </Svg.Svg>
  )
}
export default ShoppingCartIcon
