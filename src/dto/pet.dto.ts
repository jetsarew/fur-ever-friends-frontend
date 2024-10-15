import { Gender } from "@/types/response.type";

export type PetDto = {
    ownerId: string;
    name: string;
    age: number;
    weight: number;
    gender: Gender;
    personality: string;
    allergy: string;
    otherDetail: string;
    animalTypeId: string;
    breedId: string;
    imageUrl: string;
    file: File;
}

export type UpdatePetDto = {
    name?: string;
    age?: number;
    weight?: number;
    gender?: Gender;
    personality?: string;
    allergy?: string;
    otherDetail?: string;
    animalTypeId?: string;
    breedId?: string;
    imageUrl?: string;
    file?: File;
}