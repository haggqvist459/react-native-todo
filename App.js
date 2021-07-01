import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, FlatList } from 'react-native';
import TodoItem from './components/TodoItem'


export default function App() {

  // state with todos
  const [todos, setTodos] = useState([
    {
      text: 'todo one',
      id: '1',
      completed: false
    },
    {
      text: 'todo two',
      id: '2',
      completed: false
    },
    {
      text: 'todo three',
      id: '3',
      completed: false
    }
  ]);

  const renderTodos = ({item}) => {
    <TodoItem item={item} />
  }

  const removeTodo = (id) => {
    setTodos((todos) => {
      return todos.filter(todo => todo.id != id);
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <View style={styles.header}>

      </View>
      <View style={styles.content}>

        {/* create task button */}
        <View style={styles.todoList}>
          {/* FlatList with todos */}
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} removeTodo={removeTodo}/>
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
  },
  content: {
    padding: 10,
  },
  todoList: {
    padding: 10,
  },
});

