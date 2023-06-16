import React from 'react'
import Header from '../Header'
import { Col, Row, Slider } from 'antd';
import image1 from '../../images/pexels-teona-swift-6912825.jpg'
import image2 from '../../images/pexels-edmond-dantès-8068220.jpg'
import image3 from '../../images/pexels-chokniti-khongchum-3938023.jpg'
import image4 from '../../images/pexels-rfstudio-3825539.jpg'
import image5 from '../../images/pexels-rfstudio-3825569.jpg'
import image6 from '../../images/istockphoto-1024531876-1024x1024.webp'
import { Card } from 'antd';
const { Meta } = Card;



const About = () =>{
    return(
        <>
        <Header/>
        <div className='container border mt-5'>
            <div className='m-3 p-2' style={{width: "85rem"}}>
            <Row gutter={[16, 16]} >
                <Col span={6} className=' p-4 m-2 '> 
                <Card
                    hoverable
                    style={{ width: 340 }}
                    cover={<img alt="example" 
                    src={image6} height='300px' />}
                >
                 <Meta title="Smesters System" description="https://education.pk/" />
                </Card>
                </Col>   
                <Col span={6} className='p-4 m-2 ' >
                <Card
                    hoverable
                    style={{ width: 340 }}
                    cover={<img alt="example" 
                    src={image2} height='300px'/>}
                >
                 <Meta title="Digital Marketing" description="https://education.pk/" />
                </Card>
                </Col>
                <Col span={6} className=' p-4 m-2 ' >
                <Card
                    hoverable
                    style={{ width: 340 }}
                    cover={<img alt="example" 
                    src={image1} height='300px'/>}
                >
                 <Meta title="Online Education" description="https://education.pk/" />
                </Card>
                </Col>
                <Col span={6} className=' p-4 m-2 ' >
                <Card
                    hoverable
                    style={{ width: 340 }}
                    cover={<img alt="example" 
                    src={image3} height='300px'/>}
                >
                 <Meta title="Sience classes" description="https://education.pk/" />
                </Card>
                </Col>
                <Col span={6} className=' p-4 m-2 ' >
                <Card
                    hoverable
                    style={{ width: 340 }}
                    cover={<img alt="example" 
                    src={image4} height='300px'/>}
                >
                 <Meta title="Practicle Approach" description="https://education.pk/" />
                </Card>
                </Col>
                <Col span={6} className=' p-4 m-2 ' >
                <Card
                    hoverable
                    style={{ width: 340 }}
                    cover={<img alt="example" 
                    src={image5} height='300px'/>
                
                }
                >
                 <Meta title="Material Education" description="https://education.pk/" />
                </Card>
                </Col>
            </Row>
            </div>
        </div>
        </>
    )
} 

export default About