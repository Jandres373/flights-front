import { Params, apiConnection } from '@/api/usersCrud'
import React from 'react'
import { BASE_URL } from '../../api/baseUrl';
import { Flights } from '../../entities/flights/interfaces/Flight.interface';
import FlightsPage from '@/entities/flights/components/FlightsPage';

export type ParamsResult = {
  org: string;
  des: string;
  dat: string;
  num: string;
}
//TODO fix any
const page = async ({searchParams}:any) => {
  const params:ParamsResult = searchParams
  const {org,des,dat,num} = params

  const URL: Params = {
    BASE_URL,
    PATH: "/flights/findFlight"
  }
  const query = {
    origin:org,
    destination:des,
    dates:dat,
    number:num,
  }

  const result = await apiConnection.post(URL,query)
  const flights = result.data as Flights
  const destination = flights[0].destinationId


  return (
    <div><FlightsPage params={params} flights={flights} destination={destination}></FlightsPage></div>
  )
}

export default page