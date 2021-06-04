import React, { useState } from 'react'
import { Anchor, Drawer, Button } from 'antd';


const { Link } = Anchor;

function AppHeader() {

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <div className="container-fluid">
            <div className="header">
                <div className="logo">
                    <i className="fas fa-briefcase" />
                    <a href="home">Portfolio</a>
                </div>
                <div className="mobileHidden">
                <Anchor targetOffset="65">
                            <Link href="#home" title="Home" />
                            <Link href="#about" title="About Us" />
                            <Link href="#services" title="Services" />
                            <Link href="#work" title="How it Works" />
                            <Link href="#faq" title="FAQs" />
                            <Link href="#pricing" title="Pricing" />
                            <Link href="#contact" title="Contact Us" />
                         </Anchor>
                </div>
                <div className="mobileVisible">
                    <Button type="primary" onClick={showDrawer}>
                        <i class="fas fa-bars"></i>
                    </Button>
                    <Drawer
                        placement="right"
                        closable={false}
                        onClose={onClose}
                        visible={visible}
                    >
                        <Anchor targetOffset="65">
                            <Link href="#home" title="Home" />
                            <Link href="#about" title="About Us" />
                            <Link href="#services" title="Services" />
                            <Link href="#work" title="How it Works" />
                            <Link href="#faq" title="FAQs" />
                            <Link href="#pricing" title="Pricing" />
                            <Link href="#contact" title="Contact Us" />
                         </Anchor>
                    </Drawer>
                </div>
            </div>
        </div>
    )
}

export default AppHeader
