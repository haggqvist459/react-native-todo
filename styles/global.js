import { StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: '15%',
        backgroundColor: '#DCFDE4',
        paddingVertical: '7.5%',
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
        backgroundColor: '#DCFDE4',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    headerText: {
        fontSize: 32,
        fontWeight: 'bold',
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
        borderBottomColor: '#DCFDE4',
    },
    textInput: {
        fontSize: 28,
        marginBottom: 10,
    },
    addIcon: {
        paddingRight: 10,
    }
});

export const todoItemStyles = StyleSheet.create({
    todoItem: {
        backgroundColor: '#DCFDE4',
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
