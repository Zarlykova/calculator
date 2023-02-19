import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { removeTodo } from "../../store/actions";


const ListItem = ()=>{
    const todos = useSelector((state)=>state.todoReducer)
const dispatch = useDispatch()

return(
<div>
    {todos.map(todo=>(
        <div key={todo.id}>
<Text>{todo.todo}</Text>
<Button onClick={()=> dispatch(removeTodo(todo.id))} > delete </Button>

        </div>
        
    ))}
</div>
)

}


export default ListItem;

const Text = styled.p`
background-color:#bad7eb;
width: 30rem;
margin: 2rem auto;
padding: 0.5rem;
font-size: 20px;
border-radius: 10px;


`

const Button = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 10px ;
    background-color: #63b7ef;
    color: blue;
    font-size: 20px;
    cursor: pointer;

`