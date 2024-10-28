import { stringNotEmptyValidator } from "@/utils/validator";
import * as yup from "yup";

export type CreateReviewValue = {
    activityId: string;
    petsitterId: string;
    content: string;
    rating: number;
};

export const emptyCreateReviewValue = {
    activityId: "",
    petsitterId: "",
    content: "",
    rating: 5
};

export const createReviewValidationSchema = yup.object({
    content: stringNotEmptyValidator
});
