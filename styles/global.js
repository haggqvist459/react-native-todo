import { StyleSheet, Dimensions } from "react-native";

//#DCFDE4 - nyanza 
//#DCFDF5 - light cyan
//#E5FDDC - also called nyanza, slightly darker
//#FCFFFC - baby powder

// const { height } = Dimensions.get('window')

export const colors = {
    primary: '#E5FDDC',
    secondary: '#FDDCF5',
    primaryText: '#23021B',
    background: '#EDEDED',
}

// not implemented yet
export const variables = {
    iconSize: 30,
    fontSizeList: 22,
    fontSizeInput: 28
    
}

export const appStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    content: {
        flex: 1,
        // you can add vertical padding 
        // if you add horizontal padding it will affect the position of the addTodo component
    },
    bottomView: {
        paddingBottom: 40
    }
});

export const headerStyles = StyleSheet.create({
    header: {
        height: '15%',
        backgroundColor: colors.primary,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    headerText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: colors.primaryText,
    },
});

export const addTodoStyles = StyleSheet.create({
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
        borderBottomColor: colors.primaryText,
    },
    textInput: {
        fontSize: 28,
        marginTop: 15,
        paddingBottom: 10,
    },
    addIcon: {
        paddingRight: 10,
    },
});

export const todoListStyles = StyleSheet.create({
    todoList: {
        height: '80%',
        paddingBottom: 10,
    },
})

export const todoItemStyles = StyleSheet.create({
    todoItem: {
        backgroundColor: colors.primary,
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        // temporary dev styles
        // borderColor: colors.primaryText,
        // borderWidth: 1,
        // borderRadius: 5,
    },
    todoRow: {
        padding: 10,
        flexDirection: 'row',
        flex: 1,
        alignItems: 'stretch',
        alignItems: 'center',

        // temporary dev styles
        // borderColor: colors.primaryText,
        // borderWidth: 1,
        // borderRadius: 5,
    },
    todoText: {
        fontSize: 20,
        fontWeight: 'bold',
        flexDirection: 'row',
        flexWrap: "wrap",
    },
    todoTextPicked: {
        textDecorationLine: 'line-through'
    },
    deleteIcon: {
        padding: 10,

        // temporary dev styles
        // borderColor: colors.primaryText,
        // borderWidth: 1,
        // borderRadius: 5,
    },
    checkIcon: {
        paddingRight: 10,
        
        // temporary dev styles
        // borderColor: colors.primaryText,
        // borderWidth: 1,
        // borderRadius: 5,
    },
})

export const pickerStyle = StyleSheet.create({
    inputIOS: {
        backgroundColor: colors.primary,
        color: colors.primaryText,
        width: '100%',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingVertical: 5,

        // temporary dev styles
        // borderColor: colors.primaryText,
        // borderWidth: 1,
        // borderRadius: 5,
    },
    inputAndroid: {
        backgroundColor: colors.primary,
        color: colors.primaryText,
        width: '100%',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingVertical: 5,

        // temporary dev styles
        // borderColor: colors.primaryText,
        // borderWidth: 1,
        // borderRadius: 5,
    },
    placeholder: {
        // change to a darker grey
        color: colors.primaryText
    }
})