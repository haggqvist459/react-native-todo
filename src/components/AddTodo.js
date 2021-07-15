import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import { addTodoStyles, colors  } from '../../styles/global';
import { ACTIONS } from '../utils/constants';

// call the redux store actions add here

export default function AddTodo({ addTodoHandler }) {

    const dispatch = useDispatch();
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
            <TouchableOpacity onPress={() => {dispatch({type: ACTIONS.ADD_ITEM }), clearInput()}}>
                <MaterialIcons style={addTodoStyles.addIcon} name="playlist-add" size={36} color={colors.primaryText}/>
            </TouchableOpacity>
        </View>
    )
}
