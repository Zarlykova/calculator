
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import './App.css';
import { InputForm } from './components/inputForm/InputForm';
import ListItem from './components/listItem/ListItem';
import { deleteAllTodos } from './store/actions';

function App() {
const dispatch = useDispatch()

  const deleteAll = ()=>{
dispatch(deleteAllTodos());
  }

  return (
    <div className='App'>
      <InputForm/>
      <ListItem/>
      <Button onClick={deleteAll} >delete all</Button>
    </div>
  );
}

export default App;


const Button = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 10px ;
    background-color:blueviolet;
    color: white;
    font-size: 20px;
    cursor: pointer;
    margin-top: 1rem;

`