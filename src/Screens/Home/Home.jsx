import React from 'react';

// components
import GetStarted from '../../Components/Home/GetStarted';
import Features from '../../Components/Home/Features';
import Services from '../../Components/Home/Services';
import Footer from '../../Components/Home/Footer';

const Home = () => {
    return (
        <div className="home__screen">
            <GetStarted />
            <Features />
            <Services />
            <Footer />
        </div>
    )
}

export default Home
