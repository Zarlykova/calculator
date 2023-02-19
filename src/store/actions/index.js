export const ADD_TODO = 'ADD_TODO';
export const DELETE_ALL ='DELETE_ALL';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = (payload)=>{
    return{
        type:ADD_TODO,
        payload,
    }
}

export const deleteAllTodos =()=>{
    return{
        type: DELETE_ALL
    }
}

export const removeTodo = payload =>{
    return{
type:REMOVE_TODO,
payload,
    }
}