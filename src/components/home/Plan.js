import React from 'react'
import { List, Card, Button } from 'antd';

const items = [
    {
        title: 'Basic',
        content: [
            {
                price: '$5.99',
                space: '10 GB of space',
                user: '15 Persons',
                access: 'Access from anywhere',
                description: 'quis nostrud exercitation'
            }
        ]
    },
    {
        title: 'Premium',
        content: [
            {
                price: '$14.99',
                space: '25 GB of space',
                user: '25 Persons',
                access: 'Access from anywhere',
                description: 'quis nostrud exercitation'
            }
        ]
    },
    {
        title: 'Standard',
        content: [
            {
                price: '$49.99',
                space: '40 GB of space',
                user: '50 Persons',
                access: 'Access from anywhere',
                description: 'quis nostrud exercitation'
            }
        ]
    }
];

function Plan() {
    return (
        <div id="pricing"  className="block pricingBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Choose Pricing Plan</h2>
                    <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                </div>
                <List
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 1,
                        md: 3,
                        lg: 3,
                        xl: 3,
                        xxl: 3,
                    }}
                    dataSource={items}
                    renderItem={item => (
                        <List.Item>
                            <Card title={item.title}>
                                <p className="large">{item.content[0].price}</p>
                                <p>{item.content[0].space}</p>
                                <p>{item.content[0].user}</p>
                                <p>{item.content[0].access}</p>
                                <p>{item.content[0].description}</p>
                                <Button type="primary" size="large">Get Started</Button>
                            </Card>
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}

export default Plan