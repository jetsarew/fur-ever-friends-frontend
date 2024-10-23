import { stringNotEmptyValidator, telValidator } from "@/utils/validator";
import * as yup from "yup";

export type UpdateProfileValues = {
    password?: string;
    firstname?: string;
    lastname?: string;
    phone?: string;
    avatar?: string;
};

export const emptyUpdateProfileValues = {
};

export const updateProfileValidationSchema = yup.object({
  firstname: stringNotEmptyValidator,
  lastname: stringNotEmptyValidator,
  phone: telValidator, 
});
