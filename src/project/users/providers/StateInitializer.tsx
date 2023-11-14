'use client'

import { resetUserData, setUserData } from '@/project/users/store/userSlice'
import LS from '@/utils/localeStorage'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const StateInitializer = ({children}: any) => {
  const dispatch = useDispatch()
  let user:any 

  if (typeof localStorage !== 'undefined') {
    user = LS.get('user')
  }

  useEffect( ()=>{
    if (user) {
      dispatch(setUserData(user))
    }
  },[])
  
  return (
    <div>
      {children}
    </div>
  )
}

export default StateInitializer