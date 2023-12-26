// import React, { useState } from "react";

// const Dropdown = () => {
//   const [dropdowns, setDropdowns] = useState([
//     {
//       isOpen: false,
//       selectedOption: null,
//       showSecondDropdown: false,
//       secondDropdownOption: null,
//     },
//   ]);

//   const options = ["Amount", "Other Options", "kirtan", "vivek", "mehul"];
//   const comparisonOptions = ["<", ">", "=", "=<", "=>"];

//   const toggleDropdown = (index) => {
//     const updatedDropdowns = dropdowns.map((dropdown, i) =>
//       i === index ? { ...dropdown, isOpen: !dropdown.isOpen } : dropdown
//     );
//     setDropdowns(updatedDropdowns);
//   };

//   const handleOptionClick = (index, option) => {
//     let showSecondDropdown = false;
//     if (option === "Amount") {
//       showSecondDropdown = true;
//     }

//     const updatedDropdowns = dropdowns.map((dropdown, i) =>
//       i === index
//         ? {
//             ...dropdown,
//             selectedOption: option,
//             showSecondDropdown,
//             secondDropdownOption: null,
//             isOpen: false,
//           }
//         : dropdown
//     );
//     setDropdowns(updatedDropdowns);
//   };

//   const handleSecondDropdownOption = (index, option) => {
//     const updatedDropdowns = dropdowns.map((dropdown, i) =>
//       i === index ? { ...dropdown, secondDropdownOption: option } : dropdown
//     );
//     setDropdowns(updatedDropdowns);
//   };

//   const addDropdown = () => {
//     setDropdowns([
//       ...dropdowns,
//       {
//         isOpen: false,
//         selectedOption: null,
//         showSecondDropdown: false,
//         secondDropdownOption: null,
//       },
//     ]);
//   };

//   return (
//     <div className="flex-none">
//       {dropdowns.map((dropdown, index) => (
//         <DropdownComponent
//           key={index}
//           dropdown={dropdown}
//           index={index}
//           toggleDropdown={toggleDropdown}
//           handleOptionClick={handleOptionClick}
//           handleSecondDropdownOption={handleSecondDropdownOption}
//           options={options.filter(
//             (opt) => !dropdowns.map((d) => d.selectedOption).includes(opt)
//           )}
//           comparisonOptions={comparisonOptions}
//         />
//       ))}
//       <div className="mt-3">
//         <button className="bg-green-500 px-1" onClick={addDropdown}>
//           ADD
//         </button>
//       </div>
//     </div>
//   );
// };

// const DropdownComponent = ({
//   dropdown,
//   index,
//   toggleDropdown,
//   handleOptionClick,
//   handleSecondDropdownOption,
//   options,
//   comparisonOptions,
// }) => {
//   return (
//     <div className="relative inline-block" key={index}>
//       <div>
//         <button
//           onClick={() => toggleDropdown(index)}
//           type="button"
//           className="inline-flex justify-center w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//           aria-expanded="true"
//           aria-haspopup="true"
//         >
//           {dropdown.selectedOption || "Dropdown"}
//           <svg
//             className="-mr-1 ml-2 h-5 w-5"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//             aria-hidden="true"
//           >
//             <path
//               fillRule="evenodd"
//               d="M10.293 13.293a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L10 11.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 000 1.414z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </button>
//       </div>

//       {dropdown.isOpen && (
//         <div className="origin-top-right absolute mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//           <div className="py-1">
//             {options.map((opt, idx) => (
//               <li
//                 key={idx}
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
//                 onClick={() => handleOptionClick(index, opt)}
//               >
//                 {opt}
//               </li>
//             ))}
//           </div>
//         </div>
//       )}

//       {dropdown.showSecondDropdown && dropdown.selectedOption === "Amount" && (
//         <div>
//           <div className="mt-4">
//             <select
//               value={dropdown.secondDropdownOption || ""}
//               onChange={(e) =>
//                 handleSecondDropdownOption(index, e.target.value)
//               }
//               className="border rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             >
//               <option value="">Second Option</option>
//               {comparisonOptions.map((opt, idx) => (
//                 <option key={idx} value={opt}>
//                   {opt}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <input
//             type="number"
//             placeholder="Enter amount"
//             className="border rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// // export default Dropdown;


