import React, { useEffect, useState } from 'react';
import ServiceItems from '../ServiceItems/ServiceItems';

const Services = () => {

  const [services, setServices] = useState([]);
  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setServices(data))
  },[])

    return (
        <section id='services' className='min-h-screen  max-w-7xl mx-auto relative pt-20'>
            <h1 className='bg-section-title text-lime-500 w-fit mx-auto px-2 text-center text-3xl font-medium font-patua'>Services</h1>
            <div className='flex flex-wrap justify-center gap-6 mt-20'>
              {
                services.map(service => <ServiceItems
                key={service.id}
                service={service}
                ></ServiceItems>)
              }
            </div>
        </section>
    );
};

export default Services;