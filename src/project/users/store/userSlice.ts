import { createSlice } from "@reduxjs/toolkit";

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

export const initialState: UserInitialState = {
  user: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    country: "",
    image: ""
  },
  token: ""
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (_, action) => action.payload,
    resetUserData: (state) => { return initialState }
  }
})

export const {setUserData,resetUserData} = userSlice.actions;
export default userSlice.reducer;
