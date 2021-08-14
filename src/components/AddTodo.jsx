import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import { addTodoStyles, colors  } from '../../styles/global';
import { addItem } from '../redux/actions';

export default function AddTodo() {

    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState('');

    const textInputHandler = (value) => {
        setTextInput(value)
    }

    const clearInput = () => {
        setTextInput('');
    }

    const addTodo = () => {
        if (textInput.length <= 2) {
            console.log("input too short!");
            createAlert();
            return;
        } else {
            dispatch(addItem(textInput));
            clearInput();
        }
    }

    const createAlert = () => {
        Alert.alert(
          "Input too short!",
          " ",
          [{ text: "OK" }],
        )
      }

    return (
        <View style={addTodoStyles.addTodo}>
            <TextInput
                value={textInput}
                style={addTodoStyles.textInput}
                placeholder='What to do?'
                onChangeText={textInputHandler}
            />
            <TouchableOpacity onPress={() => addTodo()}>
                <MaterialIcons style={addTodoStyles.addIcon} name="playlist-add" size={36} color={colors.primaryText}/>
            </TouchableOpacity>
        </View>
    )
}
