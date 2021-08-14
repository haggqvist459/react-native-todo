import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ListEmpty = () => {
        return (
                <View style={styles.centerAlign}>
                        <Text>The list is empty</Text>
                        <Text>This component needs styles</Text>
                </View>
        )
}

export default ListEmpty

const styles = StyleSheet.create({
        centerAlign: {
                flex: 1,
                alignItems: 'center',
                // justifyContent: 'center',
                marginTop: 50,
        }
})
