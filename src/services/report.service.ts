import { apiController } from "@/controllers/api.controller";
import { CreateReportDto } from "@/dto/report.dto";
import { ReportModelResponse } from "@/types/response.type";

export const reportService = {
    createReport: async (
        createReportRequest: CreateReportDto
    ): Promise<ReportModelResponse> => {
        const formData = new FormData();
        const { reportImages, ...parsedCreateRequest } = createReportRequest;
        formData.append("json", JSON.stringify(parsedCreateRequest));
        if(reportImages) {
            reportImages.forEach((file) => {
                formData.append("reportImages", file);
            })
        }

        return await apiController("/reports", "post", formData);
    },
    getReports: async (): Promise<ReportModelResponse[]> => {
        return await apiController("/reports", "get");
    },
    getReport: async (
        reportId: string
    ): Promise<ReportModelResponse> => {
        return await apiController(`/reports/${reportId}`, "get");
    }
}