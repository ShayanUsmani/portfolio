import React from 'react'
import { Form, Input, Button, Checkbox} from 'antd';

const { TextArea } = Input;


function Contact() {
    return (
        <div>
            <div id="contact" className="block contactBlock">
                <div className="container-fluid">
                    <div className="titleHolder">
                        <h2>Get in Touch</h2>
                        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                    </div>
                </div>
                
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}>

                    <Form.Item
                        name="fullname"
                        rules={[{ required: true, message: 'Please input your full name' }]}>
                        <Input placeholder="Full Name*" />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your email' }]}>
                        <Input
                            type="email"
                            placeholder="Email*"
                        />
                    </Form.Item>

                    <Form.Item
                        name="phone">
                        <Input 
                        defaultValue="+92" 
                        type="phone" 
                        placeholder="Phone" />
                    </Form.Item>

                    <Form.Item
                        name="subject">
                        <Input placeholder="Subject" />
                    </Form.Item>

                    <Form.Item
                        name="message">
                        <TextArea placeholder="Message" />
                    </Form.Item>

                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                            {
                                validator: (_, value) =>
                                    value ? Promise.resolve() : Promise.reject(new Error('Please accept Terms and Conditions')),
                            },
                        ]}>

                        <Checkbox>
                            I have read the <a href="/Terms and Conditions">Terms and Conditions</a>
                        </Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" size="large" htmlType="submit" className="login-form-button">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
               
            </div>
        </div>
    )
}

export default Contact;