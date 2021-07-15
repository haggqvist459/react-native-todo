import { TODO_LIST_STORAGE } from "../utils/constants";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadFromStorage = async() => {
        try {
                await AsyncStorage.getItem(TODO_LIST_STORAGE)
                        .then((stringifiedTodoList) => {
                                // if todoList is not null, there's a string to parse
                                if (stringifiedTodoList) {
                                        console.log('stringifiedTodoList: ', stringifiedTodoList);
                                       return JSON.parse(stringifiedTodoList);
                                } else {
                                        return undefined;
                                }
                        });
        } catch (error) {
                console.log(error);
                return undefined;
        }
}

export const saveToStorage = async(state) => {
        try {
                await AsyncStorage.setItem(TODO_LIST_STORAGE, JSON.stringify(state))
                        .then(() => {
                                // log a success message after storing the todo list
                                console.log('data stored successfully');
                        })
        } catch (error) {
                console.log(error);
        }
}

/* 

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('groceryList');
        if (serializedState === null){
            return undefined; 
        }
        return JSON.parse(serializedState);
    } catch (err)
    {
        return undefined
    }
}

*/