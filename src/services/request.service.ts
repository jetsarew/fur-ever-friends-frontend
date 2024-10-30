import { apiController } from "@/controllers/api.controller";
import { CreateRequestDto } from "@/dto/request.dto";
import { FormattedRequestModelResponse, RequestModelResponse } from "@/types/response.type";

export const requestService = {
    createRequest: async (
        createRequestDto: CreateRequestDto
    ) :Promise<RequestModelResponse> => {
        return await apiController("/requests", "post", createRequestDto);
    },
    acceptRequest: async (
        requestId: string
    ) => {
        return await apiController(`/requests/${requestId}/accept`, "patch");
    },
    getRequestedActivity: async (): Promise<FormattedRequestModelResponse[]> => {
        return await apiController(`/requests/petsitter`, "get");
    }
}