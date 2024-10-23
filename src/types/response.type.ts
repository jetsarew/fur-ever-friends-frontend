import { ReportType } from "@/dto/report.dto";
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
    breed: BreedResponse;
    animalType: AnimalResponse;
    owner: Owner;
}

export type CustomerModelResponse = {
    id: string;
    userId: string;
    user: UserModelResponse;
}

export type Gender = "MALE" | "FEMALE";

export type BreedResponse = {
    id: string;
    name: string;
    animalTypeId: string;
}

export type AnimalResponse = {
    id: string;
    name: string;
}

export type Owner = {
    id: string;
    userId: string;
}

export type UserModelResponse = {
    id: string;
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    phone: string;
    refreshToken: string | null;
    role: Role;
    accountStatus: AccountStatus;
    createdAt: string;
}

export type ReportModelResponse = {
    id: string;
    createdAt: string;
    type: ReportType;
    content: string;
    reportImages: string[];
    reporterId: string;
    reportedId: string;
    reporter: UserModelResponse;
    reported: UserModelResponse;
}
