import { ServiceType } from "@/dto/activity.dto";
import { ActivityModelResponse, ReviewModelResponse } from "./response.type";
import { AnimalTypeTag } from "@/dto/auth.dto";

export type CommonUserModel = {
    id: string;
    email: string;
    firstname: string;
    lastname: string;
    avatar: string;
    phone: string;
    refreshToken: string;
    accountStatus: AccountStatus;
    role: Role;
    createdAt: string;
    customer?: Customer;
    petsitter?: PetSitter;
    admin?: Admin;
};

export type Customer = {
    id: string;
    userId: string;
    pet: Pet[];
    activities: ActivityModelResponse[];
}

export type PetSitter = {
    id: string;
    location: string;
    quote: string;
    about: string;
    experience: string;
    userId: string;
    coverImages: string[];
    information: string;
    rating: number;
    certificateUrl: string;
    reviews: ReviewModelResponse[];
    serviceTags: ServiceType[];
    petTags: AnimalTypeTag[];
    activities: ActivityModelResponse[];
}

export type Admin = {
    id: string;
    userId: string;
}

export type Pet = {
    id: string;
}

export type Review = {
    id: string;
    createdAt: string;
    rating: number;
    activityId: string;
    customer: {
        id: string;
        user: {
            id: string;
            firstname: string;
            lastname: string;
            avatar: string;
            email: string;
        }
    };
}

export type QualificationModelResponse = {
    id: string;
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    phone: string;
    state: "PENDING" | "ACCEPTED" | "REJECTED";
    certificateUrl: string;
    createdAt: string;
}

export type AccountStatus = "ACTIVE" | "INACTIVE" | "BANNED";
export type Role = "CUSTOMER" | "PETSITTER" | "ADMIN";
