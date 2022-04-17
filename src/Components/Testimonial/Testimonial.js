import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import React from 'react';

const Testimonial = () => {
    
    return (
        <section id='banner' className='min-h-screen  max-w-7xl mx-auto relative pt-20'>
        <div>
        <Splide options={ {
    rewind: true,
    width : 400,
    gap   : '1rem',
  } }
>
  
  <SplideSlide>
    <img src="https://images.unsplash.com/photo-1650169075825-1ee9efe6e66a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1251&q=80" alt=""/>
  </SplideSlide>
  <SplideSlide>
    <img src="https://images.unsplash.com/photo-1621403173866-5c96e3e4d601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt=""/>
  </SplideSlide>
</Splide>
        </div>
        </section>
    );
};



export default Testimonial;