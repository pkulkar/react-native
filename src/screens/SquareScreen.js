import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 20
const MAX_VALUE = 255
const MIN_VALUE = 0

const getValue = (value) =>{
    if(value >= MAX_VALUE){
        return MAX_VALUE;
    } else if(value <= MIN_VALUE){
        return MIN_VALUE;
    } else {
        return value;
    }
}

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);

    return(
        <View>
            <ColorCounter
             onIncrease={()=>{setRed(getValue(red + COLOR_INCREMENT))}} 
             onDecrease={()=>{setRed(getValue(red - COLOR_INCREMENT))}} 
             color="Red"/>
            <ColorCounter
             onIncrease={()=>{setBlue(getValue(blue + COLOR_INCREMENT))}} 
             onDecrease={()=>{setBlue(getValue(blue - COLOR_INCREMENT))}} 
             color="Blue"/>
            <ColorCounter
             onIncrease={()=>{setGreen(getValue(green + COLOR_INCREMENT))}} 
             onDecrease={()=>{setGreen(getValue(green - COLOR_INCREMENT))}} 
             color="Green"/>
            <View style={{ height:150, width:150, backgroundColor:`rgb(${red}, ${green}, ${blue})`}} />
        </View>
    )
}

const styles = StyleSheet.create({})

export default SquareScreen