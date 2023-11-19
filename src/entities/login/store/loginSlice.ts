import { createSlice } from "@reduxjs/toolkit";
import { LoginInitialState } from "../interfaces/login.interface";

const loginInitialState: LoginInitialState = {
  isLoggedIn: false,
  activePage: "login",
  justRegistered: false
}

const loginSlice = createSlice({
  name: "login",
  initialState:loginInitialState,
  reducers: {
    setRegister: (state)=>{state.activePage = "register"},
    setLogin: (state)=>{state.activePage = "login"},
    setJustRegistered: (state, action)=>{state.justRegistered = action.payload}
  }
})

export const {setRegister,setLogin,setJustRegistered} = loginSlice.actions;
export default loginSlice.reducer;