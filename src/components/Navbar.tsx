'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { SocialIcon } from 'react-social-icons'
import Motion from './Motion'
import { Social } from '@/app/types/Social'
import { ProfileFiles } from '@/app/types/ProfileFiles'
import { DownloadBtn } from './DownloadBtn'


type Props = { 
  getSocialData:Social[],
  getProfileFiles:ProfileFiles
 };

const Navbar = ({ getSocialData, getProfileFiles }: Props) => {
  const pathname = usePathname();
  return (
    <nav className='sticky top-0 md:w-9/12 sm:w-full mx-auto p-5 flex items-center justify-between z-20'>
      <Motion delay={0.1} direction={'left'}>
        <div className='flex items-center space-x-6'>
            {getSocialData.map((s:Social, index:number)=>(
              <SocialIcon key={index} style={{height:30, width:30 }} className='hover:scale-125 duration-200 rounded-full border-2 border-white' url={s.url}/>
            ))}
        </div>
      </Motion>
      <Motion  delay={0.1} direction={'right'}>
        <div className='flex items-center space-x-4 md:space-x-8'>
          <span className='text-[#ffffff] uppercase tracking-wide md:tracking-widest text-sm md:text-base font-bold'>CV : </span>
            <DownloadBtn url='https://cdn.sanity.io/files/shoskdel/production/9aba22b82a8be53c651874c1bbe0342fb180cf8f.pdf' title='FR'/>
            <DownloadBtn url='https://cdn.sanity.io/files/shoskdel/production/d74ea8a219378c233e0d99cfea641a52ec32cd9d.pdf' title='EN'/>
        </div>
      </Motion>
    </nav>
  )
}

export default Navbar