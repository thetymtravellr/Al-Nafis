import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import Services from '../../Components/Services/Services';
import Testimonial from '../../Components/Testimonial/Testimonial';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <Services></Services>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </main>
    );
};

export default Home;