// // import React, { useState } from "react";
// // import { Field, Formik, Form } from "formik";

// // const Dropdown = () => {
// //   const [dropdowns, setDropdowns] = useState([
// //     {
// //       isOpen: false,
// //       selectedOption: null,
// //       showSecondDropdown: false,
// //       secondDropdownOption: null,
// //     },
// //   ]);
// //   const comparisonOptions = ["<", ">", "=", "=<", "=>"];
// //   const [secondseleted, setsecondseleted] = useState(comparisonOptions);

// //   const toggleDropdown = (index) => {
// //     const updatedDropdowns = dropdowns.map((dropdown, i) =>
// //       i === index ? { ...dropdown, isOpen: !dropdown.isOpen } : dropdown
// //     );
// //     setDropdowns(updatedDropdowns);
// //   };

// //   const handleOptionClick = (index, option) => {
// //     const updatedDropdowns = dropdowns.map((dropdown, i) =>
// //       i === index
// //         ? {
// //             ...dropdown,
// //             selectedOption: option,
// //             showSecondDropdown: option === "Amount",
// //             secondDropdownOption: null,
// //             isOpen: false,
// //           }
// //         : dropdown
// //     );
// //     setDropdowns(updatedDropdowns);
// //   };

// //   const handleSecondDropdownOption = (index, option) => {
// //     const updatedDropdowns = comparisonOptions.filter(
// //       (opt) => opt !== option && comparisonOptions.includes(opt)
// //     );

// //     // console.log(option);
// //     setsecondseleted(updatedDropdowns);
// //     // console.log(updatedDropdowns);
// //     // console.log(secondseleted);
// //   };
// //   const addDropdown = () => {
// //     setDropdowns([
// //       ...dropdowns,
// //       {
// //         isOpen: false,
// //         selectedOption: null,
// //         showSecondDropdown: false,
// //         secondDropdownOption: null,
// //       },
// //     ]);
// //   };
// //   const initialValues = () => {
// //     dropdowns:[{type:""},{condtion:""},{amount:}]
// //   }
// //   const rulesvalues = (values) => {
// //     console.log(values);
// //     console.log(initialValues);
   
// //   };
// //   return (
// //     <>
// //       <h1 className="text-center text-2xl">Rules </h1>

// //       <div className="mt-3 text-right ">
// //         <button
// //           className="bg-green-500 px-1 rounded-md text-white  "
// //           onClick={addDropdown}
// //         >
// //           ADD
// //         </button>
// //       </div>
// //       <Formik
// //         initialValues={{ initialValues }}
// //         onSubmit={(values) => rulesvalues(values)}
// //       >
// //         {({ values }) => (
// //           <Form>
// //             <div className="grid self-center ">
// //               <div className=" place-content-center ">
// //                 {dropdowns.map((dropdown, index) => (
// //                   <div
// //                     className="relative inline-block  "
// //                     name="type"
// //                     key={index}
// //                   >
// //                     <div>
// //                       <button
// //                         onClick={() => toggleDropdown(index)}
// //                         type="button"
// //                         className="inline-flex justify-center w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700"
// //                         aria-expanded="true"
// //                         aria-haspopup="true"
// //                       >
// //                         {dropdown.selectedOption || "DropDown"}
// //                         <svg
// //                           className="-mr-1 ml-2 h-5 w-5"
// //                           xmlns="http://www.w3.org/2000/svg"
// //                           viewBox="0 0 20 20"
// //                           fill="currentColor"
// //                           aria-hidden="true"
// //                         >
// //                           <path
// //                             fillRule="evenodd"
// //                             d="M10.293 13.293a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L10 11.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 000 1.414z"
// //                             clipRule="evenodd"
// //                           />
// //                         </svg>
// //                       </button>
// //                     </div>

