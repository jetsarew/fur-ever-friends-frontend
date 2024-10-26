import { ReportType } from "@/dto/report.dto";
import { CredentialType } from "./credential.type";
import { AccountStatus, CommonUserModel, PetSitter, Role } from "./user.type";
import { ServiceType } from "@/dto/activity.dto";

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

export type PetSitterModelResponse = {
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

export type ActivityModelResponse = {
    id: string;
    title: string;
    detail: string;
    createdAt: string;
    updatedAt: string;
    pickupPoint: string;
    price: number | null;
    startDateTime: string;
    endDateTime: string;
    state: ActivityState;
    services: ServiceModelResponse[];
    customer: CustomerModelResponse;
    petsitter: PetSitterModelResponse | null;
    progresses: ProgressModelResponse[];
    request: RequestModelResponse[];
    review: ReviewModelResponse | null;
}

export type ServiceModelResponse = {
    id: string;
    pet: PetActivityModelResponse;
    tasks: TaskModelResponse[];
}

export type TaskModelResponse = {
    id: string;
    type: ServiceType;
    detail: string;
    status: boolean;
    createdAt: string;
}

export type PetActivityModelResponse = {
    id: string;
    name: string;
    breed: {
        id: string;
        name: string;
        animalTypeId: string;
    },
    age: number;
}

export type ProgressModelResponse = {
    id: string;
    createdAt: string;
    image: string[];
    content: string;
}

export type RequestModelResponse = {
    id: string;
    createdAt: string;
    message: string;
    price: number;
    state: ActivityState;
    petsitter: PetSitterModelResponse;
}

export type ReviewModelResponse = {
    id: string;
    content: string;
    rating: number;
    createdAt: string;
}

export type InviteModelResponse = {
    id: string;
    createdAt: string;
    activityId: string;
    petsitterId: string;
    link: string;
}

export type ActivityState = 'PENDING' | 'REJECTED' | 'CANCELLED' | 'ASSIGNED' | 'IN_PROGRESS' | 'RETURNING' | 'FAILED' | 'COMPLETED';
