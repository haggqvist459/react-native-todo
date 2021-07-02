import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';



export default function TodoItem({ item, removeTodo, toggleTodo }) {


    const [isCompleted, setIsCompleted] = useState(item.completed);


    // useEffect(() => {
    //     console.log(isCompleted)
    //     return () => {
    //         console.log("error displaying isCompleted");
    //     }
    // }, []);


    return (
        <View style={styles.todoItem}>
            <TouchableOpacity onPress={() => toggleTodo(item.id)}>
                <View style={styles.todoRow}>
                    {isCompleted ?
                        <MaterialIcons style={styles.checkIcon} name="check-circle" size={24} color="black" />
                        :
                        <MaterialIcons style={styles.checkIcon} name="check-circle-outline" size={24} color="black" />}
                    <Text style={[styles.todoText, isCompleted ? styles.todoTextPicked : '']}>{item.text}</Text>
                </View>
            </TouchableOpacity>
            {/* deletebutton  */}
            <TouchableOpacity onPress={() => removeTodo(item.id)}>
                <View style={styles.deleteIcon}>
                    
                    {/* Use a ternary operator  */}
                    {isCompleted ? 
                    <MaterialIcons name="remove-circle" size={24} color="black" />
                    : 
                    <MaterialIcons name="remove-circle-outline" size={24} color="black" />}

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

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        borderRadius: 5,

        // temporary
        // borderWidth: 1,
        // borderColor: '#000',
        
    },
    todoRow: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

        //temporary
        // borderWidth: 1,
        // borderColor: '#000',
        // borderRadius: 5,
    },
    todoText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    todoTextPicked: {
        textDecorationLine: 'line-through'
    },
    deleteIcon: {
        padding: 10,

        // temporary
        // borderWidth: 1,
        // borderColor: '#000',
        // borderRadius: 5,
    },
    checkIcon: {
        paddingRight: 10,
    },
});