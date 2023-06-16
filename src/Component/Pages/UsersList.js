import React from "react";
import Header from "../Header";
import profilePicDefault from '../../images/user-profile.jpg';
import { Button, Typography } from "antd";
import { Col, Row, Slider } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;
const Name = localStorage.getItem("name")

const abc = () =>{
      console.log(Name);
}

const UserList = () =>{
     
     return (
      <>
      <Header />
     
        <div className="container content">
            <div className="border mt-4 p-4"> 
            <Typography.Title> <div className="text-center bg-info p-2 mb-3"> Welcome to Student Portal System</div></Typography.Title>
           <div className="row">
             <div className="d-flex">
             <Card
                hoverable
                style={{
                width: 280,
                }}
                cover={<img alt="example" src={ localStorage.getItem("img")
                ? localStorage.getItem("img"): profilePicDefault}
                  className='img-thumbnail'
                  height={300}
                  width={300} />}
            >
                <Meta title="Pakistan Education Systems" description="www.facebook.com" />
             </Card>
              
             <div className="border p-4 m-3" style={{width: "500rem"}}>
                    <Row gutter={[8, 8]}>
                          <h4> Name : { "  " } 
                          { localStorage.getItem("name")
                           ? localStorage.getItem("name"): "Null"
                           } 
                           
                           </h4>    
                            
                    </Row>
                    <Row gutter={[8, 8]}>
                          <h4> Email : { "  " } 
                          { localStorage.getItem("email")
                           ? localStorage.getItem("email"): "Null"} </h4>    
                    </Row>
                    <Row gutter={[8, 8]}>
                          <h4> Password : { "  " } 
                          { localStorage.getItem("password")
                           ? localStorage.getItem("password"): "Null"} </h4>   
                    </Row>
                    <Row gutter={[8, 8]}>
                          <h4> Gender : { "  " } 
                          { localStorage.getItem("gender")
                           ? localStorage.getItem("gender"): "Null"} </h4>  
                            
                    </Row>
                    <Row gutter={[8, 8]}>
                        <p>
                             Accept Terms And Conditions : { " " } 
                             { localStorage.getItem("terms") ? "Yes" : "No"}
                        </p>
                    </Row>
              
              </div>
             </div>
           </div>
            
           
            </div>
        </div>
        <Button type="primary" onClick={abc}>onClick</Button>
        </>
     )
}

export default UserList