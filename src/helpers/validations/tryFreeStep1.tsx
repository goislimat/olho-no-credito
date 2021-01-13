import * as Yup from "yup";
import { cnpjValidation, phoneValidation } from "./fieldsValidation";

export default Yup.object({
  cnpj: cnpjValidation,
  phone: phoneValidation,
});
