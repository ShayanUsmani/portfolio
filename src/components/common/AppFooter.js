import React from 'react';
import { BackTop } from 'antd';

function AppFooter() {
    return (
        <div className="container-fluid">
            <div className="footer">
                <div className="logo">
                <i class="fas fa-briefcase"></i>
                <a href="home">PORTFOLIO</a>
                </div>
                    <ul className="socials">
                        <li>
                            <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/"><i class="fab fa-youtube"></i></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com"><i class="fab fa-linkedin-in"></i></a>
                        </li>
                    </ul>
                    <div className="copyright">
                        <p>Copyright &copy; 2021 Portfolio. All Right Reserved.</p>
                        <p>Design and Developed by <b><u>Shayan Usmani</u></b></p>
                    </div>
                    <BackTop>
                        <div className="goTop">
                        <i class="fas fa-arrow-circle-up"></i>
                        </div>
                    </BackTop>
            </div>
        </div>
    )
}

export default AppFooter