import Footer from '@/components/Footer'
import Motion from '@/components/Motion'
import Navbar from '@/components/Navbar'
import Project from '@/components/Project'
import React from 'react'
import { getFiles, getProfile, getProjects, getSkills, getSocials } from "@/utils/sanity-utils";
import {ProjectsType} from '@/app/types/ProjectsType'

type Props = {
  props:ProjectsType[]
}

const ProjectsPage = async ({props}: Props) => {
  const getSocialData = await getSocials();
  const getProfileFiles = await getFiles();
  return (
    <section className='w-full bg-[#F1F6F9]'>
      <Navbar getSocialData={getSocialData} getProfileFiles={getProfileFiles} />
        <main className='max-w-7x1 min-h-screen mx-auto p-5'>
          <Motion delay={0.1} direction={''}>
            <div className='w-full my-4 md:my-16 p-5 grid grid-cols-1 md:grid-cols-3 gap-12'>
            {props.map((s:ProjectsType,i:number)=>(<Project key={i} props={s} />))}
            </div>
          </Motion>
        </main>
        <Footer props={getSocialData}/>
    </section>
  )
}

export default ProjectsPage;
