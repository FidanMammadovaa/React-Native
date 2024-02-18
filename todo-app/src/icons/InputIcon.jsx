import * as React from "react"
import { StyleSheet } from "react-native"
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg"
const InputIcon = props => {
    return (
        <Svg style={styles.style}
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            fill="none"
            {...props}
        >
            <Defs>
                <ClipPath id="a">
                    <Path fill="#fff" fillOpacity={0} d="M0 0h20v20H0z" />
                </ClipPath>
            </Defs>
            <Path fill="none" d="M0 0h20v20H0z" />
            <G
                stroke="#4A3780"
                strokeLinejoin="round"
                strokeWidth={1.667}
                clipPath="url(#a)"
            >
                <Path d="M15.833 3.333c.92 0 1.667.747 1.667 1.667v11.667c0 .92-.746 1.666-1.667 1.666H4.167c-.92 0-1.667-.746-1.667-1.666V5c0-.92.746-1.667 1.667-1.667h11.666Z" />
                <Path
                    strokeLinecap="round"
                    d="M13.333 1.667V5M6.667 1.667V5M2.5 8.333h15"
                />
            </G>
        </Svg>
    )
}

const styles = StyleSheet.create({
    style:
    {
        position: 'absolute',
        top: 50,
        left: 125
    }
})

export default InputIcon


