import React from 'react'
import { Collapse, Button } from 'antd';

const { Panel } = Collapse;

const items = [
    {
        key: '1',
        question: 'Does your Company offer ongoing help with our new site once its launched?',
        answer: 'Yes, we offer ongoing help with a website that we have created, once launched. However, if your website has been up and running for some time, then we offer further services for a charge.'
    },
    {
        key: '2',
        question: 'What programming language is used for hybrid and native mobile apps?',
        answer: 'When creating a Hybrid app, various programming languages are used, such as Xamarin and React Native. In contrast, when developing Native mobile applications, programming languages such as Swift and Objective C are used for iOS, and Java and Kotlin are used for Android applications.'
    },
    {
        key: '3',
        question: 'What does a simple project cost?',
        answer: 'We are an all-encompassing digital agency that offers highly customized digital solutions to its wide global clientele. All projects we take on have different objectives and requirements; therefore, all our solutions are unique. Consequently, we do not have a standardized pricing system in place. If you are looking for a quote for your project, get in touch with us through our website or social media platforms.'
    },
    {
        key: '4',
        question: 'Which web design platform is right for me?',
        answer: 'Today, there are many web design platforms in the market, and it can be daunting to select one if you’re a beginner or have little to no knowledge about the subject. There is no one best platform for web design; different platforms have different expertise and offer various services, etc. Some are subscription-based such as Wix, Weebly & Squarespace; others are non-subscription based such as Dreamweaver and WordPress. If you are looking to build an eCommerce platform, then web design platforms such as WordPress with WooCommerce, Shopify, or Magento might be useful to you. If you are unsure of which platform is right for you, our team at Digital Gravity can assist you in that regard.'
    },
    {
        key: '5',
        question: 'I am looking for a specific php framework?',
        answer: 'Yes, our web developers are skilled in most of the PHP Frameworks including: Laravel, Symfony, CodeIgniter, Zend Framework, Yii Framework, CakePHP, Slim, Phalcon, FuelPHP, Fat-Free Framework.'
    },
    {
        key: '6',
        question: 'Do you offer ecommerce platform customization and integration services?',
        answer: 'Yes, our ecommerce development team is skilled in most of the Ecommerce Platforms including: WooCommerce, Magento eCommerce, Shopify, BigCommerce, OpenCart, Salesforce Commerce Cloud, OsCommerce, Wix, PrestaShop, Squarespace, 3dcart, Volusion, Weebly, Ecwid, Bigcartel, SuiteCommerce, CoreCommerce, X-Cart, PinnacleCart, CoreCommerce.'
    },

]

function Faqs() {
    return (
        <div id="faq"  className="block faqBlock">
            <div className="container-fluid">
                   <div className="titleHolder">
                        <h2>FAQ's</h2>
                        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                    </div>
                    {
                        items.map(item => {
                            return(
                                <Collapse accordion  key={item.key}>
                                    <Panel header={item.question} key="item">
                                         <p>{item.answer}</p>
                                    </Panel>
                                  </Collapse>
                            )
                        })
                    }
                
            </div>
                <div className="quickSupport">
                    <h3>
                        Want Quick Support
                    </h3>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </p>
                    <a href="mailto: example@example.com">              
                        <Button className="btn-Faqs" type="primary" size="large"><i class="far fa-envelope"></i>Email your Questions</Button>
                    </a>
                </div>
        </div>
    )
}

export default Faqs;