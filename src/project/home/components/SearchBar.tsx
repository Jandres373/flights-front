'use client'

import React, { useState } from "react";
import { FaPlaneDeparture, FaPlaneArrival, FaClock } from "react-icons/fa";
import Button from "@/project/_general/components/Button";

type SearchBarProps = {
  onSearch: /* (origin: string, destination: string, departureTime: string) => void; */
  any
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureTime, setDepartureTime] = useState("");

  const handleOriginChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOrigin(event.target.value);
  };

  const handleDestinationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDestination(event.target.value);
  };

  const handleDepartureTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDepartureTime(event.target.value);
  };

  const handleSearch = () => {
    onSearch(origin, destination, departureTime);
  };

  return (
    <div className="w-3/4 mx-auto mt-8">
      <div className="flex justify-between items-center bg-white shadow-sm rounded-3xl px-4 py-2">
        <div className="relative w-1/3">
          <label
            className={`text-gray-500 absolute bg-white px-1 left-2 text-sm top-[-5px] transition-all duration-300 ${
              origin ? "text-green-500" : ""
            }`}
            htmlFor="origin"
          >
            <FaPlaneDeparture className="inline-block mr-2" />
            Origen
          </label>
          <select
            className="w-full h-12 border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            id="origin"
            value={origin}
            onChange={handleOriginChange}
          >
            <option value="">Selecciona origen</option>
            <option value="Ciudad A">Ciudad A</option>
            <option value="Ciudad B">Ciudad B</option>
            <option value="Ciudad C">Ciudad C</option>
          </select>
        </div>
        <div className="w-1/3 relative">
          <label
            className={`text-gray-500 absolute bg-white px-1 left-2 text-sm top-[-5px] transition-all duration-300 ${
              destination ? "text-green-500" : ""
            }`}
            htmlFor="destination"
          >
            <FaPlaneArrival className="inline-block mr-2" />
            Destino
          </label>
          <select
            className="w-full h-12 border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            id="destination"
            value={destination}
            onChange={handleDestinationChange}
          >
            <option value="">Selecciona destino</option>
            <option value="Ciudad X">Ciudad X</option>
            <option value="Ciudad Y">Ciudad Y</option>
            <option value="Ciudad Z">Ciudad Z</option>
          </select>
        </div>
        <div className="w-1/3 relative">
          <label
            className={`text-gray-500 absolute bg-white px-1 left-2 text-sm top-[-5px] transition-all duration-300 ${
              departureTime ? "text-green-500" : ""
            }`}
            htmlFor="departureTime"
          >
            <FaClock className="inline-block mr-2" />
            Hora de salida
          </label>
          <select
            className="w-full h-12 border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            id="departureTime"
            value={departureTime}
            onChange={handleDepartureTimeChange}
          >
            <option value="">Selecciona hora de salida</option>
            <option value="08:00">08:00</option>
            <option value="12:00">12:00</option>
            <option value="16:00">16:00</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Button
          variant="warning"
          type="button"
          className="px-8 py-2 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          onClick={handleSearch}
        >
          Buscar
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;