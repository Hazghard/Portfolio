import React from 'react'
import Project from './Project'
import Motion from './Motion'
import {ProjectsType} from '@/app/types/ProjectsType'


type Props = {
  props:ProjectsType[]
}

const Projects = ({props}: Props) => {
  console.log("props.length",props.length)
  return (
    <section className='max-w-7x1 mx-auto pt-[150px] py-0 md:px-[100px] px-[20px] pb-[150px] flex flex-col items-center justify-center space-y-20 '>
        <h2 className='text-2xl uppercase tracking-[20px] text-black-500 mb-[20px]'>projects</h2>
        <Motion delay={0.1} direction={''}>
          <div className={`grid ${props.length === 1 ? 'md:grid-cols-1' : props.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'} grid-cols-1 gap-8`}>
            {props.map((s:ProjectsType,i:number)=>(<Project key={i} props={s} />))}
          </div>
        </Motion>
    </section>
  )
}

export default Projects