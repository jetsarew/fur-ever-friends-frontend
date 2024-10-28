import { serviceFeeValidator, stringNotEmptyValidator } from "@/utils/validator";
import * as yup from "yup";

export type createRequestvalues = {
    activityId: string;
    price: number;
    message: string;
};

export const emptyCreateRequestValues = {
    price: 20,
    message: ""
};

export const createRequestValidationSchema = yup.object({
    message: stringNotEmptyValidator, price: serviceFeeValidator
});
