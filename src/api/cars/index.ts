import API from "../api";
import { API_ROUTES } from "../routes";

export const getUserCars = async () =>
  (await API.get(API_ROUTES.CARS.GET_USER_CARS)).data;
export const getAllCars = async () =>
  (await API.get(API_ROUTES.CARS.GET_ALL_CARS)).data;
