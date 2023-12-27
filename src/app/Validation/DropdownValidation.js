import * as Yup from "yup";

export const DropdownValidation = Yup.object().shape({
  dropdowns: Yup.array().of(
    Yup.object().shape({
      type: Yup.string().required("Type is required"),
      condition: Yup.string().required("Condition is required"),
      amount: Yup.number().required("Please Enter Your Amount"),
    })
  ),
});
