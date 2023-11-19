"use client";
import LS from "@/utils/localeStorage";
import React from "react";
import { clearPlace, setPlace } from "../store/place.slice";
import { useDispatch } from "react-redux";
import { CountryInitialState } from "@/entities/country/interfaces/country.interface";

type PlacePersistanceProps = {
  country: CountryInitialState;
};

const PlacePersistence = ({ country }: PlacePersistanceProps) => {
  const dispatch = useDispatch();

  const persisPlaces = () => {
    if (window) {
      const place = LS.get("place");
      const parsedPlace = JSON.parse(place);

      if (place && country.id) {
        if (country.id !== parsedPlace.countryId) {
          LS.remove('place');
          return dispatch(clearPlace())
        } else {
          dispatch(setPlace(parsedPlace));
        }
      }
    }
  };
  persisPlaces();

  return <div></div>;
};

export default PlacePersistence;