// //                     {dropdown.isOpen && (
// //                       <div
// //                         className="origin-top-right absolute mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
// //                         role="menu"
// //                         aria-orientation="vertical"
// //                         aria-labelledby="dropdown-menu-button"
// //                         tabIndex="-1"
// //                       >
// //                         <div className="py-1" role="none">
// //                           <li
// //                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
// //                             onClick={() => handleOptionClick(index, "Amount")}
// //                           >
// //                             Amount
// //                           </li>
// //                         </div>
// //                       </div>
// //                     )}

// //                     <Second
// //                       index={index}
// //                       dropdown={dropdown}
// //                       handleSecondDropdownOption={handleSecondDropdownOption}
// //                       comditionname="condition"
// //                       comparisonOptions={secondseleted}
// //                       inputname="amount"
// //                     />
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //             <button
// //               type="submit"
// //               className="bg-red-500  text-white px-1 rounded-md mt-5  "
// //             >
// //               Submit
// //             </button>
// //           </Form>
// //         )}
// //       </Formik>
// //     </>
// //   );
// // };

// // const Second = ({
// //   dropdown,
// //   handleSecondDropdownOption,
// //   index,
// //   comparisonOptions,
// //   inputname,
// //   comditionname,
// // }) => {
// //   return (
// //     <>
// //       {dropdown.selectedOption === "Amount" && (
// //         <div className="flex-none">
// //           <div className="mt-4">
// //             <Field
// //               as="select"
// //               name={comditionname}
// //               onChange={(e) =>
// //                 handleSecondDropdownOption(index, e.target.value)
// //               }
// //               className="border rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 "
// //             >
// //               <option value="">Second Option</option>
// //               {comparisonOptions.map((opt, idx) => (
// //                 <option key={idx} value={opt}>
// //                   {opt}
// //                 </option>
// //               ))}
// //             </Field>
// //           </div>
// //           <Field
// //             name={inputname}
// //             type="number"
// //             placeholder="Enter amount"
// //             className="border rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 "
// //           />
// //         </div>
// //       )}
// //     </>
// //   );
// // };

// // export default Dropdown;



// import React, { useState } from "react";
// import { Field, Formik, Form } from "formik";

// const Drropdown = () => {
//   const [dropdowns, setDropdowns] = useState([
//     {
//       isOpen: false,
//       selectedOption: null,
//       showSecondDropdown: false,
//       secondDropdownOption: null,
//     },
//   ]);
//   const comparisonOptions = ["<", ">", "=", "=<", "=>"];
//   const [secondSelected, setSecondSelected] = useState(comparisonOptions);

//   const handleOptionClick = (index, option) => {
//     const updatedDropdowns = dropdowns.map((dropdown, i) =>
//       i === index
//         ? {
//             ...dropdown,
//             selectedOption: option,
//             showSecondDropdown: option === "Amount",
//             secondDropdownOption: null,
//             isOpen: false,
//           }
//         : dropdown
//     );
//     setDropdowns(updatedDropdowns);
//   };

//   const handleSecondDropdownOption = (index, option) => {
//     const updatedDropdowns = comparisonOptions.filter(
//       (opt) => opt !== option && comparisonOptions.includes(opt)
//     );

//     setSecondSelected(updatedDropdowns);
//   };

//   const addDropdown = () => {
//     setDropdowns([
//       ...dropdowns,
//       {
//         isOpen: false,
//         selectedOption: null,
//         showSecondDropdown: false,
//         secondDropdownOption: null,
//       },
//     ]);
//   };

//   const initialValues = {
//     dropdowns: [{ type: "" }, { condition: "" }, { amount: "" }],
//   };

//   const handleSubmit = (values) => {
//     console.log(values); // You can handle form submission logic here
//   };

//   return (
//     <>
//       <h1 className="text-center text-2xl">Rules </h1>

//       <div className="mt-3 text-right ">
//         <button
//           className="bg-green-500 px-1 rounded-md text-white"
//           onClick={addDropdown}
//         >
//           ADD
//         </button>
//       </div>

