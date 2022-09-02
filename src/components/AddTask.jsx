import { useState } from 'react'
import { Input } from 'antd'
const { Search } = Input

export default function AddTask({ setTaskList, token }) {
    const [task, setTask] = useState('')
  const addTask = () => {
  // const addTask = () => {
    fetch("http://localhost:5555/tasks", {
      // how to add a post...
      method: "POST",
    //   mode: 'cors', // how to fix cors issues and "mode:cors"
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      },
      body: JSON.stringify({ task, done: false }),
    })
      .then((results) => results.json())
      .then((data) => {
        setTaskList(data);
        setTask('')
        // you'll see...
      })
      .catch(console.error)
  }
  return(
    <div className ='add-task'>
  <Search
   value = {task}
   onChange = {e => setTask(e.target.value)}
   enterButton="Add" 
   size="large"
   onSearch={addTask}
    />
    </div>
 )
}
