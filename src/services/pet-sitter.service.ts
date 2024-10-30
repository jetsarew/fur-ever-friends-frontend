import { apiController } from "@/controllers/api.controller";
import { PetSitterModelResponse } from "@/types/response.type";

export const petsitterService = {
    getAllpetsitter: async (): Promise<PetSitterModelResponse[]> => {
        return await apiController("/petsitter", "get");
    },
    getPetsitter: async (
        petsitterId: string
    ): Promise<PetSitterModelResponse> => {
        return await apiController(`/petsitter/${petsitterId}`, "get");
    }
}