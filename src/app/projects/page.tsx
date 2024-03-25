import Footer from '@/components/Footer'
import Motion from '@/components/Motion'
import Navbar from '@/components/Navbar'
import Project from '@/components/Project'
import React from 'react'

type Props = {}

const ProjectsPage = (props: Props) => {
  return (
    <section className='w-full bg-[#F1F6F9]'>
        <Navbar/>
        <main className='max-w-7x1 min-h-screen mx-auto p-5'>
          <Motion delay={0.1} direction={''}>
            <div className='w-full my-4 md:my-16 p-5 grid grid-cols-1 md:grid-cols-3 gap-12'>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
            </div>
          </Motion>
        </main>
        <Footer/>
    </section>
  )
}

export default ProjectsPage