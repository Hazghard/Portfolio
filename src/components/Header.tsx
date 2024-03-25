import React from 'react'
import Image from 'next/image'

import TypeWriter from './TypeWriter'
import CursorComponent from './CursorComponent'
import { SocialIcon } from 'react-social-icons'
import Motion from './Motion'
import { Profile } from '@/app/types/Profile'
import { Social } from '@/app/types/Social'

type Props = {
  props:Profile
}



const Header = ({props}: Props) => {
  const words: string[] = [
    props.smallBio
  ];

  return (
    <section className='relative z-0 md:h-[50%] w-full flex flex-col justify-center items-center'>
        <div className='w-full flex flex-col items-center justify-center space-y-4 mb-8 '>
            <Motion delay={0.1} direction={'down'}>
              <h1 className='font-bold text-center text-lg mb-[40px]'>Florimond LAPAQUE</h1>
            </Motion>
            <Motion delay={0.1} direction={'down'}>
              <div className='bg-white rounded-full h-40 w-40 mb-8 items-center justify-center shadow-md shadow-gray-400 hover:scale-105 duration-500 overflow-hidden border-solid border-4 hover:border-[#008170]'>
                <Image src={props.image} alt='img' height={250} width={250} style={{ transform: 'translate(6px, -16px) scale(0.85)' }}/>
              </div>
            </Motion>
                        <Motion delay={0} direction={''}>
              <div className='flex items-center space-x-20 w-full my-8 mb-8'>
                {props.socials.map((s:Social,i:number)=>(
                  <SocialIcon key={i} style={{height:40, width:40}} className='hover:scale-125 duration-200' url={s.url} />
                ))}
              </div>
            </Motion>
            <Motion delay={0.1} direction={''}>
              <div className='md:h-0 h-52 flex flex-row text-[30px] justify-center space-x-2 mb-8 '>
                <TypeWriter words={words}/>
                <CursorComponent/>
              </div>
            </Motion>
        </div>
        <div className='absolute -z-10 w-[50%] md:w-[20%] h-[30%] blur-3xl opacity-70 bg-gradient-to-r from-cyan-300 to-transparent ... '></div>
    </section>
  )
}

export default Header