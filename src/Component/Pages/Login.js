import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Button, Divider, Form, Input, Typography, message } from "antd";
import '../../App.css'
import {GoogleOutlined, FacebookFilled,TwitterOutlined} from '@ant-design/icons'


const LoginPage = () => {
   const [email ,  setEmail] = useState('')
   const [password ,  setPassword] = useState('')
   const navigate = useNavigate()

   const userEmail = localStorage.getItem("email")
    ? localStorage.getItem("email") : 
    "aneesa@gmail.com"
   const userPassword = localStorage.getItem("password")
    ? localStorage.getItem("password") : 
    "12345"

    const login= () =>{
        message.success("Login Successful!");
       }
    //   const onFinish = (e) =>{
    //       console.log(e)
    //   }
      const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(e)
        if(email === userEmail && password === userPassword){
             toast.success("Login Success");
             console.log(email)
               navigate("/header");
        } else {
            toast.error("Invalid Email OR Password")
        }

      }
        
  
  return ( 
    <>
  <div className="appBg" > 
     <Form className="loginForm" >
      <Typography.Title><center> Student Portal</center></Typography.Title>
        {/* <Form.Item label='UserName' name={'myUserName'}
          rules={[
            {
              required: true,
              message: "Please enter User Name",
            }
          ]}
        >
          <Input type="text"  placeholder="Enter User Name" ></Input>
        </Form.Item> */}
        <Form.Item label='Email' name={'myEmail'}
          rules={[
            {
              required: true,
              type: "email",
              message: "Please enter valid email",
            }
          ]}
        >
          <Input type="email" value={email} onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email" 
          style={{ width: '200px', marginLeft: '25px'}}>

          </Input>
        </Form.Item>
        <Form.Item label='Password' name={'myPassword'}
          rules={[
            {
              required: true,
              message: "Please enter your password",
            }
          ]}
        >
          <Input.Password value={password} onChange={e=> setPassword(e.target.value)}
          placeholder="Enter your password" >

          </Input.Password>
        </Form.Item>
        <Button type="primary" htmlType="submit" onClick={handleSubmit} block>Login</Button>
        <div>
            <p style={{marginTop: "15px", marginBottom: "35px"}}>
                Don't Have An Account? <Link to="/">Signup !</Link>
            </p>
        </div>
        <Divider style={{borderColor: "black"}}> or Login with</Divider>
        <div className="socialLogin">
             <GoogleOutlined className="socialIcon" onClick={login} style={{color: "red"}}/>
             <FacebookFilled className="socialIcon" onClick={login} style={{color: "blue"}}/>
             <TwitterOutlined className="socialIcon" onClick={login} style={{color: "cyan"}}/>
        </div>
     </Form>
     </div>
     </>
    
    )
}

export default LoginPage