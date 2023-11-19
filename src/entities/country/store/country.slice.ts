import { createSlice } from "@reduxjs/toolkit";
import { CountryInitialState } from '@/entities/country/interfaces/country.interface';

const initialState: CountryInitialState = {
  id: 0,
  name: "",
  image: "",
}

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    setCountry(_, action) {
      return action.payload
    },
    clearCountry(state, _) {
      return state = initialState
    }
  }
})

export const { setCountry, clearCountry } = countrySlice.actions;
export default countrySlice.reducer;