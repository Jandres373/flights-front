'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { UserInitialState } from '@/entities/users/interfaces/user.interface';
import { LoginInitialState } from '@/entities/login/interfaces/login.interface';
import { CountryInitialState } from '@/entities/country/interfaces/country.interface';
import { PlaceInitialState } from '@/entities/places/interfaces/place.interface';
import { FlightInitialState } from '@/entities/flights/interfaces/Flight.interface';

// Helper para obtener tipado por la key Of
type ValueOf<T> = T[keyof T];

interface TargetState {
  userState: UserInitialState;
  loginState: LoginInitialState;
  countryState: CountryInitialState;
  placeState: PlaceInitialState;
  flightState: FlightInitialState;
}

export type UseStateHook = (targetState: keyof TargetState) => { State: ValueOf<TargetState> };

const useStateHook: UseStateHook = (targetState) => {
  const state = useSelector((state: RootState) => state[targetState]);
  return { State: state };
}

const useCountryState = () => {
  const country = useStateHook('countryState').State;
  return country as CountryInitialState;
}

const usePlaceState = () => {
  const place = useStateHook('placeState').State;
  return place as PlaceInitialState;
}

const useUserState = () => {
  const user = useStateHook('userState').State;
  return user as UserInitialState;
}

const useLoginState = () => {
  const login = useStateHook('loginState').State;
  return login as LoginInitialState;
}

const useFlightState = () => {
  const flight = useStateHook('flightState').State;
  return flight as FlightInitialState;
}

export { useCountryState, usePlaceState, useUserState, useLoginState, useFlightState };
