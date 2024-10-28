import { apiController } from "@/controllers/api.controller"
import { NotificationModelResponse } from "@/types/response.type";

export const notificationService = {
    getNotifications: async (): Promise<NotificationModelResponse[]> => {
        return apiController("/notifications", "get");
    }
}