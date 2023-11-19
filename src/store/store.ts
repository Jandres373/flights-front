import { configureStore } from '@reduxjs/toolkit';
import userState from '@/entities/users/store/userSlice';
import loginState from '@/entities/login/store/loginSlice';
import countryState from '@/entities/country/store/country.slice';
import placeState from '@/entities/places/store/place.slice';
import flightState from '@/entities/flights/store/flightSlice';

const store = configureStore({
  reducer: {
    userState,
    loginState,
    countryState,
    placeState,
    flightState
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// 
export default store;