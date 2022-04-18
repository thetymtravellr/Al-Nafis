import React from "react";
import Header from "../../Components/Header/Header";

const About = () => {
  return (
    <>
      <Header></Header>
      <section className="min-h-screen flex items-center justify-center w-full">
        <div className="bg-blue-50 w-11/12 h-full font-poppins py-12 text-justify px-6">
          <div className="w-full max-w-3xl mx-auto">
            <h1 className="text-center   mb-12">
              <span className="font-square text-5xl mr-2">Meet</span>
              <span className="font-patua text-5xl  text-red-400">Robiul</span>
            </h1>

            <h3 className="text-2xl text-center">
              Hi, I’m Robiul. Dhaka Based Web Developer. 
            </h3>
            <br />
            <p className="text-lg">
              I am A Jr Frontend Web Developer. I Like To Upgrade My Self Day By Day. I Have A Plan For Next 6 Month. I Will Learn ReactJS. After That I Will Start Learning NodeJs along with TypeScript. Then I Will Dive Into NextJs. Beside These I Have Good Interest In Python and Django. I Wish I Could Learn Them Soon. Also I Will Be Learning Backend Development After Sometime. I am Working 6-8 Hours Daily For Achieving My Goals As Soon As Possible.
             </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
