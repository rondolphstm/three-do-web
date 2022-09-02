import { Modal, Form, Input, Button } from "antd"


export default function SignUp({ setToken, setIsUSer }) {
  const handleSignUp = ({ email, password }) => {
    // post request to api/user
    fetch("http://localhost:5555/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then(response => response.json())
      .then(data =>{
        setToken(data.token)
        localStorage.setItem('token', data.token)
      })
      .catch(err => alert(err.message))
    // setToken
  }
  return (
    <Modal title="Create Account" visible closable={false} footer={null}>
      <Form
        onFinish={handleSignUp}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            sign up
          </Button>
        </Form.Item>
      </Form>
        <p>Already a user?<Button onClick={() => setIsUSer(true)}type={'link'}>Login</Button></p>
    </Modal>
  )
}
