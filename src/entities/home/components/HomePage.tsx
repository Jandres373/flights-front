import NavBar from "@/components/_general/NavBar";
import React from "react";
import Hero from "./Hero";
import PopularFlights from "./PopularFlights";
import HomePageContent from "./HomePageContent";
import { Params, apiConnection } from "@/api/usersCrud";
import { BASE_URL } from "../../../api/baseUrl";
import CallToAction from "./CallToAction";
import Footer from "@/components/_general/Footer";
import PlanetRenderer from "./PlanetRenderer";

const HomePage = async () => {
  const URL: Params = {
    BASE_URL,
    PATH: "/countries",
  };

  //TODO fix types
  const { data: countries } = await apiConnection.get(URL);

  return (
    <div className="">
      <NavBar />

      <div className="">
        <Hero data={countries} />
      </div>

      <HomePageContent className={""}>
        <CallToAction />
        <PopularFlights data={countries} />
      </HomePageContent>

      <div className="relative h-[700px]">
        <div className="absolute bottom-0 right-0">
        <PlanetRenderer></PlanetRenderer>
        </div>
        </div> 
      <Footer />
    </div>
  );
};

export default HomePage;
