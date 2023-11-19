import { createSlice } from "@reduxjs/toolkit";
import { UserInitialState } from "../interfaces/user.interface";

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
