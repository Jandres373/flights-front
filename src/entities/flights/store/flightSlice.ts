import { createSlice } from "@reduxjs/toolkit";
import { Flight } from "../interfaces/Flight.interface";

const initialState: Flight = {
  id:0,
  code: "",
  airline: "",
  originId: 0,
  destinationId: 0,
  departureTime: new Date,
  arrivalTime: new Date,
  duration: "",
  price: 0,
  availableSeats: 0,
  layovers: [],
  amenities: [],
  createdAt: new Date,
  updatedAt: new Date
}

const flightSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSelectedFlight: (_, action) => {
      return action.payload
    }
  }
})

export const {setSelectedFlight} = flightSlice.actions;
export default flightSlice.reducer;