import './App.css';
import {Layout, Menu} from 'antd'
import TodoList from './components/TodoList';
import AddTask from './components/AddTask';
import SignUp from './components/Signup'
import {useState, useEffect} from 'react'

const {Header, Content, Footer} = Layout

function App() {
  const [taskList, setTaskList] = useState()
  const [token, setToken] = useState()
  const[isUser , setIsUser] = useState()
  useEffect(()=>{
    if(localStorage.getItem("token")){
      setToken(localStorage.getItem("token"))
    }
  },[setToken])
  return (
    <Layout className="layout">
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Three-Do</Menu.Item>
          <Menu.Item key="2">Login</Menu.Item>
          <Menu.Item key="3">Sign Up</Menu.Item>
        </Menu>
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <div className="site-layout-content">
          <h1>Three-do</h1>
          <TodoList token={token} taskList={taskList} setTaskList={setTaskList} />
          <AddTask token={token} setTaskList={setTaskList} />
          {!token && 
          isUser
          <setToken={setToken}/>
          <SignUp setToken={setToken}/>
          }
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Three-Do ©2022 Created by Rondolph st.martin
      </Footer>
    </Layout>
  );
}

export default App;
