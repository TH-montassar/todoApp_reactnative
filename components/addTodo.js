import React, { useState } from 'react'
import {Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function addTodo({submitHandler}) {
  const [text, setText] = useState('')
  const changehandler = (val) => {
    setText(val)
  }
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo...."
        onChangeText={changehandler} //recupere lvalour mta3 l input
      />
    <Text>{text}</Text>
      <Button
        title="add todo"
        color="#30B44E"
        onPress={() => submitHandler(text)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal:8,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

})
