import { StyleSheet } from "react-native";

//#DCFDE4 - nyanza 
//#DCFDF5 - light cyan
//#E5FDDC - also called nyanza, slightly darker
//#FCFFFC - baby powder

export const colors = {
    primary: '#E5FDDC',
    secondary: '#FDDCF5',
    primaryText: '#23021B',
    background: '#EDEDED',
}



export const appStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    header: {
        height: '15%',
        backgroundColor: colors.primary,
        display: 'flex',
        alignItems: 'center',
    },
    headerText: {
        paddingTop: '7.5%',
        fontSize: 28,
        fontWeight: 'bold',
    },
    content: {
        padding: 10,
    },
    todoList: {
        height: '80%',
        paddingBottom: 10
    },
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
        marginBottom: 10,
    },
    addIcon: {
        paddingRight: 10,
    },
});

export const todoItemStyles = StyleSheet.create({
    todoItem: {
        backgroundColor: colors.primary,
        marginVertical: 8,
        marginHorizontal: 8,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 5,
    },
    todoRow: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
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
    },
    checkIcon: {
        paddingRight: 10,
    },
})
