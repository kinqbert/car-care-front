export interface User {
  id: string;
  surname: string;
  name: string;
  licenseNumber: string;
  avatarUrl: string;
  email: string;
}

export interface UserState extends User {
  vehiclesOwned: number;
  vehiclesSold: number;
  incrementVehiclesOwned: () => void;
  setUser: (data: User) => void;
  clearUser: () => void;
  getUserFullName: () => string;
}

export interface UserRegisterData {
  email: string;
  password: string;
  name: string;
  surname: string;
  licenseNumber: string;
  avatarUrl: string;
}
