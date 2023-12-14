import React from "react";

function Home() {
  return (
    <>
      <div className="bg-gray-100 h-screen">
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
            <p className="text-lg">Explore the world with our amazing place.</p>
          </div>
        </div>

        <div className="container  text-white mx-auto space-x-3 space-y-3 mt-8 flex flex-wrap justify-around">
          <div
            className="w-full bg-cover bg-center relative flex items-center justify-center md:w-1/3 p-4 transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1500622944204-b135684e99fd?q=80&w=1461&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          >
            <div className="bg-transparent p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">Gujarat</h2>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>  <div
            className="w-full bg-cover bg-center relative flex items-center justify-center md:w-1/3 p-4 transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1500622944204-b135684e99fd?q=80&w=1461&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          >
            <div className="bg-transparent p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">Gujarat</h2>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div
            className="w-full bg-cover bg-center relative flex items-center justify-center md:w-1/3 p-4 transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1500622944204-b135684e99fd?q=80&w=1461&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          >
            <div className="bg-transparent p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">Gujarat</h2>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div
            className="w-full bg-cover bg-center relative flex items-center justify-center md:w-1/3 p-4 transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1500622944204-b135684e99fd?q=80&w=1461&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          >
            <div className="bg-transparent p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">Gujarat</h2>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div
            className="w-full bg-cover bg-center relative flex items-center justify-center md:w-1/3 p-4 transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1500622944204-b135684e99fd?q=80&w=1461&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          >
            <div className="bg-transparent p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">Gujarat</h2>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div
            className="w-full bg-cover bg-center relative flex items-center justify-center md:w-1/3 p-4 transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1500622944204-b135684e99fd?q=80&w=1461&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          >
            <div className="bg-transparent p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">Gujarat</h2>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

        </div>

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
