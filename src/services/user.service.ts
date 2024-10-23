import { apiController } from "@/controllers/api.controller";
import { UpdatePetOwnerDto, UpdatePetSitterDto } from "@/dto/auth.dto";
import { CreatePetSitterResponse } from "@/types/response.type";
import { CommonUserModel } from "@/types/user.type";

export const userService = {
    createPetSitter: async (
        petSitterEmail: string,
    ): Promise<CreatePetSitterResponse> => {
        return await apiController(`/users/petsitter/${petSitterEmail}`, "post");
    },
    getAuthUser: async (): Promise<CommonUserModel> => {
        return await apiController("/users/me", "get");
    },
    updatePetOwner: async (
        userId: string,
        updatePetOwnerRequest: UpdatePetOwnerDto
    ): Promise<CommonUserModel> => {
        const formData = new FormData();
        const { avatarFile, ...parsedUpdateRequest } = updatePetOwnerRequest;
        formData.append("json", JSON.stringify(parsedUpdateRequest));
        console.log(parsedUpdateRequest);
        if(avatarFile) {
            formData.append("avatar", avatarFile);
        }
        return await apiController(`/users/customer/${userId}`, "patch", formData);
    },
    updatePetSitter: async (
        userId: string,
        updatePetSitterRequest: UpdatePetSitterDto
    ): Promise<CommonUserModel> => {
        const formData = new FormData();
        const { avatarFile, coverImageFile, ...parsedUpdateRequest } = updatePetSitterRequest;
        formData.append("json", JSON.stringify(parsedUpdateRequest));
        console.log(parsedUpdateRequest);
        if(avatarFile) {
            formData.append("avatar", avatarFile);
        }
        if(coverImageFile) {
            coverImageFile.forEach((file) => {
                formData.append("coverImage", file);
            })
        }
        console.log(formData.values);
        return await apiController(`/users/petsitter/${userId}`, "patch", formData);
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