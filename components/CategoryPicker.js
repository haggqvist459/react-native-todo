import React from 'react';
import { View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { pickerStyle } from '../styles/global';


export default function CategoryPicker({ handleSelectedCategory }) {

    const categories = [
        {label: 'All', value:'all'},
        {label: 'Completed', value: 'completed'},
        {label: 'Remaining', value: 'remaining'},   
    ]

    
    return (
        <View>
            <RNPickerSelect
                items={categories}
                onValueChange={value => handleSelectedCategory(value)}
                useNativeAndroidPickerStyle={false}
                style={pickerStyle}
                placeholder={{label: 'Select a category', value: null }}
            />
        </View>
    )
}



