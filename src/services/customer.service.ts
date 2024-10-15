import { apiController } from "@/controllers/api.controller";
import { CustomerModelResponse } from "@/types/response.type";

export const customerService = {
    getAllCustomer: async ():Promise<CustomerModelResponse[]> => {
        return await apiController("/customer", "get");
    },
    getCustomer: async (
        customerId: string
    ): Promise<CustomerModelResponse> => {
        return await apiController(`/customer/${customerId}`, "get");
    }
}