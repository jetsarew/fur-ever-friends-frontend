import { emailValidator, passwordValidator } from "@/utils/validator";
import * as yup from "yup";

export type QualificationValues = {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  phone: string;
  file: File | null;
};

export const emptyQualificationValues = {
  email: "",
  password: "12345678",
  firstname: "",
  lastname: "",
  phone: "",
  file: null,
};

export const qualificationValidationSchema = yup.object({
  email: emailValidator,
  password: passwordValidator,
});
