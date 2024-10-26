import { CreateActivityDto, CreateReviewDto, InvitePetSitterDto, UpdateActivityStateDto } from "@/dto/activity.dto";
import { LoginDto, RegisterDto, UpdateQualificationStateDto, UpdateUserWithRoleDto } from "@/dto/auth.dto";
import { CreateReportDto } from "@/dto/report.dto";
import { CreateRequestDto } from "@/dto/request.dto";
import axiosInstance from "@/services/api.service";

export async function apiController<T>(
  url: string,
  method: "get" | "post" | "put" | "patch" | "delete",
  data?:
    | LoginDto
    | RegisterDto
    | UpdateUserWithRoleDto
    | UpdateQualificationStateDto
    | CreateActivityDto
    | UpdateActivityStateDto
    | CreateReviewDto
    | InvitePetSitterDto
    | CreateRequestDto
    | CreateReportDto
    | FormData,
): Promise<T> {
  try {
    const response = await axiosInstance.request({ url, method, data, withCredentials: true});
    console.log(response);
    if(response.data && response.data.data && response.data.data.data){
      return response.data.data.data;
    }
    else if(response.data && response.data.data){
      return response.data.data;
    }
    return response.data;
  } catch (error) {
    const message = (error as Error).message;
    return Promise.reject(message);
  }
}
