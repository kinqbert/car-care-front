import API from "../api";
import { API_ROUTES } from "../routes";

export const getCurrentUser = async () =>
  (await API.get(API_ROUTES.USER.GET_USER)).data;
