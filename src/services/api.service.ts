import {
    deleteAuthState,
    setAuthAccessToken,
    setAuthRefreshToken,
  } from "@/store/auth/auth.slice";
  import { store } from "@/store/store";
  import axios, {
    type AxiosError,
    type AxiosInstance,
    type AxiosResponse,
    type InternalAxiosRequestConfig,
  } from "axios";
  import Cookies from "js-cookie";

  
  const baseUrl: string = process.env.NEXT_PUBLIC_ENV + "/api/" || "";
  
  export const axiosInstance: AxiosInstance = axios.create({
    baseURL: baseUrl,
  });
  
  const refreshAccessToken = async (refreshToken: string) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/refresh`, null, {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      });
      store.dispatch(setAuthAccessToken(response.data.accessToken));
      store.dispatch(setAuthRefreshToken(response.data.refreshToken));
      return response.data.accessToken;
    } catch (error) {
      store.dispatch(deleteAuthState());
      console.error("Failed to refresh token:", error);
    }
  };
  
  const requestInterceptor = (config: InternalAxiosRequestConfig) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers = config.headers || {};
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  };
  
  const responseInterceptor = (response: AxiosResponse) => {
    return response;
  };
  
  const errorInterceptor = async (error: AxiosError) => {
    const originalRequest = error.config;
  
    if (
      error.response?.status === 401 &&
      store.getState().auth.user != null &&
      originalRequest
    ) {
      const refreshToken = store.getState().auth.refreshToken;
  
      if (refreshToken) {
        try {
          const accessToken = await refreshAccessToken(refreshToken);
          originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
          return axios(originalRequest);
        } catch (refreshError) {
          console.error("Failed to refresh token:", refreshError);
        }
      } else {
        store.dispatch(deleteAuthState());
        console.error("Refresh token not found in storage");
      }
    }
  
    return Promise.reject(error);
  };
  
  axiosInstance.interceptors.request.use(requestInterceptor);
  axiosInstance.interceptors.response.use(responseInterceptor, errorInterceptor);
  
  export default axiosInstance;
  