import './App.css';
import TodoList from './components/TodoList';
import {useState} from 'react'

function App() {
  const [tasklist, setTasklist] = useState()
  return (
    <>
    <h1> Three-do </h1>
    <TodoList tasklist={tasklist} setTasklist={setTasklist}/>
    </>
  );
}

export default App;
