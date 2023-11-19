import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/customCard";

import Link from "next/link";

type Props = {
  country: any;
  i: number;
};

const PopularFlightCards = ({ country, i }: Props) => {
  return (
    <Card
      key={country.id + country.name + i + i}
      className={`relative overflow-hidden cursor-pointer
    
    ${
      i === 0
        ? "row-span-6 col-span-6"
        : i === 1
        ? "row-span-2 col-span-4"
        : i === 2
        ? "row-span-4 col-span-2"
        : i === 3
        ? "row-span-2 col-span-4"
        : i === 4
        ? "row-span-4 col-span-2"
        : i === 5
        ? "row-span-2 col-span-4"
        : i === 6
        ? "row-span-4 col-span-4"
        : i === 7
        ? "row-span-4 col-span-2"
        : i === 8
        ? "row-span-2 col-span-4"
        : i === 9
        ? "row-span-2 col-span-2"
        : ""
    }`}
    >
      <Link href={`/country/${country.name}?id=${country.id}`}>
        <CardHeader>
          <CardTitle className="z-10 absolute bottom-1 bg-slate-900 w-fit p-2 text-white rounded-xl">
            {country.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="absolute top-0 w-full h-full">
          <div className="absolute bg-black opacity-40 inset-0 w-full h-full z-20 hover:bg-transparent">
            <div className="text-3xl text-white opacity-0 hover:opacity-100 transition-opacity duration-75 w-full h-full ">
              <p className="absolute top-0 right-0"></p>
            </div>
          </div>
          <img
            src={country.image}
            alt={`${country.name} picture`}
            className="relative object-cover object-center w-full h-full before:bg-black   "
          />
        </CardContent>
        <CardFooter></CardFooter>
      </Link>
    </Card>
  );
};

export default PopularFlightCards;
