import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, FlatList, Text } from 'react-native';
import TodoItem from './components/TodoItem'

// TODOS FOR THE TODO LIST: 
// - Toggle completed / incomplete
// - Add Todos
// - Store on device

// EXTRAS: 
// - Add categories to the todos
// - Add a picker that filters the categories

export default function App() {


  // state with todos
  const [todos, setTodos] = useState([
    {
      text: 'todo one',
      id: 'one',
      completed: false,
    },
    {
      text: 'todo two',
      id: 'two',
      completed: false,
    },
    {
      text: 'todo three',
      id: 'three',
      completed: true
    }
  ]);


  // const renderTodos = ({item}) => {
  //   <TodoItem item={item} />
  // }


  // function to remove a todo from the list
  const removeTodo = (id) => {
    //update the state, filter the todo based on its id
    setTodos((todos) => {
      return todos.filter(todo => todo.id != id);
    })
  }


  // const numbers = [1, 2, 3];
  // // updating existing elements
  // // map will loop through numbers n in numbers and if its 2, make it 20,
  // // otherwise the new updated array's element n will be the same as in numbers 
  // const updated = numbers.map(n => n === 2 ? 20 : n)
  // // if 20 is an object, have to use spread operator instead
  // console.log("updated: ", updated);


  const toggleTodo = (id) => {

    setTodos((todos) => {
      return todos.map(item => item.id == id ? !todos.completed : todos.completed);
    })
    console.log(id);
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Things To Do: </Text>
      </View>
      <View style={styles.content}>

        {/* create task button */}
        <View style={styles.todoList}>
          {/* FlatList with todos */}
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} removeTodo={removeTodo} toggleTodo={toggleTodo} />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>

        {/* create task button */}

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: '15%',
    backgroundColor: '#DCFDE4',
    paddingVertical: '7.5%',
    display: 'flex',
    alignItems: 'center',

  },
  headerText: {
    paddingTop: '7.5%',
    fontSize: 28,
    fontWeight: 'bold',
  },
  content: {
    padding: 10,
  },
  todoList: {
    padding: 10,
  },
});

