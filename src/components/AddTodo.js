import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import { addTodoStyles, colors  } from '../../styles/global';
import { ACTIONS } from '../utils/constants';

// call the redux store actions add here
/*

 if (textInput.length <= 2) {
      console.log("input too short!");
      createAlert();
      return;
    }


*/
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
            dispatch({type: ACTIONS.ADD_ITEM, payload: { text: textInput }});
            clearInput();
        }
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
