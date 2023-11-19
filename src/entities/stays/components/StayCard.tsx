import React from "react";
import { StayInitialState } from "../interfaces/stay.interface";
import { CheckIcon, StarIcon, StarFilledIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/use-toast";

type CardProps = React.ComponentProps<typeof Card>;


//TODO fix any
interface StayProps extends CardProps {
  stay: any;
  children: any;
}

const reserve = ()=>{
  toast({
    title: "Reservation selected",
    description: "Go to your User page to see your Stay reservation.",
  })
}

const StayCard = ({ stay, children, className, ...props }: StayProps) => {
  return (
    <Card className={cn("w-full p-5  shadow-md rounded-3xl", className)} {...props}>
      <div className="relative flex px-5 py-2">
        <div className="w-96">
          {<img src={stay.image} alt="" className="w-w-96 h-64 rounded-3xl" />}
          <div className="flex w-36 flex-wrap gap-2 text-sm"></div>
        </div>
        <div className="w-full">
          <CardHeader className="p-0 pl-5">
            <CardTitle className="flex  justify-between">
              <div>
              <h1 className="mb-2">{stay.name}</h1>
              <div className="flex  flex-wrap gap-2">
                //TODO Fix any
              {stay.services.map((service:any, i:number) => (
                <Badge key={i + service}>{service}</Badge>
              ))}
            </div>
              </div>
              <div>
                <div className="flex gap-5">
                  <h2>Overall</h2>
                  <Badge variant="secondary">
                    <p
                      className={
                        stay.rating + 3 > 7
                          ? "text-green-500 font-black"
                          : stay.rating + 3 > 5
                          ? "text-blue-500"
                          : "text-red-500"
                      }
                    >
                      {stay.rating + 3}
                    </p>
                  </Badge>
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex w-full">
            <div className="flex flex-col gap-2">
              //TODO fix any
              {stay.tags.map((tag:any, i:number) => (
                <Badge variant={"outline"} key={i + tag}>
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex-1 space-y-1 ">
              <Switch />
              <StarIcon />
              <StarFilledIcon />
            </div>

            
          </CardContent>
          <CardFooter className="absolute right-0 bottom-1 w-full flex flex-col items-end">
            <h2 className="">
              <span className="text-green-600 font-black">${stay.price}</span>{" "}
            </h2>
            <Button className="w-40" onClick={()=>reserve()}>Reserve</Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};

export default StayCard;
