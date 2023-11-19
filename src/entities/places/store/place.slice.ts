import { createSlice } from "@reduxjs/toolkit";
import { PlaceInitialState } from "../interfaces/place.interface";


const initialState: PlaceInitialState = {
  name: "",
  countryId: null,
  description: ""
}

const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {
    setPlace: function(_, action) {
      return action.payload
    },
    clearPlace: function() {
      return initialState
    }
  }
})

export const {setPlace,clearPlace} = placeSlice.actions;
export default placeSlice.reducer;