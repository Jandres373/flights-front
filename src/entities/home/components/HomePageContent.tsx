import { subtitles } from '@/ui/fonts'
import React from 'react'

type Props = {
  children: React.ReactNode;
  className:any;
}

const HomePageContent = ({className, children}: Props) => {
  return (
    <div className={`${subtitles.className} ${className} md:px-20 text-xl font-bold flex flex-col `}>{children}</div>
  )
}

export default HomePageContent