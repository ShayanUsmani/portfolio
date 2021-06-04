import React from 'react';
import HeroBanner from '../components/home/HeroBanner';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Work from '../components/home/Works';
import Faqs from '../components/home/Faqs';
import Plan from '../components/home/Plan';
import Contact from '../components/home/Contact';


function Home() {
    return (
        <div className="main">
            <HeroBanner />
            <About />
            <Services />
            <Work />
            <Faqs />
            <Plan />
            <Contact />
        </div>
    )
}

export default Home;