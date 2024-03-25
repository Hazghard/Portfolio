import React from 'react'
import Link from 'next/link'
import DownloadSvg from '../../public/download.svg'
import Image from 'next/image'

type Props = {
    url:string,
    title:string
}

export const DownloadBtn = (props: Props) => {
  return (
    <Link href={props.url} className='flex flex-row justify-center items-center w-[50px] h-[20px] gap-x-[8px]'>
        <Image src={DownloadSvg} alt='DownloadBtn' width={15} height={15} className='dark:invert'></Image>
        <span className='text-white hover:text-[#76ABAE] uppercase tracking-wide md:tracking-widest text-sm md:text-base font-bold'>{props.title}</span>
    </Link>
  )
}