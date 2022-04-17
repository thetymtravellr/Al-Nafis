import { ArrowNarrowLeftIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";
import ghost from "../../Assets/images/icons/ghost.png";

const NotFound = () => {
  return (
    <section className="h-[75vh] w-full grid place-content-center my-20 lg:my-0 relative">
      <div className="text-center font-poppins text-gray-500">
        <img className="w-1/4 mx-auto mb-12" src={ghost} alt="" />
        <h1 className="text-4xl font-bold mb-6">Whoops!</h1>
        <p className="text-2xl mb-6">
          We couldn't find the page <br /> you looking for.
        </p>
        <Link to="/" className="flex justify-center">
          <button className="flex gap-3 bg-gray-200 py-3 px-6 rounded-xl hover:bg-gray-300 ">
            <ArrowNarrowLeftIcon className="h-6" /> Go Home
          </button>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
