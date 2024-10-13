import { apiController } from "@/controllers/api.controller";
import { LoginDto, LogoutDto, RegisterDto } from "@/dto/auth.dto";
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
  logout: async (logoutRequest: LogoutDto) => { //Not works
    console.log(logoutRequest);
    await apiController("/auth/logout", "post", logoutRequest);
  },
};
