export const API_ROUTES = {
  AUTH: {
    REGISTER: "/api/auth/register",
    LOGIN: "/api/auth/login",
  },
  CARS: {
    GET_USER_CARS: "/api/user_cars",
    GET_ALL_CARS: "/api/cars",
    PURCHASE: (id: string) => `/api/${id || ""}/purchase`,
    SELL: (id: string) => `/api/${id || ""}/sell`,
    CANCEL_SELL: (id: string) => `/api/${id || ""}/cancel_sell`,
    REPAIR: (id: string) => `/api/${id || ""}/repair`,
    CREATE: "/api/cars/create",
  },
  USER: {
    GET_USER: "/api/user",
    GET_USERS: "/api/users",
    CHECK_EMAIL: "/api/check_email",
  },
};
