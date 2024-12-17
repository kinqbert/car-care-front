export const API_ROUTES = {
  AUTH: {
    REGISTER: "/api/auth/register",
    LOGIN: "/api/auth/login",
  },
  CARS: {
    GET_USER_CARS: "/api/cars/user",
    GET_ALL_CARS: "/api/cars",
    GET_CAR_BY_ID: (id: string) => `/api/cars/${id}`,
    PURCHASE: (id: string) => `/api/cars/${id || ""}/purchase`,
    SELL: (id: string) => `/api/cars/${id || ""}/sell`,
    CANCEL_SELL: (id: string) => `/api/cars/${id || ""}/cancel_sell`,
    REPAIR: (id: string) => `/api/cars/${id || ""}/repair`,
    CREATE: "/api/cars/create",
    DELETE: (id: string) => `/api/cars/${id || ""}/delete`,
  },
  USER: {
    GET_USER: "/api/user",
    GET_USERS: "/api/users",
    CHECK_EMAIL: "/api/check_email",
    UPDATE: "/api/user/update",
  },
  DAMAGE: {
    CREATE: "/api/damage/create",
  },
  TRANSACTIONS: {
    GET_ALL_TRASACTIONS: "/api/transactions",
  },
};
