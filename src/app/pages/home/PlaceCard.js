import React from "react";

const PlaceCard = ({ imageUrl, title, description, alt }) => (
  // <div className=" space-x-3 space-y-3 mt-8">
  <div className="bg-transparent p-6 rounded-lg shadow-md">
    <img src={imageUrl} alt={alt} className="w-full h-60 object-cover " />
    <h2 className="text-2xl font-bold text-blue-400 my-3 font-sans">{title}</h2>
    <p className="text-blue-400">{description}</p>
  </div>
  // {/* </div> */}
);

export default PlaceCard;
