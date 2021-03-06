import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { toggleItem, deleteItem } from '../../redux/actions';
import { MaterialIcons } from '@expo/vector-icons';
import { todoItemStyles, colors } from '../../../styles/global';


export default function TodoItem({ item }) {

    const dispatch = useDispatch();

    return (
        <View style={todoItemStyles.todoItem}>
            <TouchableOpacity style={todoItemStyles.todoRow} onPress={() => dispatch(toggleItem(item.id))}>
                <MaterialIcons style={todoItemStyles.checkIcon} name={`check-circle${item.completed ? '' : '-outline'}`} size={30} color={colors.primaryText} />
                    <Text style={[todoItemStyles.todoText, item.completed ? todoItemStyles.todoTextPicked : '']}>{item.text}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={todoItemStyles.deleteIcon} onPress={() => dispatch(deleteItem(item.id))}>
                <MaterialIcons name={`remove-circle${item.completed ? '' : '-outline'}`} size={30} color={colors.primaryText} />
            </TouchableOpacity>
        </View>
    )
}
