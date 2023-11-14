import React from 'react'
import SearchBar from './SearchBar';

const Hero = () => {
  return (
    <div className='w-full h-96 bg-red-50 flex flex-col justify-center items-center'>
      <h2>Explore and travel the world</h2>
      <h3>subtitle</h3>
      <SearchBar onSearch={null}></SearchBar>
    </div>
  )
}

export default Hero