import { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { addTodo } from "../../store/actions"

export const InputForm =()=>{
    const [ todos ,setTodos ] = useState('')

const dispatch = useDispatch()

const todoChangeHandler =(e)=>{
    setTodos(e.target.value)
}
const submitHandler = (e)=>{
    e.preventDefault()

const todoObj = {
    id:new Date().toString(),
    todo:todos,
}
dispatch(addTodo(todoObj) );
setTodos('');
}

    return(
        <Card>
            <StyledInput type="text" onChange={todoChangeHandler} />
            <Button onClick={submitHandler}>add todo</Button>
        </Card>
    )
}

const Card = styled.div`
    margin-top:7rem ;
  
`



const StyledInput = styled.input`
    width: 30rem;
    padding: 0.5rem;
    outline: none;
    margin-right: 1rem;
    border-radius: 1rem ;
    border: 1px solid gray;
`

const Button = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 10px ;
    background-color: #efd363;
    color: blue;
    font-size: 20px;
    cursor: pointer;


`