const TODO_LIST_STORAGE = 'TODO_LIST_STORAGE';

export const loadFromStorage = () => {
        try {
                await AsyncStorage.getItem(TODO_LIST_STORAGE)
                        .then((stringifiedTodoList) => {
                                // if todoList is not null, there's a string to parse
                                if (stringifiedTodoList) {
                                        console.log("stringifiedTodoList: ", stringifiedTodoList)
                                        const parsedTodoList = JSON.parse(stringifiedTodoList)
                                        setTodos(parsedTodoList);
                                }
                        });
        } catch (error) {
                console.log(error);
        }
}

export const saveFromStorage = (state) => {
        try {
                await AsyncStorage.setItem(TODO_LIST_STORAGE, JSON.stringify(state))
                        .then(() => {
                                // log a success message after storing the todo list
                                console.log('data stored successfully');
                        })
        } catch (error) {
                console.log(error);
        }
}