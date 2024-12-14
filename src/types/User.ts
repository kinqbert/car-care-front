export interface User {
  email: string;
  id: string;
}

export interface UserState {
  email: string;
  id: string;
  vehiclesOwned: number;
  setUser: (data: User) => void;
}
