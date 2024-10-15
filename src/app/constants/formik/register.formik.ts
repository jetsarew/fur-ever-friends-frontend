import { confirmPasswordValidator, emailValidator, passwordValidator, stringNotEmptyValidator, telValidator } from "@/utils/validator";
import * as yup from "yup";
import { Role } from "@/types/user.type";

export type RegisterValues = {
    email: string;
    password: string;
    confirmPassword?: string;
    firstname?: string;
    lastname?: string;
    phone?: string;
    role: Role;
    certificateUrl?: string;
};

export const emptyRegisterValues = {
  email: "",
  password: "",
  firstname: "",
  lastname: "",
  phone: "",
  role: "CUSTOMER" as Role,
};

export const registerValidationSchema = yup.object({
  email: emailValidator,
  password: passwordValidator,
  confirmPassword: confirmPasswordValidator,
  firstname: stringNotEmptyValidator,
  lastname: stringNotEmptyValidator,
  phone: telValidator
});
