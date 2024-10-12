import { CredentialType } from "./credential.type";
import { AccountStatus, CommonUserModel, PetSitter, Role } from "./user.type";

export type AuthModelResponse = {
    token: CredentialType;
    user: CommonUserModel;
};

export type CreatePetSitterResponse = {
    id: string;
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    phone: string;
    refreshToken: string | null;
    role: Role;
    accountStatus: AccountStatus;
    petsitter: PetSitter;
}

export type PetModelResponse = {
    id: string;
    name: string;
    age: number;
    weight: number;
    imageUrl: string;
    gender: Gender;
    personality: string;
    allergy: string;
    otherDetail: string;
    animalTypeId: string;
    breedId: string;
    ownerId: string;
    breed: Breed;
    animalType: AnimalType;
    owner: Owner;
}

export type Gender = "MALE" | "FEMALE";

export type Breed = {
    id: string;
    name: string;
    animalTypeId: string;
}

export type AnimalType = {
    id: string;
    name: string;
}

export type Owner = {
    id: string;
    userId: string;
}