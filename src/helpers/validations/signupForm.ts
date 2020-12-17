import * as Yup from "yup";
import {
  cnpjValidation,
  emailValidation,
  phoneValidation,
  passwordValidation,
  passwordConfirmationValidation,
} from "./fieldsValidation";

export default Yup.object({
  cnpj: cnpjValidation,
  phone: phoneValidation,
  email: emailValidation,
  password: passwordValidation,
  passwordConfirmation: passwordConfirmationValidation,
});
