import React from 'react'
import { SocialIcon } from 'react-social-icons'
import Motion from './Motion'
import { Social } from '@/app/types/Social'

type Props = {
  props:Social[],
}

const Footer = ({props}: Props) => {
  console.log("Footer props",props)
  return (
    <footer className='w-full  py-5 bg-gradient-to-r from-[#6bebc6] to-[#44af8f]'>
        <div className='max-w-7x1 mx-auto flex justify-between items-center p-5'>
          <Motion delay={0.1} direction={'left'}>
            <div className='flex items-center space-x-6'>
              {props.map((s:Social, index:number)=>(
                <SocialIcon key={index} style={{height:30, width:30}} className='hover:scale-125 duration-200' url={s.url}/>
              ))}
            </div>
          </Motion>
          <Motion delay={0.1} direction={'right'}>
            <p className='text-[#F1F6F9] text-xs md:text-sm'>Made with ❤️ by Florimond LAPAQUE</p>
          </Motion>

        </div>
    </footer>
  )
}

export default Footer