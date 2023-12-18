// Contact.js

import React from "react";

const Contact = () => {
  return (
    <div className="mx-4 md:mx-10 xl:mx-12 2xl:container 2xl:mx-auto">
      <h1 className="font-extrabold text-4xl py-4 text-gray-700 text-center">
        Contact Us
      </h1>
      <p className="text-lg text-gray-600">
        We'd love to hear from you! If you have any questions, suggestions, or
        if there's anything else we can help you with, please feel free to
        contact us.
      </p>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-black mb-4">
          Contact Information
        </h2>
        <p className="text-lg text-black">
          Email:
          <span className="text-lg text-gray-600">info@explore-gujrat.com</span>
        </p>
        <p className="text-lg text-black">
          Phone: <span className="text-lg text-gray-600">+91 123 456 7890</span>
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-black mb-4">
          Send us a Message
        </h2>
        <form>
          <div className="">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border rounded-md py-2 px-3 w-72"
              placeholder="Your Name"
            />
          </div>
          <div className="">
            <label
              for="message"
              className="block mb-2 text-sm mt-5 font-medium text-gray-900"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-96 block p-2.5 mb-5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          <div className="mb-5">
            <button
              type="submit"
              className="bg-blue-500  text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
