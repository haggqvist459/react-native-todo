import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { headerStyles } from '../styles/global';

export default function Header({ deleteList }) {
    return (
        <View style={headerStyles.header}>
            <Text style={headerStyles.headerText}>Things to do</Text>
            <TouchableOpacity onPress={() => deleteList()}>
                <MaterialIcons name="delete-sweep" size={42} color="black" />
            </TouchableOpacity>
        </View>
    )
}
