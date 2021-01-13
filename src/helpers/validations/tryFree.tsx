import * as Yup from "yup";
import {
  birthdayValidation,
  cnpjValidation,
  cpfValidation,
  emailConfirmationValidation,
  emailValidation,
  fullNameValidation,
  passwordConfirmationValidation,
  passwordValidation,
  phoneValidation,
} from "./fieldsValidation";

export default Yup.object({
  cnpj: cnpjValidation,
  phone: phoneValidation,
});

export const tryFreeStep3Validation = Yup.object({
  fullName: fullNameValidation,
  cpf: cpfValidation,
  birthday: birthdayValidation,
  email: emailValidation,
  emailConfirmation: emailConfirmationValidation,
  password: passwordValidation,
  passwordConfirmation: passwordConfirmationValidation,
});
