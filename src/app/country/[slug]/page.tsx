import { BASE_URL } from '@/api/baseUrl';
import { Params, apiConnection } from '@/api/usersCrud';
import CountryPage from '@/entities/country/components/CountryPage';

const page = async ({searchParams}:any) => {
  const countryId = searchParams.id
  const URL: Params = {
    BASE_URL,
    PATH: `/countries/${countryId}`
  }
  //TODO fix any
  const { data: country }:any  = await apiConnection.get(URL);

  return (
    <div className='overflow-y-hidden'>
      <CountryPage country={country} />
    </div>
  )
}

export default page