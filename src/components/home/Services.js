import React from 'react'
import { Row, Col } from 'antd'
import { Card } from 'antd';



const items = [
    {
        key: '1',
        title: "UI/UX Design",
        imagesUrl: "https://assets.materialup.com/uploads/db4f95cd-65ed-4af1-afc7-5c5cc6242a63/preview.png"

    },
    {
        key: '2',
        title: "Web Apps Development",
        imagesUrl: "https://tngwebsolutions.ca/wp-content/uploads/2019/12/web-development-trends-2018-header-1.jpg"
    },
    {
        key: '3',
        title: "Mobile Apps Development",
        imagesUrl: "https://www.designveloper.com/wp-content/uploads/2020/06/1_JUSbO0xkXPf2jtYLMSAZ8w.jpeg",
    },
    {
        key: '4',
        title: "SEO",
        imagesUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Emstacks_Ng.jpg",
    },
    {
        key: '5',
        title: "Cloud Applications",
        imagesUrl: "https://architechwpblobstorage.blob.core.windows.net/media/2020/09/cloud-applications-for-business-1-1.jpg",
    },
    {
        key: '6',
        title: "BlockChain Application",
        imagesUrl: "https://ecosave.com.au/wp-content/uploads/sites/3/2021/05/block-chain.jpg",
    },
]


const { Meta } = Card;

function Services() {
    return (
        <div id="services" className="block featureBlock bgGrey">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Services</h2>
                    <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                </div>
                <Row gutter={[24, 32]}>
                        {
                            items.map(item => {
                                return (
                                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                                        <a href="services">
                                    <Card hoverable  key={item.key}>
                                    <img alt="img" src={item.imagesUrl} style={{ width: "100%", height: "200px" }}/>
                                    <Meta title={item.title}/> 
                                    </Card>
                                    </a>
                                    </Col>
                                )
                            })
                        }
                </Row>
                 </div>
        </div>
    )
}

export default Services;