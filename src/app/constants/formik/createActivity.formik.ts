import { stringNotEmptyValidator } from "@/utils/validator";
import * as yup from "yup";

export type CreateActivityValues = {
    title: string;
    detail: string;
    startDateTime: string;
    endDateTime: string;
    pickupPoint: string;
    startDate: string;
    startTime: string;
    endDate: string;
    endTime: string;
};

export const emptyCreateActivityValues = {
    title: "",
    detail: "",
    startDateTime: "",
    endDateTime: "",
    pickupPoint: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
};

export const createActivityValidationSchema = yup.object({
  title: stringNotEmptyValidator,
  detail: stringNotEmptyValidator,
//   startDateTime: stringNotEmptyValidator,
//   endDateTime: stringNotEmptyValidator,
  pickupPoint: stringNotEmptyValidator 
});
