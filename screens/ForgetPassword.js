import { useState } from 'react'
import { StyleSheet ,View,Text,Image,useWindowDimensions } from 'react-native'
import React from 'react'
import Education from '../assets/images/password-removebg-preview.png'
import CustomButton from '../components/customButton'
import CustomInput from '../components/customInput'
const Welcome = () => {
const {height} = useWindowDimensions();
const [Email,setEmail] = useState("")
const handleForgetPassword = () => {
console.log("done");
};
return (
    <View style={styles.container}>
<Image source={Education} style={[styles.Education,{height:height*0.3}]} resizeMethod='contain' />
<Text style={styles.title}>Forget Password?</Text>
<Text style={styles.text}>don't worry, enter your email and we will send you a link to reset your password</Text>
<CustomInput placeholder= "Email" value={Email} setValue={setEmail}/>
<CustomButton text= "Send Email" bgcolor="green" txtcolor="white" onPress={handleForgetPassword}/>
<CustomButton text ="Back to Sign in" bgcolor="black" txtcolor="white" />
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
width:"70%",
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
color : "3A3967"
}
});
export default Welcome 