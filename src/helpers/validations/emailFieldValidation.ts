import * as Yup from "yup";

export default Yup.string().email().min(8).required();
