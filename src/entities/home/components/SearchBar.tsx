"use client";

import React, { useRef, useState } from "react";
import { DatePickerWithRange } from "./DatePickerWithRange";
import { Button } from "@/components/ui/button";
import { InputFile } from "./InputFile";
import Icon from "./Icon";
import { useRouter } from "next/navigation";

type Props = {
  data: any;
};

const SearchBar = ({ data }: Props) => {
  const router = useRouter();

  //TODO fix any
  const onSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const values = {
      org: form[0].value,
      des: form[1].value,
      dates: form[2].innerText,
      num: form[3].value,
    };
    const qParams = `?org=${values.org}&des=${values.des}&dat=${values.dates}&num=${values.num}`;
    router.push(`/flights${qParams}`);
  };

  return (
    <div className="absolute top-[40vh] w-full h-2/4 flex justify-center  ">
      <div className="max-w-11/12 md:w-5/6 h-fit shadow-2xl bg-white rounded-3xl flex justify-center ">
        <form
          action="/flights?org=a&dest=b&num=0"
          onSubmit={(e) => onSubmit(e)}
        >
          <ul className="flex flex-col md:flex-row justify-evenly items-center p-5 gap-10 w-full">
            <li className="flex flex-col">
              <InputFile
                id="origin"
                label=""
                placeholder="origin"
                type="search"
                list="origins"
                className=""
              ></InputFile>
              <datalist id="origins">
                {data &&
                  //TODO fix any
                  data.map((country: any, i: number) => (
                    <option
                      key={country.id + country.image}
                      value={country.name}
                    />
                  ))}
              </datalist>
            </li>
            <li className="flex flex-col">
              <InputFile
                id="destination"
                label=""
                placeholder="destination"
                type="search"
                list="destinations"
                className=""
              ></InputFile>
              <datalist id="destinations">
                //TODO fix any
                {data &&
                  data.map((country: any, i: number) => (
                    <option
                      key={country.id + country.image + i}
                      value={country.name}
                    />
                  ))}
              </datalist>
            </li>
            <li className="flex flex-col">
              <DatePickerWithRange className="" />
            </li>
            <li className="flex flex-col">
              <InputFile
                id="passangers"
                label=""
                placeholder="#"
                type="number"
                className="w-20"
                list="pass"
              ></InputFile>
              <datalist id="pass">
                <option key={"dt1"} value={1} />
                <option key={"dt2"} value={2} />
                key={}
                <option key={"dt3"} value={3} />
                <option key={"dt4"} value={4} />
                <option key={"dt5"} value={"5+"} />
              </datalist>
            </li>
            <li className="flex flex-col justify-center">
              {/* <Link href="/flights?org=a&dest=b&num=0"> */}
              <Button
                variant="outline"
                type="submit"
                className="p-5 rounded-full border-2 border-black  text-white"
              >
                <Icon />
              </Button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
