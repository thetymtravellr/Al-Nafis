import { StarIcon } from "@heroicons/react/solid";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import React from "react";

const Testimonial = () => {
  return (
    <section
      id="testimonial"
      className="min-h-[50vh]  max-w-7xl mx-auto pt-20"
    >
      <h1 className='bg-section-title text-lime-500 w-fit mx-auto px-2 text-center text-3xl font-medium font-patua'>Testimonials</h1>
      <div className="hidden md:block w-full text-center">
        <div className="w-2/4 mx-auto">
        <Splide
          options={{
            rewind: true,
            width: 600, 
            gap: "1rem",
            pagination: false,
          }}
        >
          <SplideSlide>
            <div className="w-full h-44">
              <div className="p-12">
                <p>What A Privilege to get treatment from Dr. Ibn Al Nafis, a well respected and loved general surgeon from Bangladesh. My Pain has improved and now feeling well</p>
                <div className="flex justify-center items-center mt-2">
                  <StarIcon className="h-4 w-4 text-red-500"/>
                  <StarIcon className="h-4 w-4 text-red-500"/>
                  <StarIcon className="h-4 w-4 text-red-500"/>
                  <StarIcon className="h-4 w-4 text-red-500"/>
                  <StarIcon className="h-4 w-4 text-red-500"/>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className=" w-full h-44">
            <div className="p-12">
                <p>
                  Finally, a Doctor that acutally took the time to explain the tests performed and the results! A huge plus was that he wasn't in a hurry to rush me out.
                </p>
                <div className="flex justify-center items-center mt-2">
                  <StarIcon className="h-4 w-4 text-red-500"/>
                  <StarIcon className="h-4 w-4 text-red-500"/>
                  <StarIcon className="h-4 w-4 text-red-500"/>
                  <StarIcon className="h-4 w-4 text-red-500"/>
                
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className=" w-full h-44">
            <div className="p-12">
                <p>
                  Let me start by saying that i highly recommend Dr. Al Nafis. He has an incredibly excellent bedside manner. He Is very attentive as well as thorough. Willing to listen to his patients as well as make recommendations for the best means of care possible.
                </p>
                <div className="flex justify-center items-center mt-2">
                  <StarIcon className="h-4 w-4 text-red-500"/>
                  <StarIcon className="h-4 w-4 text-red-500"/>
                  <StarIcon className="h-4 w-4 text-red-500"/>
                  <StarIcon className="h-4 w-4 text-red-500"/>
                  <StarIcon className="h-4 w-4 text-red-500"/>
                </div>
              </div>
            </div>
          </SplideSlide>

        </Splide>
          </div>       
 </div>
 <div className="md:hidden block text-center mx-auto ">
 <div className="p-4 border-2">
                <p>What A Privilege to get treatment from Dr. Ibn Al Nafis, a well respected and loved general surgeon from Bangladesh. My Pain has improved and now feeling well</p>
                <div className="flex justify-center items-center mt-2">
                  <StarIcon className="h-4 w-4 text-red-500"/>
                  <StarIcon className="h-4 w-4 text-red-500"/>
                  <StarIcon className="h-4 w-4 text-red-500"/>
                  <StarIcon className="h-4 w-4 text-red-500"/>
                  <StarIcon className="h-4 w-4 text-red-500"/>
                </div>
              </div>
              <div className="p-4 border-2 my-6">
                <p>
                  Let me start by saying that i highly recommend Dr. Al Nafis. He has an incredibly excellent bedside manner. He Is very attentive as well as thorough. Willing to listen to his patients as well as make recommendations for the best means of care possible.
                </p>
                <div className="flex justify-center items-center mt-2">
                  <StarIcon className="h-4 w-4 text-red-500"/>
                  <StarIcon className="h-4 w-4 text-red-500"/>
                  <StarIcon className="h-4 w-4 text-red-500"/>
                  <StarIcon className="h-4 w-4 text-red-500"/>
                  <StarIcon className="h-4 w-4 text-red-500"/>
                </div>
              </div>
              <div className="p-4 border-2">
                <p>
                  Finally, a Doctor that acutally took the time to explain the tests performed and the results! A huge plus was that he wasn't in a hurry to rush me out.
                </p>
                <div className="flex justify-center items-center mt-2">
                  <StarIcon className="h-4 w-4 text-red-500"/>
                  <StarIcon className="h-4 w-4 text-red-500"/>
                  <StarIcon className="h-4 w-4 text-red-500"/>
                  <StarIcon className="h-4 w-4 text-red-500"/>
                
                </div>
              </div>
 </div>
    </section>
  );
};

export default Testimonial;
