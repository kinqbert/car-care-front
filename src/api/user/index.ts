import API from "../api";
import { API_ROUTES } from "../routes";

export const getCurrentUser = async () =>
  (await API.get(API_ROUTES.USER.GET_USER)).data;
export const getUsers = async () =>
  (await API.get(API_ROUTES.USER.GET_USERS)).data;
export const checkEmail = async (email: string) =>
  (await API.patch(API_ROUTES.USER.CHECK_EMAIL, { email })).data;
