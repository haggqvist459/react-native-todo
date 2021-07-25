import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { headerStyles, colors } from '../../styles/global';

export default function Header({ deleteList }) {

    const createAlert = () => {
        Alert.alert(
            "Clear list",
            "Are you sure you want to clear the list?",
            [
                { text: "Cancel" },
                { text: "OK", onPress: () => deleteList() }
            ],
        )
    }

    return (
        <View style={headerStyles.header}>
            <Text style={headerStyles.headerText}>Things to do</Text>
            <TouchableOpacity onPress={createAlert}>
                <MaterialIcons name="delete-sweep" size={42} color={colors.primaryText} />
            </TouchableOpacity>
        </View>
    )
}

