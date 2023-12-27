import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export const SecondDropdown = () => {
  const [secondSelectedValue, setSecondSelectedValue] =
    useState("Amounts Opts");

  const handleAmountsItemClick = (value) => {
    setSecondSelectedValue(value);
    // console.log(`Selected: ${value}`);
  };

  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex tracking-[1px] w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            {secondSelectedValue}
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Menu.Items className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              <a
                href="#"
                onClick={() => handleAmountsItemClick(">")}
                // onChange={() => handleChange()}
                className="px-4 py-2 text-gray-700 hover:text-gray-900 text-left text-sm bg-white hover:bg-gray-100 w-full block"
              >
                {">"}
              </a>
            </Menu.Item>
            <Menu.Item>
              <a
                href="#"
                onClick={() => handleAmountsItemClick("<")}
                // onChange={() => handleChange()}
                className="px-4 py-2 text-gray-700 hover:text-gray-900 text-left text-sm bg-white hover:bg-gray-100 w-full block"
              >
                {"<"}
              </a>
            </Menu.Item>
            <Menu.Item>
              <a
                href="#"
                onClick={() => handleAmountsItemClick("=<")}
                // onChange={() => handleChange()}
                className="px-4 py-2 text-gray-700 hover:text-gray-900 text-left text-sm bg-white hover:bg-gray-100 w-full block"
              >
                {"=<"}
              </a>
            </Menu.Item>
            <Menu.Item>
              <a
                href="#"
                onClick={() => handleAmountsItemClick("=>")}
                // onChange={() => handleChange()}
                className="px-4 py-2 text-gray-700 hover:text-gray-900 text-left text-sm bg-white hover:bg-gray-100 w-full block"
              >
                {"=>"}
              </a>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    </>
  );
};
