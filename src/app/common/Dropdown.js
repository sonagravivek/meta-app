import React, { useState } from "react";

const Dropdown = () => {
  const [dropdowns, setDropdowns] = useState([
    {
      isOpen: false,
      selectedOption: null,
      showSecondDropdown: false,
      secondDropdownOption: null,
    },
  ]);

  const toggleDropdown = (index) => {
    const updatedDropdowns = dropdowns.map((dropdown, i) =>
      i === index ? { ...dropdown, isOpen: !dropdown.isOpen } : dropdown
    );
    setDropdowns(updatedDropdowns);
  };

  const handleOptionClick = (index, option) => {
    const updatedDropdowns = dropdowns.map((dropdown, i) =>
      i === index
        ? {
            ...dropdown,
            selectedOption: option,
            showSecondDropdown: option === "Amount",
            secondDropdownOption: null,
            isOpen: false,
          }
        : dropdown
    );
    setDropdowns(updatedDropdowns);
  };

  const handleSecondDropdownOption = (index, option) => {
    const updatedDropdowns = dropdowns.map((dropdown, i) =>
      i === index ? { ...dropdown, secondDropdownOption: option } : dropdown
    );
    setDropdowns(updatedDropdowns);
  };

  const addDropdown = () => {
    setDropdowns([
      ...dropdowns,
      {
        isOpen: false,
        selectedOption: null,
        showSecondDropdown: false,
        secondDropdownOption: null,
      },
    ]);
  };

  return (
    <div className="flex-none">
      {dropdowns.map((dropdown, index) => (
        <div className="relative inline-block" key={index}>
          <div>
            <button
              onClick={() => toggleDropdown(index)}
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              aria-expanded="true"
              aria-haspopup="true"
            >
              {dropdown.selectedOption || "Dropdown"}
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 13.293a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L10 11.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 000 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {dropdown.isOpen && (
            <div
              className="origin-top-right absolute mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="dropdown-menu-button"
              tabIndex="-1"
            >
              <div className="py-1" role="none">
                <li
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleOptionClick(index, "Amount")}
                >
                  Amount
                </li>
              </div>
            </div>
          )}

          {dropdown.showSecondDropdown && (
            <div>
              <div className="mt-4">
                <select
                  value={dropdown.secondDropdownOption || ""}
                  onChange={(e) =>
                    handleSecondDropdownOption(index, e.target.value)
                  }
                  className="border rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Select an option</option>
                  <option value="&lt;">&lt;</option>
                  <option value="&gt;">&gt;</option>
                  <option value="=">=</option>
                  <option value="=&lt;">=&lt;</option>
                  <option value="&gt;=">&gt;=</option>
                </select>
              </div>

              <input
                type="number"
                placeholder="Enter amount"
                className="border rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          )}
        </div>
      ))}
      <div className="mt-3">
        <button className="bg-green-500 px-1  " onClick={addDropdown}>
          ADD
        </button>
      </div>
    </div>
  );
};

export default Dropdown;
