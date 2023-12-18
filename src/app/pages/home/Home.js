import React from "react";
import PlaceCard from "./PlaceCard";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    {
      imageUrl:
        "https://images.pexels.com/photos/6638603/pexels-photo-6638603.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Explore Gujrat",
      description: "Discover the beauty of Gujrat with our amazing places.",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/7023880/pexels-photo-7023880.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Experience Culture",
      description: "Immerse yourself in the rich culture of Gujrat's heritage.",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/7915296/pexels-photo-7915296.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Adventure Awaits",
      description: "Embark on exciting adventures in the heart of Gujrat.",
    },
  ];

  return (
    <>
      <div className="mx-4 md:mx-10  xl:mx-12  2xl:container 2xl:mx-auto">
        <h1 className="font-extrabold text-4xl py-4 text-gray-700 text-center">
          Home Page
        </h1>
        <div className="bg-gray-100">
          <Slider {...settings}>
            {images.map((slide, index) => (
              <div key={index} className="relative">
                <img
                  src={slide.imageUrl}
                  alt={`Slider Image ${index + 1}`}
                  className="w-full h-96 object-cover sm:h-aut0"
                />
                <div className="absolute bg-black opacity-50 inset-0"></div>
                <div className="text-center text-white z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <h1 className="animate-pulse text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-white to-green-800 text-transparent bg-clip-text">
                    {slide.title}
                  </h1>
                  <p className="animate-pulse text-lg font-medium mb-4 bg-gradient-to-r from-sky-600 to-yellow-300 text-transparent bg-clip-text">
                    {slide.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="flex flex-wrap mt-6">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4 transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105">
            <PlaceCard
              alt="user"
              title="Somnath"
              description="Shree Somnath is first among the twelve Aadi Jyotirlings of India. It has a strategic location on the western coast of India. The Pran-Pratistha at the existing temple was done on 11th May 1951 by then President of India.12 Jyortiling Out of 1."
              imageUrl="somnath-temple-compound-21530508.jpg"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4 transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105">
            <PlaceCard
              alt="user"
              title="Dwarka"
              description="The main draw for tourists coming to Dwarka, the Dwarkadhish Temple (Jagat Mandir), is believed to have been established more than 2500 years ago by Lord Krishna’s great grandson, Vajranabh."
              imageUrl="Dwarka.jpg"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4 transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105">
            <PlaceCard
              alt="user"
              title="Nageshwar"
              description="Nageshwara Jyotirlinga is one of the twelve Jyotirlings, which are temples devoted to Shiva,located in Aundha Nagnath, Hingoli, Maharshtra. Some individuals believe that the Dwarka Shivalinga in gujrat represents the Nageshwara Jyotirlinga"
              imageUrl="Nageshwar.jpg"
            />
          </div>
        </div>
        {/* <div className="flex flex-wrap mt-6">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4 transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105">
            <PlaceCard
              alt="user"
              title="Somnath"
              description="Shree Somnath is first among the twelve Aadi Jyotirlings of India. It has a strategic location on the western coast of India. The Pran-Pratistha at the existing temple was done on 11th May 1951 by then President of India.12 Jyortiling Out of 1."
              imageUrl="somnath-temple-compound-21530508.jpg"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4 transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105">
            <PlaceCard
              alt="user"
              title="Dwarka"
              description="The main draw for tourists coming to Dwarka, the Dwarkadhish Temple (Jagat Mandir), is believed to have been established more than 2500 years ago by Lord Krishna’s great grandson, Vajranabh."
              imageUrl="Dwarka.jpg"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4 transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105">
            <PlaceCard
              alt="user"
              title="Nageshwar"
              description="Nageshwara Jyotirlinga is one of the twelve Jyotirlings, which are temples devoted to Shiva,located in Aundha Nagnath, Hingoli, Maharshtra. Some individuals believe that the Dwarka Shivalinga in gujrat represents the Nageshwara Jyotirlinga"
              imageUrl="Nageshwar.jpg"
            />
          </div>
        </div> */}

        <div className="container mx-auto mb-10 mt-8 text-center">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
