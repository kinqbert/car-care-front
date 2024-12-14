export const API_ROUTES = {
  AUTH: {
    REGISTER: "/api/auth/register",
    LOGIN: "/api/auth/login",
  },
  CARS: {
    GET_USER_CARS: "/api/user_cars",
    GET_ALL_CARS: "/api/cars",
    PURCHASE: (id: string) => `/api/${id || ""}/purchase`,
  },
  USER: {
    GET_USER: "/api/user",
  },
};
