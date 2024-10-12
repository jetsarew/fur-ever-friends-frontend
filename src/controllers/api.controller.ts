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
    if((method == "get" && (url == "/qualifications" || url.startsWith("/pets"))) || 
  (method == "patch" && (url.startsWith("/pets"))) || 
  (method == "post" && (url.startsWith("/pets")))){
      return response.data;
    }
    return response.data.data;
  } catch (error) {
    const message = (error as Error).message;
    return Promise.reject(message);
  }
}
