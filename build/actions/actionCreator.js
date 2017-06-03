/**
 * actionCreator is the file that gives Redux a blueprint of what each event looks like.
 */

// only new method needed
export let fetchUsers = (users) => {
    console.log('dispatch fetch user success');
    return {
        type: 'FETCH_USERS_SUCCESS',
        users
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