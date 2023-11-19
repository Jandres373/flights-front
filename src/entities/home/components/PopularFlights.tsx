
import PopularFlightCards from "./PopularFlightCards";

type Props = {
  data: any;
};

const PopularFlights = async ({ data }: Props) => {
  return (
    <div className="mt-96 md:mt-40 snap-center ">
      <h2 className={`text-xl font-bold `}>Top destinations</h2>
      <div className="pt-10 grid grid-cols-12 grid-rows-[12] gap-0 h-[800px]">
        {data &&
          data.map((country: any, i: number) => (
            <PopularFlightCards key={country.id+country.name+i} country={country} i={i}></PopularFlightCards>
          ))}
      </div>
    </div>
  );
};

export default PopularFlights;