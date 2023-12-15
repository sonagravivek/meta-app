import React, { useEffect, useState } from "react";
import placesData from "../../utils/ placesData.json";
import PlaceCard from "./PlaceCard";

function Home() {
  const [place, setPlace] = useState([]);
  useEffect(() => {
    setPlace(placesData);
  }, []);
  return (
    <>
      <div className="bg-gray-100  h-screen">
        <div
          className="h-64 bg-cover bg-center relative flex items-center justify-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1500622944204-b135684e99fd?q=80&w=1461&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        >
          <div className="absolute bg-black opacity-50 inset-0"></div>
          <div className="text-center text-white z-10">
            <h1 className="text-4xl font-bold mb-4">Make Your Journey</h1>
            {/* <p className="text-lg">Explore the world with our amazing place.</p> */}
          </div>
        </div>

        {place.map((place, index) => (
          <div key={index}>
<div class="grid grid-rows-4 grid-flow-col gap-4">
              <PlaceCard
                title="{place.title}"
                description="{place.description}"
                imageUrl="https://media.istockphoto.com/id/1224021113/photo/indian-cameleers-camel-driver-with-camel-silhouettes-in-dunes-on-sunset-jaisalmer-rajasthan.jpg?s=612x612&w=0&k=20&c=MeF2Dl4ya1NVOWM_I_xo3EPd8E-iazBghYhjiyRaTcU="
              />
            </div>
          </div>
        ))}

        <div className="container mx-auto mt-8 text-center">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
