import { apiController } from "@/controllers/api.controller";
import { LoginDto, RegisterDto } from "@/dto/auth.dto";
import { AuthModelResponse } from "@/types/response.type";

export const authService = {
  register: async (
      registerRequest: RegisterDto,
  ): Promise<AuthModelResponse> => {
      return await apiController(`/auth/register`, "post", registerRequest);
  },
  login: async (loginRequest: LoginDto): Promise<AuthModelResponse> => {
    return await apiController("/auth/login", "post", loginRequest);
  },
  logout: async () => {
    await apiController("/auth/logout", "post");
  },
};
