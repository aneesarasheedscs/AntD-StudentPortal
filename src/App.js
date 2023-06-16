import { Button, Divider, Form, Input,  Typography, message } from "antd";
import "./App.css";
import {GoogleOutlined, FacebookFilled,TwitterOutlined} from '@ant-design/icons'
import App2 from "./Component/from";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from "./Component/Header";
import { ToastContainer } from "react-toastify";
import LoginPage from "./Component/Pages/Login";
import Home from "./Component/Pages/Home";
import UserList from "./Component/Pages/UsersList";
import About from "./Component/Pages/About";
import TableApp from "./Component/Table";

function App(){
  return(
  <>
 <div>
 {/* <TableApp />  */}
  <ToastContainer
  position="top-center" autoClose={2000} hideProgressBar={false} 
  newestOnTop={false} closeOnClic rtl={false} pauseOnFocusLoss draggable pauseOnHover />
   
  <Router>
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/header" element={<Home />} />
    <Route path="/userslist" element={<UserList />} />
    <Route path="/about" element={<About />} />
  </Routes>
  </Router>
  
 </div>
 </>
  )
}

export default App;