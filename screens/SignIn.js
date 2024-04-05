import { StyleSheet ,View,Text,Image,useWindowDimensions } from 'react-native'
import React from 'react';
import Education from '../assets/Education.png';
import CustomButton from '../component/customButton';
import CustomInput from '../component/customInput';
const Welcome = () => {
  const {height} = useWindowDimensions();
  return (
    <View style={styles.container}>
    <Image source={Education} style={[styles.Education,{height:height*0.3}]} resizeMethod='contain' />
    <CustomInput placeholder="Email" />
    <CustomInput placeholder="Password" />
    <CustomButton text ="Sign in"/>
    <CustomButton text ="Sign in with Google" bgcolor="white" txtcolor="black" />
    <CustomButton text ="Sign in with Facebook" bgcolor="blue" txtcolor="white"/>
    <CustomButton text ="Sign Up"  type='Link' />
    <CustomButton text ="Forget Password" type='Link'/>


    </View>
  );
}
const styles = StyleSheet.create({
container : {
  flex:1,
  alignItems:'center',
  padding:20,
},
Education : {
  width:"60%",
  mmaxwidth :400,
  maxHeight:300,  

},
title : {
  fontWeight : "bold",
  fontSize : 50  ,
  color : "#1e1f26",
  marginBottom:10 ,
},
span : {
  color : "green"
},
text : {
  fontSize : 20  ,
  color : "3A3967",
}
});
export default Welcome 