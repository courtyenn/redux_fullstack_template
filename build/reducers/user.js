// a reducer takes in two things:
// 1. the action
// 2. copy of current state
// and then returns the new state
// it is a pure function

let users = (state = [], action) => {
    switch(action.type){
        case 'FETCH_USERS_SUCCESS':
            
            return [...action.users, ...state];
        case 'ADD_TODO':
            let cloneArray = state.slice(0);
            // let cloneArray = new Array(state);
            console.log(state.length);
            // for(let i = 0; i < cloneArray.length; i++){
            //     if(state[i].id === action.userId){
            //         state[i].todoList.push(action.task);
            //     }
            // }
            // cloneArray.push(action.task);
            // cloneArray.push(action['task-']);
            // cloneArray.push(action[task]); // does not work..

            cloneArray.forEach(user => {
                console.log(`${user.id} === ${action.userId}`);
                if(user.id === action.userId){
                    user.todoList.push(action.task);
                }
            }); 
            //versus
            // let cloneArray = state.map(user => {
            //     return user;
            // }); // creates a new array
            return cloneArray;
        default:
        return state;
    }
}

export default users;