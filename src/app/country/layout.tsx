import React from 'react'
import NavBar from '../../components/_general/NavBar';
import Footer from '@/components/_general/Footer';


//TODO fix any
const layout = ({children,}:React.ReactNode | any) => {

  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}

export default layout