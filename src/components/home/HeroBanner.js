import React from 'react'
import { Carousel } from 'antd';
import { Button } from 'antd';


const items = [
    {
        key: '1',
        title: "Web & Mobile Application Development",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        key: '2',
        title: "UI/UX Design",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        key: '3',
        title: "Agile Methodology",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
]

function HeroBanner() {
    return (
        <div id="home"  className="heroBlock">
            <Carousel>
                {items.map(item => {
                    return (
                        <div className="container-fluid" key={item.key}>
                            <div className="content">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <div className="btnHolder">
                                    <Button type="primary" ghost  size="large">
                                        Read More
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Carousel>,
        </div>
    )
}

export default HeroBanner