import React from "react";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Services from "../../Components/Services/Services";
import Testimonial from "../../Components/Testimonial/Testimonial";

const Home = () => {
  return (
    <main>
         <Header></Header>
      <Banner></Banner>
      <Services></Services>
      <Testimonial></Testimonial>
      <Footer></Footer>

    </main>
  );
};

export default Home;
