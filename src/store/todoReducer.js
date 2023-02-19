import { ADD_TODO, DELETE_ALL, REMOVE_TODO } from "./actions"

const initState = [
    {
        id:1,
        todo:"React"
    },
    {
        id:2,
        todo:"JS"
    },
]

export const todoReducer =(state = initState , action )=>{
switch(action.type){
    case ADD_TODO:
        return [
            ...state,
            action.payload
        ];

        case DELETE_ALL:
            return [];

        case REMOVE_TODO:
            const filteredTodos=state.filter((todo)=>todo.id !== action.payload)
            return filteredTodos;

        default:
            return state;
}
}