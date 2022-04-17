import React from 'react';
import doctor from '../../Assets/images/doctor/doctor-hero.png';
import icon1 from '../../Assets/images/icons/download (1).png';
import icon2 from '../../Assets/images/icons/download (2).png';
import icon3 from '../../Assets/images/icons/download (3).png';
import icon4 from '../../Assets/images/icons/download (4).png';
import icon5 from '../../Assets/images/icons/download (5).png';

const Banner = () => {
    return (
        <section id='banner' className='min-h-screen  max-w-7xl mx-auto flex justify-center items-center my-20 lg:my-0 relative'>
         <div className='flex items-center justify-center flex-wrap h-full px-4'>
             <img className='hidden md:block absolute top-60 left-4 -z-40' src={icon1} alt="" />
             <img className='hidden md:block absolute top-32 right-4 -z-40' src={icon2} alt="" />
             <img className='hidden md:block absolute bottom-60 right-12 -z-40' src={icon3} alt="" />
             <img className='hidden md:block absolute bottom-44 right-96 -z-40' src={icon4} alt="" />
             <img className='hidden md:block absolute bottom-12 left-4 -z-40' src={icon5} alt="" />
         <div className='w-full max-w-xl text-center flex flex-col gap-8 order-2 lg:order-1'>
                <h1 className='text-center sm:text-left text-indigo-900 mx-auto'> <span className='text-3xl'>Meet Dr.</span> <br /> <span className='font-bold text-4xl sm:text-6xl'>Ibn Al Nafis</span></h1>
                <p className='text-base text-gray-500 font-poppins '>
                    Dr. Al Nafis Is a Pediatricians, Emergency Physicians and a Neurologists For More Then 20+ Years. Feel better and live better with Dr. Al Nafis's proven, integrative approach.
                </p>
               <div className='flex gap-6 justify-center'>
               <button className='bg-indigo-600 py-2 px-8 text-white text-lg  font-roboto rounded shadow-lg hover:-translate-y-1 transition-all duration-100'>Contact</button>
                <button className='bg-lime-500 py-2 px-6 text-white text-xl  font-roboto rounded shadow-lg hover:-translate-y-1 transition-all duration-100 '>Services</button> 
               </div>
            </div>
            <div className='w-full max-w-xl order-1 lg:order-2'>
                <img className='animate-up-down' src={doctor} alt="" />
            </div>
         </div>
        </section>
    );
};

export default Banner;