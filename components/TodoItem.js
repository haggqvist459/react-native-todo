import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { todoItemStyles, colors } from '../styles/global';


export default function TodoItem({ item, removeTodoHandler, toggleTodoHandler }) {

    return (
        <View style={todoItemStyles.todoItem}>
            <TouchableOpacity onPress={() => toggleTodoHandler(item.id)}>
                <View style={todoItemStyles.todoRow}>
                    {item.completed ?
                        <MaterialIcons style={todoItemStyles.checkIcon} name="check-circle" size={24} color={colors.primaryText} />
                        :
                        <MaterialIcons style={todoItemStyles.checkIcon} name="check-circle-outline" size={24} color={colors.primaryText} />
                    }
                    <Text style={[todoItemStyles.todoText, item.completed ? todoItemStyles.todoTextPicked : '']}>{item.text}</Text>
                </View>
            </TouchableOpacity>
            {/* deletebutton  */}
            <TouchableOpacity onPress={() => removeTodoHandler(item.id)}>
                <View style={todoItemStyles.deleteIcon}>

                    {/* Use a ternary operator  */}
                    {item.completed ?
                        <MaterialIcons name="remove-circle" size={24} color={colors.primaryText} />
                        :
                        <MaterialIcons name="remove-circle-outline" size={24} color={colors.primaryText} />
                    }

                </View>
            </TouchableOpacity>
        </View>
    )
}
