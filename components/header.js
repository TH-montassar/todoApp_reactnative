import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My todos</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  header: {
    padding:50,
    height:80,
    paddingTop:50,
    backgroundColor:'#0756FA',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
   
  },
  title: {
      fontSize:30,
      fontFamily:'cursive',
      textAlign:'center',
      color:'#fff',
      
     

  },
})
