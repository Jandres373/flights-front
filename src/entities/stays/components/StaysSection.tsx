"use client";

import { CountryInitialState } from "@/entities/country/interfaces/country.interface";
import { usePlaceState } from "@/hooks/useStateHooks";
import StayCard from "./StayCard";

//TODO fix this (declare where it's initially created and import here)
interface CountryPageProps {
  country: CountryInitialState;
}

const StaysSection = ({ country }: CountryPageProps) => {
  //TODO fix any
  const place:any = usePlaceState();
  const stays: any = place?.stays;

  return (
    <div className="flex flex-col gap-5">
      {stays &&
        stays.map((stay: any, i: number) => (
          <StayCard key={stay.id + stay.name} stay={stay}>{stay.name}</StayCard>
        ))}
    </div>
  );
};

export default StaysSection;
