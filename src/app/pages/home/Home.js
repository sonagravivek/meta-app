import React from "react";
import PlaceCard from "./PlaceCard";

function Home() {
  return (
    <>
      <h1 className="font-extrabold text-4xl py-4 text-gray-700 text-center">
        Home Page
      </h1>
      <div className="bg-gray-100">
        <div
          className="h-96 bg-cover bg-center relative flex items-center justify-center"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/6638603/pexels-photo-6638603.jpeg?auto=compress&cs=tinysrgb&w=600)",
          }}
        >
          <div className="absolute bg-black opacity-50 inset-0"></div>
          <div className="text-center text-white z-10">
            <h1 className="text-4xl font-bold mb-4">
              Make Your Journey In Gujrat
            </h1>
            {/* <p className="text-lg">Explore the world with our amazing place.</p> */}
          </div>
        </div>
      </div>

      <div className="flex mt-6">
        <div className=" rounded-md bg-cover flex bg-center relative  items-center justify-center md:w-1/3 p-5 transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105">
          <PlaceCard
            alt="user"
            title="Somnath"
            description="Shree Somnath is first among the twelve Aadi Jyotirlings of India. It has a strategic location on the western coast of India. The Pran-Pratistha at the existing temple was done on 11th May 1951 by then President of India."
            imageUrl="somnath-temple-compound-21530508.jpg"
          />
        </div>
        <div className=" rounded-md bg-cover flex bg-center relative  items-center justify-center md:w-1/3 p-5 transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105">
          <PlaceCard
            alt="user"
            title="Dwarka"
            description="The main draw for tourists coming to Dwarka, the Dwarkadhish Temple (Jagat Mandir), is believed to have been established more than 2500 years ago by Lord Krishna’s great grandson, Vajranabh. The ancient temple of India."
            imageUrl="Dwarka.jpg"
          />
        </div>
        <div className=" rounded-md bg-cover flex bg-center relative  items-center justify-center md:w-1/3 p-5 transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105">
          <PlaceCard
            alt="user"
            title="Nageshwar"
            description="Nageshwara Jyotirlinga is one of the twelve Jyotirlings, which are temples devoted to Shiva,located in Aundha Nagnath, Hingoli, Maharshtra. Some individuals believe that the Dwarka Shivalinga in gujrat represents the Nageshwara Jyotirlinga"
            imageUrl="Nageshwar.jpg"
          />
        </div>
      </div>

      <div className="container mx-auto mb-10 mt-8 text-center">
        <button className="bg-blue-500 text-white py-2 px-6 rounded-full">
          Get Started
        </button>
      </div>
    </>
  );
}

export default Home;
