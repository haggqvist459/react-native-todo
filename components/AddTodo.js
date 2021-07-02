import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function AddTodo({ addTodoHandler }) {

    const [textInput, setTextInput] = useState('');

    const textInputHandler = (value) => {
        setTextInput(value)
    }

    const clearInput = () => {
        setTextInput('');
    }

    return (
        <View style={styles.addTodo}>
            <TextInput
                value={textInput}
                style={styles.textInput}
                placeholder='What to do?'
                onChangeText={textInputHandler}
            />
            <TouchableOpacity onPress={() => { addTodoHandler(textInput); clearInput() }}>
                <MaterialIcons style={styles.addIcon} name="add-circle" size={36} color="black" />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    addTodo: {
        marginHorizontal: 8,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 10,

        borderBottomWidth: 2,
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
        borderBottomColor: '#DCFDE4',
        // temporary
        // borderWidth: 1,
        // borderColor: '#DCFDE4',
    },
    textInput: {
        fontSize: 28,
        marginBottom: 10,
        // marginHorizontal: 8,
    },
    addIcon: {
        paddingRight: 10,
    }

})