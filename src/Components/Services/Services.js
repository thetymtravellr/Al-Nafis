import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ServiceItems from '../ServiceItems/ServiceItems';

const Services = () => {
  const [user] = useAuthState(auth);

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
            {/* <div className=" w-full max-w-xs overflow-hidden border-2 relative rounded">
                <div className="h-full   ">
                  <div className='w-full h-40 py-6 bg-blue-50'>
                  <img className="h-full mx-auto" src={service1} alt="blog"/>
                  </div>
                  <div className="p-6 text-center">
                    <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                        Regular Checkup
                    </h1>
                    <h2 className='text-4xl text-red-500 font-roboto font-bold my-4'>$69</h2>
                    <p className="leading-relaxed mb-3 font-poppins text-sm">
                    Many Patient Needs Regular Checkups, I Give Them Checkup Based On Their Condition.
                    </p>
                    <div className="">

                    <Link to={`/checkout/${user?.uid}`}>
                   <button className="w-full bg-gradient-to-r  from-orange-300 to-amber-400 font-medium font-roboto hover:scale-105 drop-shadow-md shadow-cla-violate px-4 py-2 rounded">Get Started</button>
                   </Link>
                     
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-full max-w-xs overflow-hidden border-2 relative rounded">
                <div className="h-full   ">
                  <div className='w-full h-40 py-6 bg-blue-50'>
                  <img className="h-full mx-auto" src={service2} alt="blog"/>
                  </div>
                  <div className="p-6 text-center">
                    <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                        Treatment
                    </h1>
                    <h2 className='text-4xl text-red-500 font-roboto font-bold my-4'>$149</h2>
                    <p className="leading-relaxed mb-3 font-poppins text-sm">
                     
                        As A Physician I Give Treatment Which Works Effectively For Any Kind Of Fatal Disease.
                    </p>
                    <div className=" ">

                    <Link to={`/checkout/${user?.uid}`}>
                   <button className="w-full bg-gradient-to-r  from-orange-300 to-amber-400 font-medium font-roboto hover:scale-105 drop-shadow-md shadow-cla-violate px-4 py-2 rounded">Get Started</button>
                   </Link>
                     
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-full max-w-xs overflow-hidden border-2 relative rounded">
                <div className="h-full   ">
                  <div className='w-full h-40 py-6 bg-blue-50'>
                  <img className="h-full mx-auto" src={service3} alt="blog"/>
                  </div>
                  <div className="p-6 text-center">
                    <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                        Surgery
                    </h1>
                    <h2 className='text-4xl text-red-500 font-roboto font-bold my-4'>$225</h2>
                    <p className="leading-relaxed mb-3 font-poppins text-sm">
                         Al Nafis Doing Surgery Effectively For More Then 10+ Years. One Of The Best Of His Time.
                    </p>
                    <div className="">
                       
                    <Link to={`/checkout/${user?.uid}`}>
                   <button className="w-full bg-gradient-to-r  from-orange-300 to-amber-400 font-medium font-roboto hover:scale-105 drop-shadow-md shadow-cla-violate px-4 py-2 rounded">Get Started</button>
                   </Link>
                     
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
        </section>
    );
};

export default Services;