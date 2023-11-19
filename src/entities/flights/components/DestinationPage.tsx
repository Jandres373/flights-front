import React from "react";
import { Flights } from "../interfaces/Flight.interface";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BASE_URL } from "../../../api/baseUrl";
import { Params, apiConnection } from "@/api/usersCrud";
import { AxiosResponse } from "axios";
import { ParamsResult } from "@/app/flights/page";
import FlightCard from "./FlightCard";

type DestinationPageProps = {
  params: ParamsResult;
  flights: Flights;
  destination: number;
};

const DestinationPage = async ({
  params,
  flights,
  destination,
}: DestinationPageProps) => {
  const URL: Params = {
    BASE_URL,
    PATH: `/countries/${Number(destination)}`,
  };

  const response: AxiosResponse = await apiConnection.get(URL);
  const destinationInfo = response?.data;

  return (
    <div className="">
      <div className="flex">
        <ScrollArea className="h-[85svh] px-20 pt-10 mt-5 w-full ">
            <div className="flex">

            <section className="">
            {<h2>{destinationInfo && destinationInfo.name}</h2>}
            {destinationInfo.image ? (
              <img
                src={destinationInfo.image}
                alt=""
                className="w-full h-96 rounded-3xl mb-10"
              />
            ) : (
              <div className="bg-gray-300 w-full h-96 rounded-3xl animate-pulse mb-10"></div>
            )}

            <div className="flex gap-10">
              {/*  <img src="" alt="" /> */}
              <div className="bg-gray-300 w-80 h-44 rounded-3xl animate-pulse"></div>
              {/*   <img src="" alt="" /> */}
              <div className="bg-gray-300 w-80 h-44 rounded-3xl animate-pulse"></div>
            </div>
          </section>
          <section className="h-[1000px] p-5">
            <h2 className="text-gray-500 text-sm mb-5"> Flights </h2>
            <h2 className="font-bold text-2xl">{params.org} to {params.des}, {params.dat}, Guests {params.num} </h2>
            <div className="flex p-5 flex-col gap-5">
            {flights && flights.map(flight=><FlightCard key={flight.id+flight.code} flight={flight}></FlightCard>)}
            </div>
          </section>
            </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default DestinationPage;
