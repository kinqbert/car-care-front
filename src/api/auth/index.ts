import { UserRegisterData } from "../../types/User";
import API from "../api";
import { API_ROUTES } from "../routes";

export const register = async (registerData: UserRegisterData) =>
  (await API.post(API_ROUTES.AUTH.REGISTER, registerData)).data;

export const login = async (email: string, password: string) =>
  (
    await API.post(API_ROUTES.AUTH.LOGIN, {
      email,
      password,
    })
  ).data;
