import { apiController } from "@/controllers/api.controller";
import { PetDto, UpdatePetDto } from "@/dto/pet.dto";
import { AnimalTypeModelResponse, BreedTypeModelResponse, PetModelResponse } from "@/types/response.type";

export const petService = {
    createPet: async (
        createPetRequest: PetDto
    ): Promise<PetModelResponse> => {
        const formData = new FormData();
        const { file, ...parsedPetDetail } = createPetRequest;
        formData.append("json", JSON.stringify(parsedPetDetail));
        formData.append("file", file);
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
    ): Promise<PetModelResponse[]> => {
        return await apiController(`/pets/owner`, "get");
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
    },
    getAnimalType: async (): Promise<AnimalTypeModelResponse[]> => {
        return await apiController("/animal-types", "get");
    },
    getBreeds: async (): Promise<BreedTypeModelResponse[]> => {
        return await apiController("breeds", "get");
    }
}