//       <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//         {({ values, handleChange }) => (
//           <Form>
//             <div className=" ">
//               <div className="gap-6">
//                 {dropdowns?.map((dropdown, index) => (
//                   <div className="relative inline-block" key={index}>
//                     <div>
//                       <Field
//                         name={`dropdowns[${index}].type`}
//                         as="select"
//                         onChange={handleChange}
//                         onClick={() => handleOptionClick(index, "Amount")}
//                       >
//                         <option value="">Rules</option>
//                         <option value="Amount">Amount</option>
//                       </Field>
//                     </div>

//                     <Second
//                       index={index}
//                       dropdown={dropdown}
//                       handleSecondDropdownOption={handleSecondDropdownOption}
//                       comparisonOptions={secondSelected}
//                       inputname={`dropdowns[${index}].amount`}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <button type="submit" className="bg-red-500 text-white px-1 rounded-md mt-5">
//               Submit
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </>
//   );
// };

// const Second = ({
//   dropdown,
//   handleSecondDropdownOption,
//   index,
//   comparisonOptions,
//   inputname,
// }) => {
//   return (
//     <>
//       {dropdown.selectedOption === "Amount" && (
//         <div className="flex-none">
//           <div className="mt-4">
//             <Field
//               as="select"
//               name={`dropdowns[${index}].condition`}
//               onChange={(e) =>
//                 handleSecondDropdownOption(index, e.target.value)
//               }
//               className="border rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2"
//             >
//               <option value="">Second Option</option>
//               {comparisonOptions.map((opt, idx) => (
//                 <option key={idx} value={opt}>
//                   {opt}
//                 </option>
//               ))}
//             </Field>
//           </div>
//           <Field
//             name={inputname}
//             type="number"
//             placeholder="Enter amount"
//             className="border rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2"
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default Drropdown;




////////////code
import React, { useEffect, useState } from "react";
import SelectInput from "../../common/form/SelectInput";
import Input from "../../common/form/Input";
import SearchDropDown from "../../common/form/SearchDropDown";
import { Formik, Form } from "formik";
import { ruleValidationSchema } from "../../utils/ValidationSchema";
import { IoAddCircle } from "react-icons/io5";
import { IoMdTrash } from "react-icons/io";
import userCard from "../../utils/userCard.json";

const initialValuesObj = {
  upiId: "",
  userName: "",
  ruleName: "",
  rules: [{ type: "", condition: "", amount: "" }]
};

