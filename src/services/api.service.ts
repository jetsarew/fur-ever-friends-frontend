import {
    deleteAuthState,
    setAuthAccessToken,
    // setAuthRefreshToken,
  } from "@/store/auth/auth.slice";
  import { store } from "@/store/store";
  import axios, {
    // type AxiosError,
    type AxiosInstance,
    // type AxiosResponse,
    type InternalAxiosRequestConfig,
  } from "axios";
  import Cookies from "js-cookie";

  
  const baseUrl: string = process.env.NEXT_PUBLIC_ENV + "/api/" || "";
  
  export const axiosInstance: AxiosInstance = axios.create({
    baseURL: baseUrl,
  });
  
  // const refreshAccessToken = async (refreshToken: string) => {
  //   try {
  //     const response = await axios.post(`${baseUrl}/auth/refresh`, null, {
  //       headers: {
  //         Authorization: `Bearer ${refreshToken}`,
  //       },
  //     });
  //     store.dispatch(setAuthAccessToken(response.data.accessToken));
  //     store.dispatch(setAuthRefreshToken(response.data.refreshToken));
  //     return response.data.accessToken;
  //   } catch (error) {
  //     store.dispatch(deleteAuthState());
  //     console.error("Failed to refresh token:", error);
  //     window.location.href = "/auth/login";
  //     return Promise.reject(error);
  //   }
  // };
  
  const requestInterceptor = (config: InternalAxiosRequestConfig) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers = config.headers || {};
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  };
  
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;
  
      // Check if the error is due to an expired token (401)
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
  
        try {
          const response = await axios.post(`${baseUrl}auth/refresh`, {}, { withCredentials: true });
          ;

          const { data } = response.data;

          store.dispatch(setAuthAccessToken(data.token.accessToken));
          // Access token is now set by the backend in a cookie
  
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          store.dispatch(deleteAuthState());
          console.error("Failed to refresh token:", error);
          window.location.href = "/auth/login";
          return Promise.reject(error);
        }
      }
  
      return Promise.reject(error);
    }
  );
 
  axiosInstance.interceptors.request.use(requestInterceptor);
  
  export default axiosInstance;
  