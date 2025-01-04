import { apiController } from "@/controllers/api.controller";
import { QualificationDto, UpdateQualificationStateDto } from "@/dto/auth.dto";;
import { QualificationModelResponse } from "@/types/user.type";

export const qualificationService = {
    sendQualification: async (
        qualificationRequest: QualificationDto,
    ): Promise<QualificationModelResponse> => {
        const formData = new FormData();
        const { file, ...parsedQualification } = qualificationRequest;
        formData.append("json", JSON.stringify(parsedQualification));
        formData.append("file", file);
        return await apiController("/qualifications", "post", formData);
    },
    getQualifications: async (): Promise<QualificationModelResponse[]> => {
        return await apiController("/qualifications", "get");
    },
    getQualification: async (
        qualificationId: string
    ): Promise<QualificationModelResponse> => {
        return await apiController(`/qualifications/${qualificationId}`, "get");
    },
    updateQualification: async (
        qualificationId: string,
        updateQualificationRequest: UpdateQualificationStateDto
    ): Promise<QualificationModelResponse> => {
        return await apiController(`/qualifications/${qualificationId}`, "put", updateQualificationRequest);
    },
    deleteQualification: async (
        qualificationId: string
    ): Promise<QualificationModelResponse> => {
        return await apiController(`/qualifications/${qualificationId}`, "delete");
    },
}