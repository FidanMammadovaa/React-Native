import * as React from "react"
import * as Svg from 'react-native-svg';
interface UserIconProps {
    focused?: boolean,
    color?: string, 
    size?: number,
    width?: number;
    height?: number;
}


const UserIcon = ({ width, height }: UserIconProps) => {
    return (
        <Svg.Svg
            // xmlns="http://www.w3.org/2000/svg"
            width={width ? width : 24}
            height={height ? height : 24}
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
                <Svg.Path
                    strokeLinecap="round"
                    d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                />
                <Svg.Path d="M12 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
            </Svg.G>
        </Svg.Svg>
    )
}
export default UserIcon
