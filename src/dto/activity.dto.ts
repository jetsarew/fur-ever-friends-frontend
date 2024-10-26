import { ActivityState } from "@/types/response.type";

export type CreateActivityDto = {
    title: string;
    detail: string;
    startDateTime: string;
    endDateTime: string;
    pickupPoint: string;
    services: CreateServiceDto[]
}

export type CreateServiceDto = {
    petId: string;
    tasks: CreateTaskDto[];
}

export type CreateTaskDto = {
    type: ServiceType;
    detail: string;
}

export type UpdateActivityStateDto = {
    state: ActivityState;
}

export type CreateReviewDto = {
    activityId: string;
    petsitterId: string;
    content: string;
    rating: number;
}

export type InvitePetSitterDto = {
    petsitterId: string;
}

export type CreateProgressDto = {
    progresses: File;
    content: string;
}

export type ServiceType = 'FEEDING' | 'GROOMING' | 'EXERCISING'| 'TRAINING' | 'ADMINISTERING_MEDICATION' | 'RELAXATION';