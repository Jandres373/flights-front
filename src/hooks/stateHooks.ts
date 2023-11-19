import { RootState } from '@/store/store';

const useCountryState = () => {
  const selectCountryState = (state: RootState) => state.countryState;
  return selectCountryState;
}

const usePlaceState = () => {
  const selectPlaceState = (state: RootState) => state.placeState;
  return selectPlaceState;
}

const useUserState = () => {
  const selectUserState = (state: RootState) => state.userState;
  return selectUserState;
}

const useLoginState = () => {
  const selectLoginState = (state: RootState) => state.loginState;
  return selectLoginState;
}

/* export { useCountryState, usePlaceState, useUserState, useLoginState }; */