export interface User {
  email: string;
  id: string;
}

export interface UserState {
  email: string;
  id: string;
  userName: string;
  vehiclesOwned: number;
  vehiclesSold: number;
  setUser: (data: User) => void;
}
