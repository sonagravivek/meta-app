import React from "react";

function Help() {
  return (
    <>
      <div className="mx-4 md:mx-10 xl:mx-12 2xl:container 2xl:mx-auto">
        <h1 className="font-extrabold text-4xl py-4 text-gray-700 text-center">
          Help Page
        </h1>
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Need Help?
          </h2>
          <p className="text-gray-600">
            If you have any questions or need assistance regarding the content
            on this page, please feel free to reach out to our support team at{" "}
            <a href="mailto:support@exploregujrat.com">
              support@exploregujrat.com
            </a>
            .
          </p>
        </div>
        <div className="my-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            <strong>Q: How do I explore specific attractions in Gujrat?</strong>
            <br />
            A: You can navigate to the relevant pages using the menu or search
            for specific locations using our search feature.
          </p>

          <p className="text-gray-600">
            <strong>
              Q: Is there a mobile app available for Explore Gujrat?
            </strong>
            <br />
            A: Currently, we don't have a dedicated mobile app, but our website
            is mobile-friendly and can be accessed on your smartphone or tablet.
          </p>
        </div>
      </div>
    </>
  );
}

export default Help;
