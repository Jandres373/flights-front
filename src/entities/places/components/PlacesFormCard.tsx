'use client'

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { SelectForm } from "@/entities/places/components/SelectPlacesForm";
import { CountryInitialState } from "@/entities/country/interfaces/country.interface";

type Props = {
  country: CountryInitialState;
  places: any;
};

const PlacesFormCard = ({ country, places }: Props) => {
  const form = useForm();

  return (
    <div className="w-full flex flex-col justify-center items-center md:block">
        <Card className="w-[350px] h-full flex flex-col">
          <CardHeader>
            <CardTitle>Country:</CardTitle>
            <CardDescription>
              {" "}
              <p className="font-bold">{country ? country.name : "No country selected"}{" "}</p>
              <br />
              <p className="text-center">Start by selecting a place</p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="px-5 grid w-full items-center gap-4">
              <div className="w-full flex justify-center space-y-1.5 ">
              </div>
              <div className="flex flex-col space-y-1.5">

              <SelectForm  form={form} places={places} ></SelectForm>

              </div>
            </div>
          </CardContent>
        </Card>            
    </div>
  );
};

export default PlacesFormCard;
