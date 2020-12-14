import * as Yup from "yup";

import { emailValidation, passwordValidation } from "./fieldValidations";

export default Yup.object({
  email: emailValidation,
  password: passwordValidation,
});
