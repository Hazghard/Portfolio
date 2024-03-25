import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {ProjectsType} from '@/app/types/ProjectsType'


type Props = {
  props:ProjectsType
}

const Project = ({props}: Props) => {
  console.log("Project props",props);
  return (
    <>
      <Link href={props.url} className='relative w-[400px] h-[200px] rounded-lg group cursor-pointer hover:scale-105 duration-300 border-2'>
          <Image src={props.image} alt='' height={200} width={400} className='rounded-lg w-full h-full object-cover'/>
          <div className='h-full w-full absolute top-0 left-0 flex justify-center items-center font-bold text-[#363a38] p-4 text-center rounded-lg opacity-0 group-hover:opacity-100 transition-all ease-in duration-300 bg-[#e3e9e7]'>
            {props.description}
          </div>
          <div className='h-auto w-[100%] absolute top-0 left-0 sm:hidden flex justify-center items-center font-bold text-[#e8ecea] p-4 text-center rounded-lg bg-[#1c1d1def]'>
            {props.description}
          </div>
      </Link>

    </>
  )
}

export default Project
