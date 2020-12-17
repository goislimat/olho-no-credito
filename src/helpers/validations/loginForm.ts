import * as Yup from "yup";

import { emailValidation, passwordValidation } from "./fieldsValidation";

export default Yup.object({
  email: emailValidation,
  password: passwordValidation,
});
