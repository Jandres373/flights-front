import React from 'react'
import PlacesSection from '@/entities/places/components/PlacesSection';
import StaysSection from '@/entities/stays/components/StaysSection';
import { CountryInitialState } from '../interfaces/country.interface';
import { usePlaceState } from '@/hooks/useStateHooks';

//TODO fix this (declare where it's initially created and import here)
interface CountryPageProps {
  country:CountryInitialState
}
const DisplayCountry = ({country}:CountryPageProps) => {
  return (
    <div>
      <PlacesSection country={country}></PlacesSection> 
      <StaysSection country={country}></StaysSection>
    </div>
  )
}

export default DisplayCountry