import * as Yup from "yup";

export default Yup.object({
  email: Yup.string().email(),
  cnpj: Yup.string().length(18),
});
