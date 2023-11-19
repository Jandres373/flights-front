import PlacePersistence from "@/entities/places/providers/PlacePersistence";
import DisplayCountry from "./DisplayCountry";
import SelectCountry from "./SelectCountry";
import { CountryInitialState } from "../interfaces/country.interface";
import { ScrollArea } from "@/components/ui/customScrollArea";

interface CountryPageProps {
  country: CountryInitialState;
}

//TODO fix any
const CountryPage = ({ country }: CountryPageProps) => {
  return (
    <div className="md:flex overflow-y-hidden">
      <PlacePersistence country={country} />
      <section className=" md:w-3/12 h-96 md:h-full  flex flex-col justify-evenly">
        <div className="w-full h-full p-5">
          <SelectCountry country={country}></SelectCountry>
        </div>
      </section>
      <section className="md:w-9/12 md:px-5 md:mt-0 mt-96 h-full py-10">
        <ScrollArea  className="h-[100vh] w-full rounded-md">
          <DisplayCountry country={country}></DisplayCountry>
        </ScrollArea>
      </section>
    </div>
  );
};

export default CountryPage;
