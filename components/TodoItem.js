import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';



export default function TodoItem({ item, removeTodo }) {

    const todoClicked = () => {
        // put a strikethrough line on the text to mark it completed 
    }

    return (
        <View style={styles.todoItem}>
            <TouchableOpacity onClick={todoClicked}>
                {/* checkbox icon */}
                <Text style={styles.todoText}>{item.text}</Text>
            </TouchableOpacity>
            {/* deletebutton  */}
            <TouchableOpacity>
                <View style={styles.deleteIcon}>
                    <Ionicons name="remove-circle-outline" size={24} color="black" />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    todoItem: {
        backgroundColor: '#DCFDE4',
        marginVertical: 8,
        marginHorizontal: 8,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        
    },
    todoText: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
    },
    deleteIcon: {
        // display: 'flex',
        // alignItems: 'center'
        padding: 10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
    }
});