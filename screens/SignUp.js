import { StyleSheet ,View,Text,Image,useWindowDimensions } from 'react-native'
import React from 'react';
import Education from '../assets/Education.png';
import CustomButton from '../component/customButton';
import CustomInput from '../component/customInput';
const Welcome = () => {
const {height} = useWindowDimensions();
const handleSignUp = () =>{
    console.log("done");
};
return (
    <View style={styles.container}>
    <Text style={styles.title}>create an Account</Text>
    <CustomInput placeholder="Name" />
    <CustomInput placeholder="Email" />
    <CustomInput placeholder="Password" />
    <CustomButton text ="Sign Up" onPress={handleSignUp}/>
    <CustomButton text ="Sign up with Google" bgcolor="white" txtcolor="black" />
    <CustomButton text ="Sign up with Facebook" bgcolor="blue" txtcolor="white"/>
    <CustomButton text ="Sign IN"  type='Link' />
    


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
top:20
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