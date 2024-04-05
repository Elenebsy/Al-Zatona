import { StyleSheet ,View,Text,Image,useWindowDimensions, TextInput } from 'react-native'
import React from 'react'
const customInput = ({placeholder,value,setValue,secureTextEntry}) => {
    return (
      <View style={styles.container}>
        <TextInput
        placeholder={placeholder} style={styles.input} value={value} onChangeText={setValue} secureTextEntry={secureTextEntry}
        />
      </View>
    )
  }
  const styles = StyleSheet.create({
    container :{
      backgroundColor:'#F2F2F2', 
      width:"85%",   
      height:55,
      marginVertical:10,
      paddingHorizontal:10,
      borderColor:"e8e8e8",
      borderWidth:2,
      borderRadius:999,
      top:20,
    },
    input:{
      height:"100%",  
      fontSize:20,
    }
  }); 
  export default customInput 