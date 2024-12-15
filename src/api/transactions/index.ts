import API from "../api";
import { API_ROUTES } from "../routes";

export const getAllTransactions = async () =>
  (await API.get(API_ROUTES.TRANSACTIONS.GET_ALL_TRASACTIONS)).data;
