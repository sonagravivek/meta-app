import React from "react";

const PlaceCard = ({ imageUrl, title, description }) => (
  <div className="container  text-white mx-auto space-x-3 space-y-3 mt-8 flex flex-wrap justify-around">
    <div
      className="w-full rounded-md bg-cover bg-center relative flex items-center justify-center md:w-1/3 p-5 transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="bg-transparent p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="">{description}</p>
      </div>
    </div>
  </div>
);

export default PlaceCard;
