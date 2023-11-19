import React from "react";
import { Flights } from "../interfaces/Flight.interface";
import DestinationPage from "./DestinationPage";
import { ParamsResult } from "@/app/flights/page";

export type FlightsProps = {
  params: ParamsResult;
  flights: Flights;
  destination: number;
};

const FlightsPage = ({params, flights, destination }: FlightsProps) => {
  return (
    <div>
      <DestinationPage params={params} flights={flights} destination={destination}></DestinationPage>
      {/* {flights && flights.map((flight) => <div>{flight.code}</div>)} */}
      </div>
  );
};

export default FlightsPage;
