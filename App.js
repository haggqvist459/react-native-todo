import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, View, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import { appStyles } from './styles/global';

// TODOS FOR THE TODO LIST: 

// EXTRAS: 
// - Add categories to the todos
// - Add a picker that filters the categories

// - Simple text input validation, e.g. no empty entries
// - Global styles


// COMPLETED: 
// - Read dynamic list of todos
// - Delete todos individually
// - Create todos
// - Header
// - Toggle completed / incomplete
// - Store on device / load from device

// EXTRAS COMPLETED: 
// - Trash can in header to remove entire list

export default function App() {

  // state with todos
  const [todos, setTodos] = useState([]);

  const firstRender = useRef(true);
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

  // function to remove a todo from the list
  const removeTodoHandler = (id) => {

    // filter through the todos array, look for the todo with the correct id and remove it
    const updatedTodos = todos.filter(todo => todo.id != id);
    // save the updated todos into the state
    setTodos(updatedTodos);


    // //update the state, filter the todo based on its id
    // setTodos((todos) => {
    //   return todos.filter(todo => todo.id != id);
    // });

    console.log("removeTodoHandler: ", todos);
  }

  // switch the state of the completed boolean for the clicked 
  const toggleTodoHandler = (id) => {

    // map through the todos array, look for the todo with correct id and flip the completed value
    const updatedTodos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
    // save the updated todos into the state
    setTodos(updatedTodos);

    // setTodos((todos) => {
    //   return todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    // });

    console.log("toggleTodoHandler: ", todos);
  }

  const addTodoHandler = (textInput) => {

    // create a new object with the text input & default values
    const todo = {
      text: textInput,
      id: (new Date().getTime()).toString(),
      completed: false
    }

    //  add the new todo object to the todos array
    const updatedTodos = todos.concat(todo);

    // save the updated todos into the state
    setTodos(updatedTodos);


    // setTodos(todos.concat(todo));
    console.log("addTodoHandler: ", todos);
  }

  //wipe the todo list by reverting it back to its initial state
  const deleteList = () => {
    setTodos([]);
  }

  // function to render the todo items in the flatlist component
  const renderTodos = ({ item }) => (
    <TodoItem item={item} removeTodoHandler={removeTodoHandler} toggleTodoHandler={toggleTodoHandler} />
  )

  return (
    <SafeAreaView style={appStyles.container}>
      {/* header */}
      <Header deleteList={deleteList}/>
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
