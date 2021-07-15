import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, Alert, StatusBar, } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store'
// import { Accelerometer } from 'expo-sensors';
import { AddTodo, CategoryPicker, CustomAlert, Header, TodoItem } from './src/components';
import { appStyles, colors } from './styles/global';


export default function App() {

  const TODO_LIST_STORAGE = 'TODO_LIST_STORAGE';
  const [todos, setTodos] = useState([]);
  const [category, setCategory] = useState();
  const [filteredTodos, setFilteredTodos] = useState([]);


  useEffect(() => {
    console.log("useEffect, []");
    if (todos.length === 0) {
      // loadFromStorage();
    }
  }, []);

  useEffect(() => {
    console.log("useEffect, [category]");
    console.log("category selected: ", category);
    filterTodoData(category);
  }, [category]);

  useEffect(() => {
    console.log("useEffect, [todos]");
    // saveToStorage();
    filterTodoData(category);
  }, [todos]);

  const handleSelectedCategory = (value) => {
    setCategory(value);
  }

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
  
  const deleteList = () => {
    setTodos([]);
  }

  const createAlert = () => {
    Alert.alert(
      "Input too short!",
      " ",
      [{ text: "OK" }],
    )
  }

  const renderTodos = ({ item }) => (
    <TodoItem item={item} removeTodoHandler={removeTodoHandler} toggleTodoHandler={toggleTodoHandler} />
  )

  return (
    <Provider store={store}>
      <SafeAreaView style={appStyles.container}>
        <StatusBar
          backgroundColor={colors.primary}
          barStyle='dark-content' />
        <View style={appStyles.content}>
          <Header deleteList={deleteList} />
          <CategoryPicker handleSelectedCategory={handleSelectedCategory} />
          <View style={appStyles.todoList}>
            <FlatList
              data={filteredTodos}
              renderItem={renderTodos}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
        <View style={appStyles.bottomView}>
          <AddTodo />
        </View>
      </SafeAreaView>
    </Provider>
  );
}


/* 


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


*/