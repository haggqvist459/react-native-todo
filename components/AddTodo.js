import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { addTodoStyles  } from '../styles/global';

export default function AddTodo({ addTodoHandler }) {

    const [textInput, setTextInput] = useState('');

    const textInputHandler = (value) => {
        setTextInput(value)
    }

    const clearInput = () => {
        setTextInput('');
    }

    return (
        <View style={addTodoStyles.addTodo}>
            <TextInput
                value={textInput}
                style={addTodoStyles.textInput}
                placeholder='What to do?'
                onChangeText={textInputHandler}
            />
            <TouchableOpacity onPress={() => { addTodoHandler(textInput); clearInput() }}>
                <MaterialIcons style={addTodoStyles.addIcon} name="add-circle" size={36} color="black" />
            </TouchableOpacity>
        </View>
    )
}
