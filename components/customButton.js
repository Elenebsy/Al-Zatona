import {StyleSheet, View,Text,TouchableOpacity } from 'react-native'
import React from 'react'
const customButton = ({ text,type = "Button",bgcolor,txtcolor,onPress }) => {
    return (
    <TouchableOpacity style={[styles.container,styles[`container${type}`],bgcolor?{backgroundColor:bgcolor}:{}]}
    onPress={onPress}
    >
        <Text style={[styles.text,styles[`text${type}`],txtcolor?{color:txtcolor}:{}]}>{text}</Text>
    </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container :{
    width:"100%",
    padding:15, 
    marginVertical:5,
    alignItems:"center",
    backgroundColor:"green",
    top:30,
    },
    containerLink:{
        backgroundColor:"black",
    },
    text:{
        fontWeight:"bold",
        fontSize : 20,
        color:"white"
    },
    textLink:{
        color:"white",
        fontSize:15,
    }
}); 
export default customButton