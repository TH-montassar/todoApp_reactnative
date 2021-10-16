import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function todoItem({ item,pressHandler }) {
    const ontouch= ()=>{

    }
  return (
    <TouchableOpacity onPress={()=>pressHandler(item.key)}>
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  text: {
    borderWidth: 1,
    borderColor: '#06B0D6',
    margin: 10,
    fontSize: 15,
    fontStyle: 'italic',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    borderStyle:'dashed',
    padding:10,
    marginTop:15,
    borderRadius:15,
    backgroundColor: '#fff',
  },
})
