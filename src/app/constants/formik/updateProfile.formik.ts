import { stringNotEmptyValidator, telValidator } from "@/utils/validator";
import * as yup from "yup";

export type UpdateProfileValues = {
    password?: string;
    firstname?: string;
    lastname?: string;
    phone?: string;
    quote?: string;
    location?: string;
    about?: string;
    experience?: string;
    avatar?: string;
    coverImages?: string[];
};

export const emptyUpdateProfileValues = {
};

export const updateProfileValidationSchema = yup.object({
  firstname: stringNotEmptyValidator,
  lastname: stringNotEmptyValidator,
  phone: telValidator,
  quote: stringNotEmptyValidator,
  location: stringNotEmptyValidator,
  about: stringNotEmptyValidator,
  experience: stringNotEmptyValidator,  
});
