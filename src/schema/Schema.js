import * as Yup from "yup";
const Schema = Yup.object().shape({
    dropdowns: Yup.array().of(
      Yup.object().shape({
        type: Yup.string().required("Type is required"), 
          amount: Yup.number().required("Enter  the Amount"),
       condition:Yup.string().required("Select the Condition")
      })
    ),
  });
  
  export default Schema;