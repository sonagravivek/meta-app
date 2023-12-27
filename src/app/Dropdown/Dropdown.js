import React, { useState } from "react";

export const Dropdown = ({ options, dependentOptions, name }) => {
  const [selectedValue, setSelectedValue] = useState("Options");
  const [secondDropdownOpen, setSecondDropdownOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleDropdownClick = (value) => {
    setSelectedValue(value);
    setSecondDropdownOpen(value === "Amounts");
    setSelectedAmount("");
    console.log("Amounts:", value);
  };

  const handleAmountDropdownClick = (value) => {
    setSelectedAmount(value);
    console.log("Amounts Options:", value);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    console.log("Input Value:", value);
  };

  return (
    <>
      <select
        name={name}
        value={selectedValue}
        onChange={(e) => handleDropdownClick(e.target.value)}
        className="border-2 border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:ring-gray-00 focus:outline-none focus:ring-2"
      >
        <option value="Options" disabled hidden label="Options" />
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            label={option.label}
          />
        ))}
      </select>

      {secondDropdownOpen && (
        <div className="mt-8">
          <select
            name={name}
            value={selectedAmount}
            onChange={(e) => handleAmountDropdownClick(e.target.value)}
            className="border-2 border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:ring-gray-00 focus:outline-none focus:ring-2"
          >
            <option value="" disabled hidden>
              Amounts Options
            </option>
            {dependentOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
                label={option.label}
              />
            ))}
          </select>
          <div className="my-4">
            <input
              value={inputValue}
              onChange={handleInputChange}
              type="number"
              className="px-3  py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your amount"
            />
          </div>
        </div>
      )}
    </>
  );
};
