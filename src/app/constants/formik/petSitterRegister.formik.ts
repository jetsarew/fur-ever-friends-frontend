import { emailValidator, stringNotEmptyValidator, telValidator } from "@/utils/validator";
import * as yup from "yup";
import { Role } from "@/types/user.type";

export type PetSitterRegisterValues = {
    email: string;
    password?: string;
    confirmPassword?: string;
    firstname?: string;
    lastname?: string;
    phone?: string;
    role: Role;
    certificateUrl?: string;
};

export const emptyPetSitterRegisterValues = {
  email: "",
  password: "",
  firstname: "",
  lastname: "",
  phone: "",
  role: "PETSITTER" as Role,
};

export const PetSitterRegisterValidationSchema = yup.object({
  email: emailValidator,
  firstname: stringNotEmptyValidator,
  lastname: stringNotEmptyValidator,
  phone: telValidator
});
