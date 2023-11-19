'use client'

import { Flight } from "../interfaces/Flight.interface";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import { subtitles } from "@/ui/fonts";
import FlightDetails from "./FlightDetails";
import { Button } from "@/components/ui/button";
import { setSelectedFlight } from "../store/flightSlice";
import { useDispatch } from "react-redux";
import { useFlightState } from "@/hooks/useStateHooks";
import { useToast } from "@/components/ui/use-toast"

type Props = { flight: Flight };

const FlightCard = ({ flight }: Props) => {
  const arrival = new Date(flight.arrivalTime);
  const departure = new Date(flight.departureTime);
  const selectedFlight = useFlightState()
  const dispatch = useDispatch()
  const { toast } = useToast()

  const setSelectFlight = () => {
    dispatch(setSelectedFlight(flight))
    toast({
      title: "Flight selected",
      description: "Go to your User page to see your flight reservation.",
    })
  }

  return (
    <div className="w-full p-5 rounded-xl shadow-md">
      <div className="text-sm font-bold flex justify-between">
        <h3>
          Flight: <span className="font-normal">{flight.code}</span>
        </h3>
        <div className="h-5 w-5 bg-green-400 rounded-full"></div>
      </div>
      <h3 className="text-sm text-gray-500">{flight.airline}</h3>
      <section className="flex justify-center items-center">
        <div className="p-5 shadow-lg flex gap-3 justify-center items-center rounded-full">
          <FaPlaneDeparture className="text-xl text-blue-500"></FaPlaneDeparture>
          <p
            className={`${subtitles.className} text-sm`}
          >{`${departure.toLocaleTimeString()}`}</p>
          <p
            className={`${subtitles.className} text-sm`}
          >{`${departure.toLocaleDateString()}`}</p>
        </div>
        <hr className="w-full" />
        <div className="p-5 shadow-lg flex gap-3 justify-center items-center rounded-full">

          <FaPlaneArrival className="text-xl text-green-500"> </FaPlaneArrival>
          <p
            className={`${subtitles.className} text-sm`}
          >{`${arrival.toLocaleTimeString()}`}</p>
          <p
            className={`${subtitles.className} text-sm`}
          >{`${arrival.toLocaleDateString()}`}</p>
        </div>
      </section>
      <section className="mt-5">
        <div className="w-full flex justify-end">
          <div className="flex flex-col justify-center items-center">
          <p className="text-green-500 font-bold">${flight.price}</p>
          <Button  variant={`${selectedFlight.code===flight.code ? 'secondary' : "default"}`} disabled={selectedFlight.code===flight.code ? true : false } onClick={()=>setSelectFlight()}>{selectedFlight.code===flight.code ? "Selected" : "Select" }</Button></div>
        </div>
        <FlightDetails flight={flight}></FlightDetails>
      </section>
    </div>
  );
};

export default FlightCard;
