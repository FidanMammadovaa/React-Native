import * as React from "react"
import * as Svg from 'react-native-svg';

import Circle from "../components/Unknown/Circle";

interface BoxIconProps {
    width?: number;
    height?: number;
}


const BoxIcon = ({ width, height }: BoxIconProps) => {
    return (
        <Circle width={104} height={104} backgroundColor='#FFFFFF' borderRadius={50}>
            <Svg.Svg
                // xmlns="http://www.w3.org/2000/svg"
                width={width ? width : 36}
                height={height ? height : 40}
                fill="none"
            >
                <Svg.Path
                    fill="#2D0C57"
                    fillRule="evenodd"
                    d="m17.502 0 6.207 3.593L7.13 13.17.913 9.577 17.502 0Zm16.581 9.577-7.154-4.075-16.58 9.577.946.49 6.207 3.585 6.174-3.56 10.407-6.017ZM18.996 21.353l1.792-1.038 14.349-8.282v18.648L18.996 40V21.353Zm-12.871-.946 2.97 1.527v-4.54l6.93 3.992V39.9L0 30.647V12.133l6.125 3.527v4.747Z"
                />
            </Svg.Svg>
        </Circle>
    )
}

export default BoxIcon
