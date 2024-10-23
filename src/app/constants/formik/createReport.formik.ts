import { ReportType } from "@/dto/report.dto";
import { stringNotEmptyValidator } from "@/utils/validator";
import * as yup from "yup";

export type CreateReportValues = {
    type: ReportType;
    content: string;
    reporterId: string;
    reportedId: string;
};

export const emptyCreateReportValues = {
    type: "SERVICE_QUALITY" as ReportType,
    content: "",
};

export const createReportValidationSchema = yup.object({
  content: stringNotEmptyValidator, 
});
