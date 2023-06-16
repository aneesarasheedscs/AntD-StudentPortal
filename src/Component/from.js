import { Button, Divider, Form, Input, Typography, message } from "antd";
import '../App.css'
import {GoogleOutlined, FacebookFilled,TwitterOutlined} from '@ant-design/icons'

function App2(){

  const login= () =>{
    message.success("Login Successful!");
  }
  const onFinish = (e) =>{
      console.log(e)
  }
  return <div className="appBg"> 
     <Form className="loginForm" onFinish={onFinish}>
      <Typography.Title>Student Management System</Typography.Title>
        <Form.Item label='UserName' name={'myUserName'}
          rules={[
            {
              required: true,
              message: "Please enter User Name",
            }
          ]}
        >
          <Input placeholder="Enter User Name" ></Input>
        </Form.Item>
        <Form.Item label='Email' name={'myEmail'}
          rules={[
            {
              required: true,
              type: "email",
              message: "Please enter valid email",
            }
          ]}
        >
          <Input placeholder="Enter your email" style={{ width: '200px', marginLeft: '25px'}}></Input>
        </Form.Item>
        <Form.Item label='Password' name={'myPassword'}
          rules={[
            {
              required: true,
              message: "Please enter your password",
            }
          ]}
        >
          <Input.Password placeholder="Enter your password" ></Input.Password>
        </Form.Item>
        <Button type="primary" htmlType="submit" block>Login</Button>
        <Divider style={{borderColor: "black"}}> or Login with</Divider>
        <div className="socialLogin">
             <GoogleOutlined className="socialIcon" onClick={login} style={{color: "red"}}/>
             <FacebookFilled className="socialIcon" onClick={login} style={{color: "blue"}}/>
             <TwitterOutlined className="socialIcon" onClick={login} style={{color: "cyan"}}/>
        </div>
     </Form>
  </div>
}

export default App2;