import { StyleSheet ,View,Text,Image,useWindowDimensions } from 'react-native'
import React from 'react'
import Education from '../assets/Education.png'
import CustomButton from '../component/customButton'
const Welcome = () => {
  const {height} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Image source={Education} style={[styles.Education,{height:height*0.5}]} resizeMethod='contain' />
      <Text style={styles.title}>El_Zatona <Text style={styles.span}>Education</Text> For The Future</Text>
      <Text style={styles.text}>It is long established fact that reader distracted by the readable content</Text>
      <CustomButton text= "Get started"/>
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
  width:"78%",
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