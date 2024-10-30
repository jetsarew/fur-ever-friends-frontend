import { apiController } from "@/controllers/api.controller";
import { CreateReviewDto } from "@/dto/review.dto";
import { ReviewModelResponse } from "@/types/response.type";

export const reviewService = {
    reviewActivity: async (
        reviewActivityRequest: CreateReviewDto
    ): Promise<ReviewModelResponse> => {
        return apiController(`/reviews`, "post", reviewActivityRequest)
    },
    getReviewByPetSitterId: async (
        petsitterId: string,
    ): Promise<ReviewModelResponse[]> => {
       return await apiController(`/reviews/petsitter/${petsitterId}`, "get");
    },
}