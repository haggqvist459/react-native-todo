import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { View, FlatList, StyleSheet, Dimensions } from 'react-native'
import { ListEmpty, TodoItem } from './list'
import { todoListStyles } from '../../styles/global'



const TodoList = () => {

        const [filteredTodos, setFilteredTodos] = useState([]);
        const todoList = useSelector((state) => state.todos);
        const visibilityFilter = useSelector((state) => state.visibilityFilter);
        console.log('todoList ', todoList);
        console.log('filter', visibilityFilter);


        const filterTodoData = (value) => {

                var updatedTodos = [];

                switch (value) {
                        case 'all':
                                // supply the unfiltered todo list as data to the flatlist
                                console.log('switch case all');
                                setFilteredTodos(todoList);
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

        const renderTodos = ({ item }) => (
                <TodoItem item={item} text={item.text}/>
        )

        return (
                <View style={todoListStyles.todoList}>
                        <FlatList
                                data={todoList}
                                renderItem={renderTodos}
                                keyExtractor={(item) => item.id}
                                ListEmptyComponent={ListEmpty}
                        />
                </View>
        )
}

export default TodoList
