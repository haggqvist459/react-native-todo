import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { todoItemStyles, colors } from '../../styles/global';

// call the redux store actions delete and toggle here

export default function TodoItem({ item, removeTodoHandler, toggleTodoHandler }) {


    return (
        <View style={todoItemStyles.todoItem}>
            <TouchableOpacity style={todoItemStyles.todoRow} onPress={() => toggleTodoHandler(item.id)}>
                <MaterialIcons  style={todoItemStyles.checkIcon} name={`check-circle${item.completed ? '' : '-outline'}`} size={30} color={colors.primaryText} />
                <Text style={[todoItemStyles.todoText, item.completed ? todoItemStyles.todoTextPicked : '']}>{item.text}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={todoItemStyles.deleteIcon} onPress={() => removeTodoHandler(item.id)}>
                <MaterialIcons name={`remove-circle${item.completed ? '' : '-outline'}`} size={30} color={colors.primaryText} />
            </TouchableOpacity>
        </View>
    )
}
