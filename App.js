import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import Header from './components/header'
import TodoItem from './components/todoItem'

export default function App() {
  const [todo, setTodo] = useState([
    { text: 'go to moske', key: 1 },
    { text: 'buy cofffe', key: 2 },
    { text: 'do home work', key: 3 },
    { text: 'take course', key: 4 },
    { text: ' eet denner', key: 5 },
  ]);
  const pressHandler=(key)=>{
    setTodo((prevTodos)=>{
      return prevTodos.filter(todo=>todo.key!=key)

    });
  }
  return (
    <View style={styles.container}>
    {/* importation components/header */}
      <Header /> 
      <View style={styles.content}>
        {/* to from */}
        <View style={styles.list}>
          <FlatList
            data={todo}
            renderItem={({ item }) => (
            
              <TodoItem item={item} pressHandler={pressHandler}/> //importation components/todoItem
             
            )}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    marginTop: 100,
    marginHorizontal: 20,
    padding: 30,
    backgroundColor: '#0756FA',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    borderRadius:14,

    elevation: 24,
  },
  list: {

  },
  text: {
    borderWidth: 2,
    borderColor: '#06B0D6',
    margin: 10,
    fontSize: 15,
    fontStyle: 'italic',
    fontFamily: 'Times',
    fontWeight: 'bold',
  },
})