const Rules = () => {
  const [initialValues, setInitialValues] = useState(initialValuesObj);
  const [userOptions, setUserOptions] = useState([{ label: "123", value: "124" }]);
  const [selectedConditions, setSelectedConditions] = useState([]);

  useEffect(() => {
    const dropdownValue = userCard?.map((user) => ({
      value: user.name,
      label: user.name
    }));
    setUserOptions(dropdownValue || []);
  }, []);

  const onAddNewRule = (value) => {
   

    value.id = new Date();
    const customValue = [...value.rules];
    customValue.push({ type: "", condition: "", amount: "" });
    setInitialValues({
      userName: value?.userName,
      ruleName: value?.ruleName,
      upiId: value?.upiId,
      rules: customValue
    });
  };

  const submitRule = (values) => {
    console.log(values);
  };

  const ruleOptions = [{ value: "amount", label: "Amount" }];

  const conditionOptions = [
    { value: "<", label: "<" },
    { value: "<=", label: "<=" },
    { value: "=", label: "=" },
    { value: ">", label: ">" },
    { value: ">=", label: ">=" }
  ];

  const deleteRule = (index, values) => {
    const deleteRules = [...values.rules];
    const deletedCondition = deleteRules[index]?.condition;
    setSelectedConditions((prevConditions) =>
      prevConditions.filter((condition) => condition !== deletedCondition)
    );
    deleteRules.splice(index, 1);
    setInitialValues({
      userName: values?.userName,
      ruleName: values?.ruleName,
      upiId: values?.upiId,
      rules: deleteRules
    });
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between gap-8 lg:gap-2 md:items-baseline px-4 py-2 pb-6">
        <h1 className="text-lg font-body black">Create Rule</h1>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={ruleValidationSchema}
        onSubmit={(values) => submitRule(values)}
        enableReinitialize>
        {({ errors, touched, setFieldValue, values }) => (
          <Form>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2">
                <Input
                  type="text"
                  id="ruleName"
                  name="ruleName"
                  placeholder="Rule Name"
                  label="Rule Name"
                />
              </div>
              <div className="w-full md:w-1/2">
                <SearchDropDown
                  id="userName"
                  name="userName"
                  options={userOptions}
                  placeholder="Select user name"
                  label="User name"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 md:mt-4">
              <Input
                type="text"
                id="upiId"
                name="upiId"
                placeholder="Enter your Upi ID"
                label="UPI ID"
              />
            </div>

            <div className="flex flex-row justify-between gap-7 lg:gap-1 md:items-baseline px-4 py-2 ">
              <h1 className="px-5 py-2">Rules Details</h1>
              <div className="flex gap-4">
                <button
                  className="px-5 py-2 rounded-2xl"
                  onClick={() => {
                    onAddNewRule(values);
                  }}>
                  <IoAddCircle className="w-[30px] h-[30px] text-[#428777] " />
                </button>
              </div>
            </div>
            {values?.rules.map((dropdown, index) => (
              <div
                key={dropdown?.id}
                className="flex flex-col border-t border-gray-500 md:border-hidden md:flex-row md:my-5">
                {/* {values.rules.length === 1 ? (
                 ""
               ) : (
                 <div className="relative md:hidden">
                   <button
                     onClick={() => {
                       deleteRule(index, values);
                     }}
                     className="bg-red-400 p-2 rounded-lg  w-[30px] h-[30px] ml-[350px] ">
                     <IoMdTrash className="text-cyan-50 " />
                   </button>
                 </div>
               )} */}
                <div className="flex md:w-1/3">
                  <div className="w-[90%] md:w-full md:mt-4">
                    <SelectInput
                      label="Rule Type"
                      // id={rules[${index}].type}
                      // name={rules[${index}].type}
                      placeholder="Select Type"
                      options={ruleOptions}
                    />
                  </div>
                  {values.rules.length === 1 ? (
                    ""
                  ) : (
                    <div className="w-[10%] md:hidden">
                      <button
                        onClick={() => {
                          deleteRule(index, values);
                        }}
                        className="bg-red-400 p-2 rounded-lg  w-[30px] h-[30px] mt-10 ml-[-2rem]">
                        <IoMdTrash className="text-cyan-50 " />
                      </button>
                    </div>
                  )}
                </div>
                {values.rules[index].type === "amount" && (
                  <>
                    <div className="w-full md:w-1/3 md:mt-4">
                      <SelectInput
                        label="Condition"
                        // id={rules[${index}].condition}
                        // name={rules[${index}].condition}
                        placeholder="Select Condition"
                        options={conditionOptions}
                        hidden={selectedConditions}
                        changeHandle={(v) => {
                          const updatedConditions = [...selectedConditions];

                          if (!updatedConditions.includes(v)) {
                            updatedConditions[index] = v;
                          }

                          setSelectedConditions(updatedConditions);
                        }}
                      />
                    </div>
                    <div className="w-full md:w-1/3 md:mt-4 ">
                      <Input
                        type="number"
                        // id={rules[${index}].amount}
                        // name={rules[${index}].amount}
                        placeholder="Enter Amount"
                        label="Amount"
                      />
                    </div>
                  </>
                )}
                {values.rules.length === 1 ? (
                  ""
                ) : (
                  <div className="md:mt-14">
                    <button
                      onClick={() => {
                        deleteRule(index, values);
                      }}
                      className="bg-red-400 p-2 rounded-lg  w-[30px] h-[30px] hidden md:flex">
                      <IoMdTrash className="text-cyan-50 " />
                    </button>
                  </div>
                )}
              </div>
            ))}
            <div className="flex justify-between gap-8 md:items-baseline px-4 md:px-10 py-2 pb-6">
              <h1></h1>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-gradient-to-tr from-[#428777] to-[#428777]  text-white font-bold py-2 px-4 rounded-2xl">
                  Save
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Rules;




