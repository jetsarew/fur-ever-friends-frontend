import { apiController } from "@/controllers/api.controller";
import { QualificationDto } from "@/dto/auth.dto";;
import { QualificationModelResponse } from "@/types/user.type";

export const qualificationService = {
    sendQualification: async (
        qualificationRequest: QualificationDto,
    ): Promise<QualificationModelResponse> => {
        const formData = new FormData();
        const { file, ...parsedQualification } = qualificationRequest;
        formData.append("json", JSON.stringify(parsedQualification));
        formData.append("file", file);
        console.log(formData);
        return await apiController("/qualifications", "post", formData);
    },
    getQualifications: async (): Promise<QualificationModelResponse[]> => {
        return await apiController("/qualifications", "get");
    }
}