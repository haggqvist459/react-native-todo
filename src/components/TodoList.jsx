import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { View, FlatList } from 'react-native'
import TodoItem from './TodoItem'
import { todoListStyles, colors } from '../../styles/global'


const TodoList = () => {

        const [filteredTodos, setFilteredTodos] = useState([]);
        const todoList = useSelector(state => state.todos)

        useEffect(() => {
                console.log('todoList ', todoList);
        }, [])


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

        const renderTodos = ({ item }) => (
                <TodoItem item={item} />
        )

        return (
                <View style={todoListStyles.todoList}>
                        <FlatList
                                data={todoList}
                                renderItem={renderTodos}
                                keyExtractor={(item) => item.id}
                        />
                </View>
        )
}

export default TodoList

