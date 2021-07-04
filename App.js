import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, FlatList, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import Header from './components/Header';

// TODOS FOR THE TODO LIST: 

// EXTRAS: 

// - Add categories to the todos
// - Add a picker that filters the categories

// - Trash can in header to remove entire list
// - Simple text input validation, e.g. no empty entries

// COMPLETED: 
// - Read dynamic list of todos
// - Delete todos individually
// - Create todos
// - Header
// - Toggle completed / incomplete
// - Store on device


export default function App() {

  // state with todos
  const [todos, setTodos] = useState([]);
  const TODO_LIST_STORAGE = 'TODO_LIST_STORAGE';

  useEffect(() => {
    if (todos.length === 0) {
      // check for todo list in storage
      AsyncStorage.getItem(TODO_LIST_STORAGE)
        .then((stringifiedTodoList) => {
          // if todoList is not null, there's a string to parse
          if (stringifiedTodoList) {
            const parsedTodoList = JSON.parse(stringifiedTodoList)
            setTodos(parsedTodoList);
          }
        })
        .catch( (error) => {
          // add a catch in case there's an error
          console.log(error);
        })
    }
    else if (todos.length > 0) {
      AsyncStorage.setItem(TODO_LIST_STORAGE, JSON.stringify(todos))
        .then( () => {
          // log a success message after storing the todo list
          console.log('data stored successfully');
        })
        .catch((error) => {
          // add a catch in case there's an error
          console.log(error);
        })
    }
  });

  // function to remove a todo from the list
  const removeTodoHandler = (id) => {
    //update the state, filter the todo based on its id
    setTodos((todos) => {
      return todos.filter(todo => todo.id != id);
    })
  }

  // switch the state of the completed boolean for the clicked 
  const toggleTodoHandler = (id) => {
    setTodos((todos) => {
      return todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    })
  }

  const addTodoHandler = (textInput) => {
    // create a new object 
    const todo = {
      text: textInput,
      id: (new Date().getTime()).toString(),
      completed: false
    }
    setTodos(todos.concat(todo));
    console.log(todos);
  }

  const renderTodos = ({ item }) => (
    <TodoItem item={item} removeTodoHandler={removeTodoHandler} toggleTodoHandler={toggleTodoHandler} />
  )

  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <Header />
      <View style={styles.content}>
        <View style={styles.todoList}>
          {/* FlatList with todos */}
          <FlatList
            scrollEnabled={true}
            data={todos}
            renderItem={renderTodos}
            keyExtractor={(item) => item.id}
          />
        </View>
        {/* create task button */}
        <AddTodo addTodoHandler={addTodoHandler} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
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
    height: '80%',
    paddingBottom: 10
  },
});





// const numbers = [1, 2, 3];
// // updating existing elements
// // map will loop through numbers n in numbers and if its 2, make it 20,
// // otherwise the new updated array's element n will be the same as in numbers 
// const updated = numbers.map(n => n === 2 ? 20 : n)
// // if 20 is an object, have to use spread operator instead
// console.log("updated: ", updated);

// setTodos((todos) => {
//   return [
//     { 
//       text: textInput,
//       id: 4,
//       completed: false 
//     },
//     ...todos
//   ]
// })



