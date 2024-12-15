import { CarsCreateData } from "../../types/Cars";
import API from "../api";
import { API_ROUTES } from "../routes";

export const getUserCars = async () =>
  (await API.get(API_ROUTES.CARS.GET_USER_CARS)).data;
export const getAllCars = async () =>
  (await API.get(API_ROUTES.CARS.GET_ALL_CARS)).data;
export const getCarById = async (id: string) =>
  (await API.get(API_ROUTES.CARS.GET_CAR_BY_ID(id))).data;
export const purchaseCar = async (id: string) =>
  (await API.patch(API_ROUTES.CARS.PURCHASE(id))).data;
export const sellCar = async (id: string) =>
  (await API.patch(API_ROUTES.CARS.SELL(id))).data;
export const cancelSellCar = async (id: string) =>
  (await API.patch(API_ROUTES.CARS.CANCEL_SELL(id))).data;
export const repairCar = async (id: string) =>
  (await API.patch(API_ROUTES.CARS.REPAIR(id))).data;
export const createCar = async (data: CarsCreateData) =>
  (await API.post(API_ROUTES.CARS.CREATE, data)).data;
