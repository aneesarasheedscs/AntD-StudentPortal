import React, { useState , useEffect } from 'react'
import Header from '../Header'
import { toast } from 'react-toastify';
import { FaUserEdit } from 'react-icons/fa'
import profilePicDefault from '../../images/user-profile.jpg'
import { Col, Row } from 'antd';
import { Table } from 'antd';
import { Button, Password, Form, Input, Typography, message , Radio, Checkbox} from "antd";
// import '../../App.css'
import { Link, useNavigate } from 'react-router-dom';
import View from './View';
import TableApp from '../Table';

const  Home = ()=> {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [gender, setGender] = useState('')
  const [img, setImg] = useState(profilePicDefault)
  const [checked, setChecked] = useState(false)


   //convert image
  const getBase64 = (file) =>{
    return new Promise((resolve, reject) =>{
      const reader = new FileReader()//built in function
      reader.onload = () => resolve(reader.result)
      reader.onabort = (error) => reject(error)
      reader.readAsDataURL(file)
    })
  }
 //handle image
 const handleImage = (e) =>{
      const file = e.target.files[0];
      getBase64(file).then((base64 => {
        localStorage["img"] = base64;
        console.debug("File Store", base64);
      }))
 }
  const handleSubmit = e =>{
    e.preventDefault();
    if(name === ""){
      toast.error("Name is required");
    } else if(email === ""){
      toast.error("Email is required");
    } else if ( password === ""){
      toast.error("Password is Required")
    } else {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("gender", gender);
      localStorage.setItem("terms", checked);
      // localStorage.setItem("img", img);
      toast.success("User Saved!")
    }
  }
  
//adding values to table from localstorage
const getDatafromLS = () =>{
  const data = localStorage.getItem("students");
  if(data){
    return JSON.parse(data);
  }
  else {
    return [];
  }
}

   //getting value from local storage
  const [students, setStudents] = useState(getDatafromLS())
  const handleAddUser = e =>{
    e.preventDefault();
      let student = {
        name,
        email,
        gender,
        checked
      }
      setStudents([...students,student]);
      setName('');
      setEmail('');
      setGender('');
      setChecked('');
      console.log(student)
  }
   //saving data to local storage
   useEffect(()=>{
    localStorage.setItem('students',JSON.stringify(students));
  },[students])
 //delete student from LS
 const deleteStudent =(name)=>{
  const filterStudent=students.filter((element,index)=>{
    return element.name !== name
  })
  setStudents(filterStudent)
 }
  return (
    <>
    <Header />
    <div className='container mt-4'>
    <Row gutter={[16, 16]}>
          <Col span={18} >
          
       <div className='contianer content mt-4'>
       <h5> <FaUserEdit/> Add New User </h5>
       <div className='row border p-4'>
          <div className='col-md-6'>
             <Form >
              <Typography.Title><div> Register Now</div></Typography.Title>
              <div className='mb-3'>
                <Form.Item label='User Name' style={{marginTop: "20px"}} name={'myUserName'} 
                  rules={[
                    {  required: true,
                      message: "Please enter User Name",
                    }
                  ]}
                >
                  <Input type="text"  placeholder="Enter User Name" 
                  value={name}  onChange={ e=> setName(e.target.value) }
                    style={{marginTop: "5px"}}>

                  </Input>
                </Form.Item>
                </div>
                <div className='mb-3'>
                <Form.Item label='Email Address' name={'myEmail'}
                  rules={[
                    { required: true,
                      type: "email",
                      message: "Please enter valid email",
                    }
                  ]}
                >
                  <Input type="email"   value={email}  onChange={ e=> setEmail(e.target.value) }
                  placeholder="Enter your email"  >
                  </Input>
                </Form.Item>
                </div>
                <div className='mb-3'>
                <Form.Item label='Password' name={'myPassword'}
                  rules={[
                    { required: true,
                      message: "Please enter your password",
                    }
                  ]}
                >
                  <Input.Password  placeholder="Enter your password" 
                   value={password}  onChange={ e=> setPassword(e.target.value) }
                  > 
                    </Input.Password>
                </Form.Item>
                </div>
                
                <Form.Item label='Gender' name={'myGender'}
                  rules={[
                    { required: true,
                      message: "Please select Gender",
                    }
                  ]}  >
                 <Radio value='Female' defaultChecked={gender === "Female"} onChange={e=> setGender(e.target.value)}>Female</Radio>
                 <Radio value='Male' defaultChecked={gender === "Male"} onChange={e=> setGender(e.target.value)}>Male</Radio>     
                </Form.Item>  
                <div>
                    <p style={{marginTop: "15px", marginBottom: "35px"}}>
                        <Checkbox defaultChecked={checked} value='On'
                        onChange={e=> setChecked(e.target.value)}
                        ></Checkbox> I Accept Terms And Conditions
                    </p>
                </div>
                <Button type="primary" size='large' htmlType="submit" onClick={handleSubmit} block>Login</Button>
                </Form>
                </div>
                <div className='col-md-4 mt-5'>
                  <div className='profile_section mt-3'>
                    <p>Select Profile Picture : </p>
                   
                    <img src={ localStorage.getItem("img")
                      ? localStorage.getItem("img"): profilePicDefault}
                        alt='profile_pic'
                        className='img-thumbnail'
                        height={250}
                        width={250}
                      />
                  </div>
                  <div className='mb-3'>
             
                     <Form.Item label="Default file input example" className='form-label'>
                        <Input style={{width:"250px"}} type='file'
                         name='file' id='formFile'  onChange={handleImage}
                         className='form-control'> 
                        </Input> 
                     </Form.Item>
                  </div>
                </div>
             </div>    
       </div>
          </Col>   
        </Row>      
        </div>
        <div className='container'>
        <Button type="primary" size='large' htmlType="submit" style={{width: 200}} onClick={handleAddUser} 
        block>Add</Button>

        <div className='view-container' >
          {students.length>0&& 
           <>
            <div className='table-responsive mt-3'>
             <table className='table border'>
                  <View students={students} deleteStudent={deleteStudent}/>   
               <thead className='border'>
                 <tr style={{borderBottom: '1px solid grey', background: 'lightblue'}} >
                  <th>Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Checked</th>
                  <th>Delete</th>
                 </tr>
               </thead>
               <tbody>
                 
               </tbody>
             </table>
           </div>
           </>
             }
          {students.length < 1 && <div>NO Student are  added yet</div>}

        </div>
       </div>
    </>
  )
}

export default Home