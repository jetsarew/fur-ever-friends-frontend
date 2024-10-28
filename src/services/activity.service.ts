import { apiController } from "@/controllers/api.controller";
import { CreateActivityDto, CreateProgressDto, InvitePetSitterDto, UpdateActivityStateDto, UpdateTaskStatusDto } from "@/dto/activity.dto";
import { ActivityModelResponse, ProgressModelResponse } from "@/types/response.type";

export const activityService = {
    createActivity: async (
        createActivityRequest: CreateActivityDto
    ): Promise<ActivityModelResponse> => {
        return await apiController(`/activities`, "post", createActivityRequest);
    },
    getActivities: async (): Promise<ActivityModelResponse[]> => {
        return await apiController(`/activities`, "get");
    },
    getMyActivity: async (): Promise<ActivityModelResponse[]> => {
        return await apiController(`/activities/me`, "get");
    },
    getActivitiesByPetSitter: async (): Promise<ActivityModelResponse[]> => {
        return await apiController(`/activities/petsitter`, "get");
    }, 
    getActivityById: async (
        activityId: string
    ): Promise<ActivityModelResponse> => {
        return await apiController(`/activities/${activityId}`, "get");
    }, 
    updateActivityState: async (
        activityId: string,
        updateActivityStateRequest: UpdateActivityStateDto,
    ) => {
        await apiController(`/activities/${activityId}`, "patch", updateActivityStateRequest);
    },
    invitePetSitter: async (
        activityId: string,
        invitePetSitterRequest: InvitePetSitterDto
    ) => {
        return await apiController(`/activities/${activityId}/invite`, "post", invitePetSitterRequest);
    },
    createProgress: async (
        activityId: string,
        createProgressRequest: CreateProgressDto
    ) => {
        const formData = new FormData();
        const { progresses, ...parsedCreateProgressRequest } = createProgressRequest;
        formData.append("json", JSON.stringify(parsedCreateProgressRequest));
        formData.append("progresses", progresses);
        return await apiController(`/activities/${activityId}/progress`, "post", formData);
    },
    getProgressesByActivityId: async (
        activityId: string,
    ): Promise<ProgressModelResponse> => {
        return await apiController(`/activities/${activityId}/progress`, "get");
    },
    updateTaskStatus: async (
        activityId: string,
        taskId: string,
        updateTaskStatusRequest: UpdateTaskStatusDto
    ) => {
        return await apiController(`/activities/${activityId}/task/${taskId}`, "put", updateTaskStatusRequest);
    }
}