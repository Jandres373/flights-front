export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  country: string;
  image: string;
}
export type Token = string;

export interface UserInitialState {
  user: User
  token: Token;
}