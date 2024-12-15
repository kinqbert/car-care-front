export interface User {
  id: string;
  surname: string;
  name: string;
  licenseNumber: string;
  avatarUrl: string;
  email: string;
}

export interface UserState extends User {
  vehiclesSold: number;
  setUser: (data: User) => void;
  setUserPartial: (data: Partial<User>) => void;
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

export interface UserUpdateData {
  name: string;
  surname: string;
  licenseNumber: string;
  avatarUrl: string;
}
