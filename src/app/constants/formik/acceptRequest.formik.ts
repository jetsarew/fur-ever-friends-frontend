import { stringNotEmptyValidator } from "@/utils/validator";
import * as yup from "yup";

export type AcceptRequestValue = {
    requestId: string;
    name: string;
    expiration: string;
    cvc: string;
    cardNumber: string;
};

export const emptyAcceptRequestValue = {
    requestId: "",
    name: "",
    expiration: "",
    cvc: "",
    cardNumber: "",
};

export const acceptRequestValidationSchema = yup.object({
    name: stringNotEmptyValidator,
    expiration: stringNotEmptyValidator,
    cvc: stringNotEmptyValidator,
    cardNumber: stringNotEmptyValidator,
});
