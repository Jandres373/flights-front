import { Params, apiConnection } from '@/api/usersCrud';
import { BASE_URL } from '../../../api/baseUrl';
import PlacesFormCard from '@/entities/places/components/PlacesFormCard';
import { CountryInitialState } from '../interfaces/country.interface';

type Props = {
  country: CountryInitialState
}

const SelectCountry = async ({country}: Props) => {

  const URL: Params = {
    BASE_URL,
    PATH: "/countries/places",
  };
  const countryData = {
    name: country.name
  }
 
  //TODO fix any
  const response: any = await apiConnection.post(URL, countryData)
  const places = response?.data[0]?.places


  return (
    <div className='mt-10 h-full'>
    {places ? <PlacesFormCard country={country} places={places} ></PlacesFormCard> : <div>noooo</div>}
    </div>
  )
}

export default SelectCountry