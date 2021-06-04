import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const Work = () => {
    const[isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
        return (
            <div id="work" className="block worksBlock">
                <div className="container-fluid ">
                    <div className="titleHolder">
                        <h2>How It Works</h2>
                        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                    </div>
                    <div className="contentHolder">
                        <Button onClick={showModal}>
                        <i class="fas fa-play"></i>
                    </Button>
                   </div>
                    <Modal title="Company Portfolio" 
                        visible={isModalVisible} 
                        onCancel={handleCancel}
                        footer={null}>
                    <iframe title="iframe" width="100%" height="300px" src="https://www.youtube.com/embed/pWOv9xcoMeY"></iframe>
                    </Modal>
                </div>
            </div>
        )
    }


export default Work;