import { CreateActivityDto, InvitePetSitterDto, UpdateActivityStateDto, UpdateTaskStatusDto } from "@/dto/activity.dto";
import { LoginDto, RegisterDto, UpdateQualificationStateDto, UpdateUserWithRoleDto } from "@/dto/auth.dto";
import { CreateFavoriteDto } from "@/dto/favorite.dto";
import { CreateReportDto } from "@/dto/report.dto";
import { CreateRequestDto } from "@/dto/request.dto";
import { CreateReviewDto } from "@/dto/review.dto";
import axiosInstance from "@/services/api.service";
import { AxiosError } from "axios";

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
    | UpdateTaskStatusDto
    | CreateFavoriteDto
    | FormData,
): Promise<T> {
  try {
    const response = await axiosInstance.request({ url, method, data, withCredentials: true });
    ;
    if (url == "/reports") {
      return response.data.data.reports;
    }

    if (response.data && response.data.data && response.data.data.data) {
      return response.data.data.data;
    }
    else if (response.data && response.data.data) {
      return response.data.data;
    }
    return response.data;
  } catch (error) {
    let message = (error as Error).message;
    if(error instanceof AxiosError && error.response?.data?.message) {
      message = Array.isArray(error.response.data.message)
        ? error.response.data.message[0]
        : error.response.data.message;
    }
    return Promise.reject(message);
  }
}
