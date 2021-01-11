import * as Yup from "yup";
import {
  cnpjValidation,
  emailValidation,
  phoneValidation,
  passwordValidation,
  passwordConfirmationValidation,
  zipCodeValidation,
  addressValidation,
  addressNumberValidation,
  addressExtrasValidation,
  neighborhoodValidation,
  cityValidation,
  stateValidation,
} from "./fieldsValidation";

export default Yup.object({
  cnpj: cnpjValidation,
  phone: phoneValidation,
  email: emailValidation,
  password: passwordValidation,
  passwordConfirmation: passwordConfirmationValidation,
});

export const signupStep2Validation = Yup.object({
  zipCode: zipCodeValidation,
  address: addressValidation,
  number: addressNumberValidation,
  extra: addressExtrasValidation,
  neighborhood: neighborhoodValidation,
  city: cityValidation,
  state: stateValidation,
});
