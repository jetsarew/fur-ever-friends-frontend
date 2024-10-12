import { LoginDto, RegisterDto } from "@/dto/auth.dto";
import { authService } from "@/services/auth.service";
import { userService } from "@/services/user.service";
import { setAuthUser } from "@/store/auth/auth.slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { CommonUserModel } from "@/types/user.type";
import {
  UseQueryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";

const AUTH_USER_QUERY_KEY = "authUser";

export const useAuth = (options?: UseQueryOptions<CommonUserModel>) => {
  const authStore = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  const fetchAuthUser = async (): Promise<CommonUserModel> => {
    return userService.getAuthUser();
  };

  const registerMutation = useMutation(async (registerRequest: RegisterDto) => {
    const response = await authService.register(registerRequest);
    dispatch(setAuthUser(response.user));
    queryClient.invalidateQueries(AUTH_USER_QUERY_KEY);
    return response;
  });

  const {
    data: user,
    isLoading,
    error,
  } = useQuery<CommonUserModel>(AUTH_USER_QUERY_KEY, fetchAuthUser, {
    ...options,
    enabled: !!authStore.accessToken,
  });

  const loginMutation = useMutation(async (loginRequest: LoginDto) => {
    const response = await authService.login(loginRequest);
    dispatch(setAuthUser(response.user));
    queryClient.invalidateQueries(AUTH_USER_QUERY_KEY);
    return response;
  });

  return {
    user,
    isLoading,
    error,
    loginMutation,
    registerMutation,
  };
};
