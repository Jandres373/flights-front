"use client";

import { Badge } from "@/components/ui/badge";
import PlanetRenderer from "@/entities/home/components/PlanetRenderer";
import { CountryInitialState } from "@/entities/country/interfaces/country.interface";
import { usePlaceState } from "@/hooks/useStateHooks";
import { useEffect } from "react";
import Link from "next/link";

//TODO fix this (declare where it's initially created and import here)
interface CountryPageProps {
  country: any;
}

const PlacesSection = ({ country }: CountryPageProps) => {
  //TODO fix any
  const place:any = usePlaceState();

  return (
    <div className="">
      <h2 className="text-center font-bold text-6">
        Looking for a place to stay?
      </h2>
      <h1 className="font-bold text-3xl">{place.name}</h1>
      <p className="text-gray-500 ">{place.description}</p>
      <div className="flex gap-5 my-5">
        {/* TODO fix any  */}
        {place?.services &&
          place.services.map((service:any, i:number) => (
            <Badge key={service} variant={"default"}>{service}</Badge>
          ))}
      </div>
      {!place.id ? (
        <>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{country.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <img
                  alt="Top Story Image"
                  className="w-full h-64 object-cover object-center rounded-lg"
                  height="400"
                  src={country.image}
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width="600"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-2">About {country.name}</h3>
                <p className="text-zinc-500 dark:text-zinc-400">
                  {country.description}
                </p>
                {/*  */}
              </div>
            </div>
          </section>
          <p>Select a place from the left menu to display the stays in <span className="text-blue-500">{country.name}.</span></p>
        </>
      ) : null}
    </div>
  );
};

export default PlacesSection;
