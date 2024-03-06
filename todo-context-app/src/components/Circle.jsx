import { Pressable, StyleSheet } from "react-native";
import React from "react";
import TaskIcon from "../icons/TaskIcon";
import EventIcon from "../icons/EventIcon";
import GoalIcon from "../icons/GoalIcon";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import CloseIcon from "../icons/CloseIcon";
import ClockIcon from "../icons/ClockIcon";
import InputIcon from "../icons/InputIcon";

export default function Circle({ onPress, svgIcon, backgroundColor, opacity }) {

    const renderIcon = (icon, styles) => {
        switch (icon) {
            case 'EventIcon':
                return <EventIcon {...styles} />;
            case 'GoalIcon':
                return <GoalIcon {...styles} />;
            case 'TaskIcon':
                return <TaskIcon {...styles} />;
            case 'ArrowLeftIcon':
                return <ArrowLeftIcon {...styles} />;
            case 'CloseIcon':
                return <CloseIcon {...styles} />;
            case 'ClockIcon':
                return <ClockIcon {...styles} />;
            case 'InputIcon':
                return <InputIcon {...styles} />;
            default:
                return null;
        }
    };

    return (
        opacity ? (
            <Pressable onPress={onPress} style={[style.circleStyle, { backgroundColor, opacity }]}>
                {renderIcon(svgIcon)}
            </Pressable>
        ) :
            <Pressable onPress={onPress} style={[style.circleStyle, { backgroundColor }]}>
                {renderIcon(svgIcon)}
            </Pressable>
    );
}

const style = StyleSheet.create({
    circleStyle: {
        width: 48,
        height: 48,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
