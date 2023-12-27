import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { DropdownValidation } from "../../Validation/DropdownValidation";

const About = () => {
  const [dropdowns, setDropdowns] = useState([{}]);
  const [handleList, setHandleList] = useState([]);
  const fourOptions = [">", "<", "=", ">=", "<="];

  const initialValues = {
    dropdowns: dropdowns.map(() => ({
      type: "",
      condition: "",
      amount: "",
    })),
  };
  // const defaultOptions = [{ value: "Amounts", label: "Amounts" }];

  const handleButtonClick = () => {
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

  const rulesValues = (values) => {
    console.log("Form submitted with Rules Valiues:", values);
  };

  const handleDropdownClick = (index, option) => {
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

  const handleAmountDropdownClick = (index, option) => {
    const updatedHandleList = [...handleList];
    updatedHandleList[index] = option;

    setHandleList(updatedHandleList);
    // console.log(updatedDropdowns);
  };

  return (
    <>
      <div className="mx-4 md:mx-10 xl:mx-12 2xl:container 2xl:mx-auto">
        <div>
          <h1 className="border-b-2 border-gray-500 font-extrabold text-4xl py-4 text-gray-700 text-center">
            About Page
          </h1>
          <h2 className="font-semibold text-4xl my-5 text-gray-700 text-center">
            Rules
          </h2>
        </div>
        <div className=" text-end">
          <button
            onClick={handleButtonClick}
            className="rounded-lg px-3 py-1 overflow-hidden group bg-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300"
          >
            +
          </button>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => rulesValues(values)}
          validationSchema={DropdownValidation}
        >
          {({ handleChange, errors, touched }) => (
            <Form>
              <div className="">
                <div>
                  {dropdowns?.map((dropdown, index) => (
                    <div className="mb-4" key={index}>
                      <div>
                        <Field
                          className="border-2 border-gray-300 rounded-md px-2 py-2 text-sm text-gray-700 focus:ring-gray-00 focus:outline-none focus:ring-2"
                          as="select"
                          name={`dropdowns[${index}].type`}
                          onChange={handleChange}
                          onClick={() => handleDropdownClick(index, "Amount")}
                        >
                          <option hidden>Rules</option>
                          <option value="Amount">Amount</option>
                        </Field>
                        {errors?.dropdowns?.[index]?.type &&
                          touched?.dropdowns?.[index]?.type && (
                            <div className="text-red-500 text-sm">
                              {errors?.dropdowns?.[index]?.type}
                            </div>
                          )}
                      </div>
                      <Second
                        Seconddropdown={
                          errors.dropdowns &&
                          errors.dropdowns[index] &&
                          errors.dropdowns[index].condition
                        }
                        index={index}
                        dropdown={dropdown}
                        handleAmountDropdownClick={handleAmountDropdownClick}
                        fourOptions={fourOptions}
                        handleList={handleList}
                        handleChange={handleChange}
                        error={
                          errors.dropdowns &&
                          errors.dropdowns[index] &&
                          errors.dropdowns[index].amount
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="my-24">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-green-400 hover:ring-2 hover:ring-offset-[3px] hover:ring-green-600 to-lime-400 hover:from-lime-600 hover:to-green-600 transition-all ease-in duration-300 text-white font-bold py-2 px-4 rounded"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

const Second = ({
  handleAmountDropdownClick,
  index,
  fourOptions,
  handleChange,
  handleList,
  dropdown,
  error,
  Seconddropdown,
}) => {
  return (
    <>
      {dropdown.selectedOption === "Amount" && (
        <div>
          <div className="mt-8">
            <Field
              className="border-2 mb-4 border-gray-300 rounded-md px-2 py-2 text-sm text-gray-700 focus:ring-gray-00 focus:outline-none focus:ring-2"
              as="select"
              name={`dropdowns[${index}].condition`}
              onChange={(e) => {
                handleChange(e);
                handleAmountDropdownClick(index, e.target.value);
              }}
              error={Seconddropdown}
            >
              <option hidden>Amount Options</option>
              {fourOptions.map((opts, idx) => (
                <option
                  key={idx}
                  value={opts}
                  hidden={handleList.includes(opts)}
                >
                  {opts}
                </option>
              ))}
            </Field>
          </div>
          {error && (
            <div className="text-red-500 text-sm mb-4">{Seconddropdown}</div>
          )}
          <Field
            name={`dropdowns[${index}].amount`}
            type="number"
            placeholder="Enter Your amount"
            className="px-3  py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          {<div className="text-red-500 text-sm">{error}</div>}
        </div>
      )}
    </>
  );
};

export default About;
