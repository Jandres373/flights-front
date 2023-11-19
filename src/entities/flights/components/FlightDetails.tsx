"use client";

import { Badge } from "@/components/ui/badge";
import { Flight } from "../interfaces/Flight.interface";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";
import { Params, apiConnection } from "@/api/usersCrud";
import { BASE_URL } from "../../../api/baseUrl";

type FlightDetailsProps = {
  flight: Flight;
};

const FlightDetails = ({ flight }: FlightDetailsProps) => {
  const [marked, setMarked] = useState(false);
  const [layoversArr, setLayoversArr] = useState([]);

  useEffect(() => {
    //TODO fix any
    const arr: any = [];
    const getLayouts = () => {
      const data = flight.layovers;
      data.forEach((layover) => {
        const URL: Params = {
          BASE_URL,
          PATH: `/countries/${layover}`,
        };
        //TODO fix any
        apiConnection.get(URL).then((layovers:any) => arr.push(layovers.data.name));
      });
    };
    getLayouts();
    setLayoversArr(arr);
  }, []);

  return (
    <div>
      <section className="flex gap-5 ">
        <p className="text-sm text-gray-500">Flight details</p>
        <Switch checked={marked} onClick={() => setMarked(!marked)}></Switch>
      </section>
      <section
        className={`${!marked ? "hidden" : "flex flex-col gap-5 mt-5"} `}
      >
        <div className="h-16">
          <p className="text-sm text-gray-500">amenities</p>
          {flight.amenities.map((amenity) => (
            <Badge key={amenity} variant={"outline"}>{amenity}</Badge>
          ))}
        </div>
        <div className="text-sm text-gray-500"></div>
        <div className="flex justify-between">
          <div className="mt-5">
            <div className="flex gap-5">
              <p className="text-sm text-gray-500"> layovers</p>
              <Badge className="bg-green-500">{layoversArr.length}</Badge>
              <p>{layoversArr}</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-sm text-gray-500">Flight duration</p>
            <p className="text-green-500 font-bold">{flight.duration}</p>
            <p className="text-sm text-gray-500">Available seats</p>
            <p className="text-green-500 font-bold">{flight.availableSeats}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FlightDetails;
