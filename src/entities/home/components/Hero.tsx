import React from "react";
import SearchBar from "./SearchBar";
import "@/styles/image.css";
import { complementary } from "@/ui/fonts";

interface HeroProps {
  data: any;
}
const Hero = ({data}:HeroProps) => {
  return (
    <div className="relative md:px-5 pt-5 ">
      <div
        className={`w-full h-96 shadow-2xl bg-image bg-cover bg-center flex flex-col justify-center items-center rounded-3xl relative before:block before:w-full before:h-full before:bg-black before:opacity-70 before:rounded-3xl`}
      >
        <section className="absolute">
        <h2 className="text-3xl text-white font-bold">Explore and travel the world</h2>
        <h3 className={`text-xl text-white font-bold text-center ${complementary.className}`}>While saving money</h3>
        </section>
        <SearchBar data={data}></SearchBar>
      </div>
    </div>
  );
};

export default Hero;
