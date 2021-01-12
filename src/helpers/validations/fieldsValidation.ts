import * as Yup from "yup";

export const cnpjValidation = Yup.string().length(18).required();
export const emailValidation = Yup.string().email().min(8).required();
export const passwordValidation = Yup.string().min(8).required();
export const phoneValidation = Yup.string().min(14).max(15).required();
export const passwordConfirmationValidation = Yup.string()
  .oneOf([Yup.ref("password")])
  .required();
export const zipCodeValidation = Yup.string().length(9).required();
export const addressValidation = Yup.string().required();
export const addressNumberValidation = Yup.string().required();
export const addressExtrasValidation = Yup.string();
export const neighborhoodValidation = Yup.string().required();
export const cityValidation = Yup.string().required();
export const stateValidation = Yup.string().required();
