import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, Alert, StatusBar, Dimensions } from 'react-native';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native'
import { Provider } from 'react-redux';
import store from './src/redux/store';
// import { Accelerometer } from 'expo-sensors';
import { AddTodo, Header, TodoList } from './src/components';
import { appStyles, colors } from './styles/global';


const App = () => {

  return (
    <Provider store={store}>
      <Header />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={appStyles.container}>
          <TodoList />
        <View style={appStyles.bottomView}>
          <AddTodo />
        </View>
      </KeyboardAvoidingView>
    </Provider>
  );
}

export default App;

/*
 <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={appStyles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1 }}>
            <View style={appStyles.content}>
              <Header deleteList={deleteList} />
              <CategoryPicker handleSelectedCategory={handleSelectedCategory} />
              <TodoList />

            </View>
            <View style={appStyles.bottomView}>
              <AddTodo />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

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

// useEffect(() => {
  //   console.log("useEffect, []");
  //   // console.log('todoList ', todoList);
  //   if (todos.length === 0) {
  //     // loadFromStorage();
  //   }
  // }, []);

  // useEffect(() => {
  //   console.log("useEffect, [category]");
  //   console.log("category selected: ", category);
  //   // filterTodoData(category);
  // }, [category]);

  // useEffect(() => {
  //   console.log("useEffect, [todos]");
  //   // saveToStorage();
  //   // filterTodoData(category);
  // }, [todos]);



  const removeTodoHandler = (id) => {
    console.log("removeTodoHandler: ", id);
    setTodos((todos) => {
      return todos.filter(todo => todo.id != id);
    });
  }


      const loadFromStorage = async () => {
        try {
            console.log("asyncStorage: ", await AsyncStorage.getItem(TODO_LIST_STORAGE));
            const stringifiedTodoList = await AsyncStorage.getItem(TODO_LIST_STORAGE)
            console.log("@loadFromStorage in TodoList: ", stringifiedTodoList);
            return stringifiedTodoList != null ? JSON.parse(stringifiedTodoList) : undefined;
        } catch (error) {
            console.log("error @loadFromStorage in TodoList", error.message);
            return undefined;
        }
    }
*/