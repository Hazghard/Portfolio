import Image from 'next/image'
import React from 'react'
import { SkillsType } from '@/app/types/Skills'

type Props = {
  props:SkillsType
}

const SkillCircle = ({props}: Props) => {
  return (
    <div className='h-24 w-24 flex justify-center items-center p-1 rounded-full shadow-lg shadow-gray-400 bg-[#6bebc6] duration-300 hover:bg-[#296855] hover:scale-110 group'>
      <div className='h-full w-full relative flex justify-center items-center bg-[#F1F6F9] rounded-full group-hover:opacity-100 transition-opacity ease-in duration-300'>
          <div className='h-full w-full absolute top-0 left-0 flex justify-center items-center text-[#0F0F0F] font-bold p-4 text-center rounded-lg opacity-0 group-hover:opacity-100'>
              {props.title}
          </div>
          <Image src={props.image} alt='skill' height={50} width={50} className='group-hover:opacity-0' />
      </div>
    </div>
  )
}

export default SkillCircle