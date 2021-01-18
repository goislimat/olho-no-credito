import * as Yup from "yup";

import { emailValidation, fullNameValidation } from "./fieldsValidation";

export default Yup.object({
  fullName: fullNameValidation,
  email: emailValidation,
});
