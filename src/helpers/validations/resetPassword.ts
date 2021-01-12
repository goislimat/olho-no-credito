import * as Yup from "yup";
import {
  passwordValidation,
  passwordConfirmationValidation,
} from "./fieldsValidation";

export default Yup.object({
  password: passwordValidation,
  passwordConfirmation: passwordConfirmationValidation,
});
