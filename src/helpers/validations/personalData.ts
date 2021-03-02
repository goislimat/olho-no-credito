import * as Yup from "yup";
import {
  cnpjValidation,
  emailValidation,
  fullNameValidation,
  passwordConfirmationValidation,
  passwordValidation,
  phoneValidation,
} from "./fieldsValidation";

export default Yup.object({
  fullName: fullNameValidation,
  cnpj: cnpjValidation,
  phone: phoneValidation,
  email: emailValidation,
  password: passwordValidation,
  newPassword: passwordValidation,
  newPasswordConfirmation: passwordConfirmationValidation,
});
