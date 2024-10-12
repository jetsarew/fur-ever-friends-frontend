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