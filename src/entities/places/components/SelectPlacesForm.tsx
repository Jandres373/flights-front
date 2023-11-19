"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Params, apiConnection } from "@/api/usersCrud";
import { useDispatch } from "react-redux";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import LS from "@/utils/localeStorage";
import { BASE_URL } from '../../../api/baseUrl';
import { setPlace } from "@/entities/places/store/place.slice";

//TODO Fix any
export function SelectForm({ places, form }: any) {
  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const dispatch = useDispatch();

  async function onSubmit(data: any) {
    const id = searchParams.get('id')
    const place = data.places
    router.replace(`${pathName}?id=${id}&place=${place}`)

    const URL:Params = {
      BASE_URL,
      PATH: `/places/${place}`
    };
    const response = await apiConnection.get(URL);
    const selectedPlace = response?.data;
    dispatch(setPlace(selectedPlace));

    if (window) {
      LS.set('place', JSON.stringify(selectedPlace) )
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="places"
          render={({ field }) => (
            <FormItem className="animate-pulse">
              <FormLabel>places</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a place" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {places &&
                    places.map((place: any, i: number) => (
                      <SelectItem
                        key={place.id+place.name+2}
                        value={`${place.name}`}
                      >{`${place.name}`}</SelectItem>
                    ))}
                </SelectContent>
              </Select>
              <FormDescription>
                Or change the selected
                <Link href="/country" className="text-blue-500 underline">
                  {" "}
                  country
                </Link>
                .
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className=" flex justify-between">
          <Button type="button" variant="outline">
            Clear
          </Button>
          <Button type="submit">Search</Button>
        </div>
      </form>
    </Form>
  );
}
