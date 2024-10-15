import { apiController } from "@/controllers/api.controller";
import { PetDto, UpdatePetDto } from "@/dto/pet.dto";
import { PetModelResponse } from "@/types/response.type";

export const petService = {
    createPet: async (
        createPetRequest: PetDto
    ): Promise<PetModelResponse> => {
        const formData = new FormData();
        const { file, ...parsedPetDetail } = createPetRequest;
        formData.append("json", JSON.stringify(parsedPetDetail));
        formData.append("file", file);
        console.log(createPetRequest);
        return await apiController("/pets", "post", formData)
    }, 
    getAllPet: async (): Promise<PetModelResponse[]> => {
        return await apiController("/pets", "get");
    }, 
    getPet: async (
        petId: string
    ): Promise<PetModelResponse> => {
        return await apiController(`/pets/${petId}`, "get");
    },
    getPetsByOwner: async (
        ownerId: string
    ): Promise<PetModelResponse[]> => {
        return await apiController(`/pets/owner/${ownerId}`, "get");
    },
    updatePet: async (
        petId: string,
        updatePetRequest: UpdatePetDto
    ): Promise<PetModelResponse> => {
        const formData = new FormData();
        const { file, ...parsedPetDetail } = updatePetRequest;
        formData.append("json", JSON.stringify(parsedPetDetail));
        if(file) {
            formData.append("file", file);
        }
        console.log(updatePetRequest);
        return await apiController(`/pets/${petId}`, "patch", formData);
    },
    deletePet: async (
        petId: string
    ) => {
        await apiController(`/pets/${petId}`, "delete");
    }
}