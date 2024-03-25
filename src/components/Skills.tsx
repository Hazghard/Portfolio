import React from 'react'
import SkillCircle from './SkillCircle'
import Motion from './Motion'
import { SkillsType } from '@/app/types/Skills'

type Props = {
  props:SkillsType[]
}

const Skills = ({props}:Props) => {
  return (
    <section className='max-w-7x1 mx-auto py-[70px] px-40 flex flex-col items-center justify-center space-y-6 '>
        <h2 className='text-2xl uppercase tracking-[20px] text-black-500 mb-[40px]'>skills</h2>
        <Motion delay={0.1} direction={''}>
          <div className='w-screen grid grid-cols-3 md:grid-cols-5 px-0 md:px-40 gap-4 md:gap-8 justify-items-center'>
            {props.map((s:SkillsType,index:number)=>(
              <SkillCircle key={index} props={s}/>
            ))}
          </div>
        </Motion>
    </section>
  )
}

export default Skills