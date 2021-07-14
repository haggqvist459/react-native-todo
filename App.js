import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, Alert, StatusBar, } from 'react-native';
// import { Accelerometer } from 'expo-sensors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Accelero, AddTodo, CategoryPicker, Header, TodoItem  } from './components';
import { appStyles, colors } from './styles/global';


export default function App() {

  // state with todos
  const [todos, setTodos] = useState([]);

  // state to hold the category selection
  const [category, setCategory] = useState();

  // state with the filtered todos, used to supply the flatlist with data
  const [filteredTodos, setFilteredTodos] = useState([]);

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

  // filter the todo data based on the selected category
  useEffect(() => {
    console.log("useEffect, [category]");
    console.log("category selected: ", category);
    filterTodoData(category);
  }, [category]);

  // save to storage after each render when state of todos has been changed. 
  useEffect(() => {
    console.log("useEffect, [todos]");
    saveToStorage();
    filterTodoData(category);
  }, [todos]);

  // function to handle the selected item from the picker 
  const handleSelectedCategory = (value) => {
    // filter the todos based on the selected category
    setCategory(value);
  }

  // filter the todo list based on the category selection
  const filterTodoData = (value) => {

    var updatedTodos = [];

    switch (value) {
      case 'all':
        // supply the unfiltered todo list as data to the flatlist
        console.log('switch case all');
        setFilteredTodos(todos);
        break;
      case 'completed':
        // supply the completed todos as data to the flatlist
        console.log('switch case completed');
        updatedTodos = todos.filter(todo => todo.completed == true);
        setFilteredTodos(updatedTodos);
        break;
      case 'remaining':
        // supply the incomplete todos as data to the flatlist
        console.log('switch case remaining');
        updatedTodos = todos.filter(todo => todo.completed == false);
        setFilteredTodos(updatedTodos);
        break;
      default:
        // supply the unfiltered todo list as data to the flatlist
        console.log('switch case default');
        setFilteredTodos(todos);
    }
  }

  // save todo list from storage
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

  // load todo list from storage
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

  // remove a todo based on its supplied id
  const removeTodoHandler = (id) => {
    console.log("removeTodoHandler: ", id);
    setTodos((todos) => {
      return todos.filter(todo => todo.id != id);
    });
  }

  // toggle the completed boolean between true and false
  const toggleTodoHandler = (id) => {
    console.log("toggleTodoHandler: ", id);
    setTodos((todos) => {
      return todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    });
  }

  // add a todo object to the array of todos
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
      <StatusBar 
      backgroundColor={colors.primary}
      barStyle='dark-content'/>
      {/* view for the header, picker and flatlist */}
      <View style={appStyles.content}>
        {/* header */}
        <Header deleteList={deleteList} />
        {/* picker menu for the categories */}
        <CategoryPicker handleSelectedCategory={handleSelectedCategory} />
        <View style={appStyles.todoList}>
          {/* FlatList with todos */}
          <FlatList
            data={filteredTodos}
            renderItem={renderTodos}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
      {/* bottom view to align the addTodo component at the bottom  */}
      <View style={appStyles.bottomView}>
        {/* create todo button */}
        <AddTodo addTodoHandler={addTodoHandler} />
      </View>
    </SafeAreaView>
  );
}


/*
 TODOS FOR THE TODO LIST:


 EXTRAS: 
 - add comments to components

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
- Remove unused imports

EXTRAS COMPLETED:

- Trash can in header to remove entire list
- Add alert before delete all
- Simple text input validation, e.g. no empty entries
- Add a picker that filters the categories

*/

