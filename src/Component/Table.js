import React, { useState, useEffect } from 'react';
import { Button, Row, Table } from 'antd';

import View from './Pages/View';

const columns = [
 
  {
    key: "1",
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
     
  },
  { 
    key: '2',
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    responsive: ['lg'],
  },
  {
    key: '3',
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    responsive: ['md'],
  },
  {
    key: '4',
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    responsive: ['md'],
  },
  {
    title: "Actions",
    render:(_record)=>{
        return <>
        <Button> Edit</Button>
        <Button>Delete</Button>
         </>
    }
    
  }
];


const TableApp = () => {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [checked, setChecked] = useState(false)
    
    const getDatafromLS = () =>{
        const data = localStorage.getItem("students");
        if(data){
          return JSON.parse(data);
        }
        else {
          return [];
        }
      }
    
const [students, setStudents] = useState(getDatafromLS())

const handleAddUser = e =>{
    e.preventDefault();

    let student = {
        name,
        email,
        gender,
        checked
      };
      setStudents([...students,student]);
      setName('');
      setEmail('');
      setGender('');
      setChecked('');
      console.log(student)
   
      setDataSource((pre) =>{
        return [...pre, student]
      })
  }
    
   //saving data to local storage
   useEffect(()=>{
    localStorage.setItem('students',JSON.stringify(students));
   },[students])
    const [dataSource ,setDataSource] = useState([
        {
        
        name: 'John',
        email: 'john@gmail.com',
        address: 'john Address',
        gender: "Male"
        },
        {
    
        name: 'James',
        email: 'James@gmail.com',
        address: 'James Address',
        gender: "Male"
        }
     ])
    return (
    <>
    <div className='container mt-3'>
    {/* <h2>Student Table</h2> */}
    <Button onClick={handleAddUser}>Add</Button>
    <Table columns={columns} dataSource={dataSource} >
       
            {
             students.map(student=>(
                <>
                     <Row >{student.name}</Row>
                     <Row >{student.email}</Row>
                     <Row >{student.addres}</Row>
                     <Row >{student.gender}</Row>
                </>     
            ))
          }
        
       
    </Table>
    </div>
    </>
    )
}
   
    

export default TableApp