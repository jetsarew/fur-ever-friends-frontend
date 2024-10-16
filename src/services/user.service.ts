import { apiController } from "@/controllers/api.controller";
import { UpdateUserWithRoleDto } from "@/dto/auth.dto";
import { CreatePetSitterResponse } from "@/types/response.type";
import { CommonUserModel } from "@/types/user.type";

export const userService = {
    createPetSitter: async (
        petSitterEmail: string,
    ): Promise<CreatePetSitterResponse> => {
        return await apiController(`/users/${petSitterEmail}`, "post");
    },
    getAuthUser: async (): Promise<CommonUserModel> => {
        return await apiController("/users/me", "get");
    },
    updateUser: async (
        userId: string,
        updateUserRequest: UpdateUserWithRoleDto
    ): Promise<CommonUserModel> => {
        return await apiController(`/users/update/${userId}`, "patch", updateUserRequest);
    },
    getUser: async (
        userId: string
    ): Promise<CommonUserModel> => {
        return await apiController(`/users/${userId}`, "get");
    },
    getAllUser: async (): Promise<CommonUserModel[]> => {
        return await apiController(`/users`, "get");
    }
}