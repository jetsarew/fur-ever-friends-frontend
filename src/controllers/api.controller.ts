import { LoginDto, LogoutDto, RegisterDto, UpdateUserWithRoleDto } from "@/dto/auth.dto";
import axiosInstance from "@/services/api.service";

export async function apiController<T>(
  url: string,
  method: "get" | "post" | "put" | "patch" | "delete",
  data?:
    | LoginDto
    | RegisterDto
    | LogoutDto
    | UpdateUserWithRoleDto
    | FormData,
): Promise<T> {
  try {
    const response = await axiosInstance.request({ url, method, data });
    if(response.data.data){
      return response.data.data;
    }
    return response.data;
  } catch (error) {
    const message = (error as Error).message;
    return Promise.reject(message);
  }
}
