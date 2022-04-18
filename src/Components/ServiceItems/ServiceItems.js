import React from 'react';
import { Link } from 'react-router-dom';

const ServiceItems = ({ service }) => {
    const { id,title,desc,price,img} = service;
    return (
        <div className=" w-full max-w-xs overflow-hidden border-2 relative rounded">
                <div className="h-full   ">
                  <div className='w-full h-40'>
                  <img className="w-full h-full object-cover" src={img} alt="blog"/>
                  </div>
                  <div className="p-6 text-center">
                    <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                        {title}
                    </h1>
                    <h2 className='text-4xl text-red-500 font-roboto font-bold my-4'>${price}</h2>
                    <p className="leading-relaxed mb-3 font-poppins text-sm">
                    {desc}
                    </p>
                    <div className="">
                    <Link to={`/checkout/${id}`}>
                   <button className="w-full bg-gradient-to-r  from-orange-300 to-amber-400 font-medium font-roboto hover:scale-105 drop-shadow-md shadow-cla-violate px-4 py-2 rounded">Get Started</button>
                   </Link>
                     
                    </div>
                  </div>
                </div>
              </div>
    );
};

export default ServiceItems;