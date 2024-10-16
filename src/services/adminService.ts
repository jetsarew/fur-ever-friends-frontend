import { apiController } from "@/controllers/api.controller";
import { AccountStatus, CommonUserModel } from "@/types/user.type";

export const adminService = {
    setAccountState: async (
        userId: string,
        accountState: AccountStatus
    ): Promise<CommonUserModel> => {
        return await apiController(`/admin/${userId}/set-account-state/${accountState}`, "get");
    }
}