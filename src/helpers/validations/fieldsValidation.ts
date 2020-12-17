import * as Yup from "yup";

export const cnpjValidation = Yup.string().min(18).max(18).required();
export const emailValidation = Yup.string().email().min(8).required();
export const passwordValidation = Yup.string().min(8).required();
export const phoneValidation = Yup.string().min(14).max(15).required();
export const passwordConfirmationValidation = Yup.string()
  .oneOf([Yup.ref("password")])
  .required();
