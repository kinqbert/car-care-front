import axios, { AxiosError } from "axios";
import { CONFIG } from "../constants/config";

const API = axios.create({
  baseURL: CONFIG.VITE_API_URL,
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access-token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (typeof window === "undefined") {
      return;
    }

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const refreshTokenFromStorage = localStorage.getItem("refresh-token");

      if (!refreshTokenFromStorage) {
        localStorage.removeItem("access-token");
        localStorage.removeItem("refresh-token");
        window.location.replace("/login");
        return;
      }

      try {
        const { data } = await API.post("/api/auth/token", {
          refreshToken: refreshTokenFromStorage,
        });

        localStorage.setItem("access-token", data.accessToken);
        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
        return API(originalRequest);
      } catch (error) {
        const { response } = error as AxiosError;

        if (response?.status === 401 || response?.status === 403) {
          localStorage.removeItem("access-token");
          localStorage.removeItem("refresh-token");
          window.location.replace("/login");
          return;
        }
      }
    }
    return Promise.reject(error);
  }
);

export default API;
