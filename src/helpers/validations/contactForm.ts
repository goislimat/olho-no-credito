import * as Yup from "yup";
import { emailValidation, phoneValidation } from "./fieldsValidation";

export default Yup.object({
  fullName: Yup.string(),
  email: emailValidation,
  phone: phoneValidation,
  message: Yup.string().required(),
});
