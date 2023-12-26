import React, { useState } from "react";
import { Field, Formik, Form } from "formik";
import Schema from "../../../schema/Schema";

const Dropdown = () => {
  const [dropdowns, setDropdowns] = useState([{}]);
  const comparisonOptions = ["<", ">", "=", "=<", "=>"];
  const [handleList, setHandleList] = useState([]);

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
    const updatedHandleList = [...handleList];
    updatedHandleList[index] = option;

    setHandleList(updatedHandleList);
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

  const initialValues = {
    dropdowns: dropdowns.map(() => ({
      type: "",
      condition: "",
      amount: "",
    })),
  };

  const rulesvalues = (values) => {
    console.log(values);
  };

  return (
    <>
      <h1 className="text-center text-2xl">Rules </h1>
      <div className="mt-3 text-right ">
        <button
          className="bg-green-500 px-1 rounded-md text-white"
          onClick={addDropdown}
        >
          ADD
        </button>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => rulesvalues(values)}
        validationSchema={Schema}
      >
        {({ handleChange, errors }) => (
          <Form>
            <div className="gap-6">
              {dropdowns?.map((dropdown, index) => (
                <div className="relative inline-block" key={index}>
                  <div>
                    <select
                      name={`dropdowns[${index}].type`}
                      onChange={handleChange}
                      onClick={() => handleOptionClick(index, "Amount")}
                    >
                      <option hidden>Rules</option>
                      <option value="Amount">Amount</option>
                    </select>
                  </div>
                  <div className="text-red-500">{errors.type}</div>
                  {dropdown.selectedOption === "Amount" && (
                    <Second
                      index={index}
                      Seconddropdown={
                        errors.dropdowns &&
                        errors.dropdowns[index] &&
                        errors.dropdowns[index].condition
                      }
                      handleSecondDropdownOption={handleSecondDropdownOption}
                      comparisonOptions={comparisonOptions}
                      handleList={handleList}
                      handleChange={handleChange}
                      error={
                        errors.dropdowns &&
                        errors.dropdowns[index] &&
                        errors.dropdowns[index].amount
                      }
                    />
                  )}
                </div>
              ))}
            </div>
            <button
              type="submit"
              className="bg-red-500 text-white px-2 rounded-md mt-5"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

const Second = ({
  index,
  handleSecondDropdownOption,
  comparisonOptions,
  handleList,
  handleChange,
  error,
  Seconddropdown,
}) => (
  <div className="flex-none">
    <div className="mt-4">
      <select
        name={`dropdowns[${index}].condition`}
        onChange={(e) => {
          handleChange(e);
          handleSecondDropdownOption(index, e.target.value);
        }}
        error={Seconddropdown}
        className="border rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2"
      >
        <option hidden>Second Option</option>
        {comparisonOptions.map((opt, idx) => (
          <option key={idx} value={opt} hidden={handleList.includes(opt)}>
            {opt}
          </option>
        ))}
      </select>
    </div>
    {error && <div className="text-red-500 text-sm">{Seconddropdown}</div>}
    <Field
      name={`dropdowns[${index}].amount`}
      type="number"
      placeholder="Enter amount"
      className="border rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none"
    />
    {<div className="text-red-500 text-sm">{error}</div>}
  </div>
);
export default Dropdown;
