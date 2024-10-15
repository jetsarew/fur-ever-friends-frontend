import { emailValidator, passwordValidator } from "@/utils/validator";
import * as yup from "yup";

export type LoginValues = {
  email: string;
  password: string;
};

export const emptyLoginValues = {
  email: "",
  password: "",
};

export const loginValidationSchema = yup.object({
  email: emailValidator,
  password: passwordValidator,
});
