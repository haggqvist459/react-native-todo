import React from 'react';
import { View, Text, TouchableOpacity, Alert, StatusBar } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteAll } from '../redux/actions';
import VisibilityFilters from './VisibilityFilters';
import { MaterialIcons } from '@expo/vector-icons';
import { headerStyles, colors } from '../../styles/global';



export default function Header() {

    const dispatch = useDispatch();

    const createAlert = () => {
        Alert.alert(
            "Clear list",
            "Are you sure you want to clear the list?",
            [
                { text: "Cancel" },
                { text: "OK", onPress: () => dispatch(deleteAll()) }
            ],
        )
    }



    return (
        <View>
            <View style={headerStyles.header}>
                <StatusBar
                    translucent={true}
                    backgroundColor={colors.primary}
                    barStyle='dark-content' />
                <Text style={headerStyles.headerText}>Grocery List</Text>
                <TouchableOpacity onPress={() => createAlert()}>
                    <MaterialIcons name="delete-sweep" size={42} color={colors.primaryText} />
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
                <VisibilityFilters />
            </View>
        </View>
    )
}

