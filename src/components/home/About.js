import React from 'react'
import { Row, Col } from 'antd'


const items = [
    {
        key: '1',
        icon: <i class="fas fa-globe"></i>,
        title: "Global Clients",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        key: '2',
        icon: <i class="fas fa-users"></i>,
        title: "Management",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        key: '3',
        icon: <i class="fas fa-atom"></i>,
        title: "Strategy",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        key: '4',
        icon: <i class="fas fa-cogs"></i>,
        title: "Technical Delivery",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        key: '5',
        icon: <i class="fas fa-laptop-code"></i>,
        title: "Development",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        key: '6',
        icon: <i class="far fa-lightbulb"></i>,
        title: "Creativity",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
]

function About() {
    return (
        <div id="about" className="block aboutBlock">
         <div className="container-fluid ">
            <div className="titleHolder">
                <h2>About Us</h2>
                <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
            </div>
          <div className="contentHolder">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
                <Row gutter={[24, 32]}>
                    {items.map(item => {
                        return(
                            <Col md={{ span: 8 }} key={item.key}>
                                <div className="content">
                                    <div className="icon">
                                        {item.icon}
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
         </div>
        </div>
    )
}

export default About;