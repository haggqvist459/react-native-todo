import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, Alert } from 'react-native';
// import { Accelerometer } from 'expo-sensors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import { appStyles } from './styles/global';

/*
 TODOS FOR THE TODO LIST: 
 - Remove unused imports

 - Add a picker that filters the categories

 */

/*

COMPLETED: 

- Read dynamic list of todos
- Delete todos individually
- Create todos
- Header
- Toggle completed / incomplete
- Store on device / load from device
- Global styles

EXTRAS COMPLETED: 

- Trash can in header to remove entire list
- Add alert before delete all
- Simple text input validation, e.g. no empty entries

*/

export default function App() {

  // state with todos
  const [todos, setTodos] = useState([]);

  // constant for AsyncStorage
  const TODO_LIST_STORAGE = 'TODO_LIST_STORAGE';

  // check if the array holding todos has 0 elements, if so, load from device storage
  // empty array passed as second argument means this useEffect will only run on mount/unmount
  // it does not depend on any changing values or changing states and does not need to re-run
  // since we only want to check device storage once
  useEffect(() => {
    console.log("useEffect, []");
    if (todos.length === 0) {
      loadFromStorage();
    }
  }, []);

  // save to storage after each render when state of todos has been changed. 
  useEffect(() => {
    console.log("useEffect, [todos]");
    saveToStorage();
  }, [todos]);

  const saveToStorage = async () => {
    try {
      await AsyncStorage.setItem(TODO_LIST_STORAGE, JSON.stringify(todos))
        .then(() => {
          // log a success message after storing the todo list
          console.log('data stored successfully');
        })
    } catch (error) {
      console.log(error);
    }
  }

  const loadFromStorage = async () => {
    try {
      await AsyncStorage.getItem(TODO_LIST_STORAGE)
        .then((stringifiedTodoList) => {
          // if todoList is not null, there's a string to parse
          if (stringifiedTodoList) {
            console.log("stringifiedTodoList: ", stringifiedTodoList)
            const parsedTodoList = JSON.parse(stringifiedTodoList)
            setTodos(parsedTodoList);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  const removeTodoHandler = (id) => {
    console.log("removeTodoHandler: ", id);
    setTodos((todos) => {
      return todos.filter(todo => todo.id != id);
    });
  }

  const toggleTodoHandler = (id) => {
    console.log("toggleTodoHandler: ", id);
    setTodos((todos) => {
      return todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    });
  }

  const addTodoHandler = (textInput) => {

    // if the string.length is too short, post alert instead of adding todo
    if (textInput.length <= 2) {
      console.log("input too short!");
      createAlert();
      return; 
    }

    console.log("addTodoHandler: ", textInput);
    setTodos(todos.concat({
      text: textInput,
      id: (new Date().getTime()).toString(),
      completed: false
    }));
  }

  //wipe the todo list by reverting it back to its initial state
  const deleteList = () => {
    setTodos([]);
  }

  // create an alert in case todo input is too short 
  const createAlert = () => {
    Alert.alert(
      "Input too short!",
      " ",
      [{ text: "OK" }],
    )
  }

  // function to render the todo items in the flatlist component
  const renderTodos = ({ item }) => (
    <TodoItem item={item} removeTodoHandler={removeTodoHandler} toggleTodoHandler={toggleTodoHandler} />
  )

  return (
    <SafeAreaView style={appStyles.container}>
      {/* header */}
      <Header deleteList={deleteList} />
      <View style={appStyles.content}>
        <View style={appStyles.todoList}>
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
