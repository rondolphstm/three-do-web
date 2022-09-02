import { useEffect, useState } from "react"
import { List, Alert } from "antd"
import TodoListCard from "./TodoListCard"

export default function TodoList({ taskList, setTaskList, token }) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  // call the api and use setTasklist to fill in state....
  useEffect(() => {
        fetch("http://localhost:5555/tasks", {
        headers:{
            'Authorization': token, 

        }
    })
      .then(results => results.json())
      .then(task => {
        setTaskList(task)
        setLoading(false)
        setError("")
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [token, setTaskList, setLoading, setError])

  return (
    <>
      {(error && token) &&
        <Alert message="Error" description={error} type="error" showIcon />}
      <div className="task-list">
        <List
          dataSource={taskList}
          loading={loading}
          renderItem={(item) => (
            <TodoListCard
              key={item.id}
              item={item}
              token={token}
              setLoading={setLoading}
              setTaskList={setTaskList}
              setError={setError}
            />
          )}
        />
      </div>
    </>
  )
}
