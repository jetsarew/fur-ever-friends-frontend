import { apiController } from "@/controllers/api.controller"
import { CreateFavoriteDto } from "@/dto/favorite.dto"
import { FavoriteModelResponse } from "@/types/response.type";

export const favoriteService = {
    addToFavorite: async (
        createFavoriteRequest: CreateFavoriteDto
    ) => {
        return await apiController("/favourites", "post", createFavoriteRequest);
    },
    removeFromFavorite: async (
        favoriteId: string
    ) => {
        return await apiController(`/favourites/${favoriteId}`, "delete");
    },
    getMyFavorite: async (): Promise<FavoriteModelResponse[]> => {
        return await apiController("/favourites", "get");
    }
}