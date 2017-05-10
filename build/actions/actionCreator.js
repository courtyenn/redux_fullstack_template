/**
 * actionCreator is the file that gives Redux a blueprint of what each event looks like.
 */

// select a user
export let selectUser = (userId) => {
    console.log('dispatch select user');
    return {
        type: 'SELECT_USER',
        userId
    };
}

// add a todo for a user
export let addTodo = (userId, task) => {
    return {
        type: 'ADD_TODO',
        task,
        userId
    };
}

export let removeTodo = (userId, index) => {
    return {
        type: 'REMOVE_TODO',
        index,
        userId
    };
};