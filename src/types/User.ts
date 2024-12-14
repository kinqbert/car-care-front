export interface User {
  email: string;
  id: string;
}

export interface UserState {
  email: string;
  id: string;
  setUser: (data: User) => void;
}
