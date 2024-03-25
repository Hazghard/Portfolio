import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { getFiles, getProfile, getProjects, getSkills, getSocials } from "@/utils/sanity-utils";

import reactIcon from '@public/react-icon.png'



type Props = {}

const ProjectPage = async (props: Props) => {
    const getSocialData = await getSocials();
    const getProfileFiles = await getFiles();
  return (
    <section className='w-full bg-[#F1F6F9]'>
      <Navbar getSocialData={getSocialData} getProfileFiles={getProfileFiles} />
        <div className='min-h-screen flex flex-col max-w-7x1 mx-auto my-4 md:my-8 p-5 space-y-4'>
            <h1 className='font-extrabold text-3x1'>MERN Stack Blog App</h1>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-2 text-sm text-violet-500'>
                    <p>Created at:</p>
                    <p className='font-bold'>2023/09/06</p>
                </div>
                <button className='text-[#F1F6F9] md:font-bold bg-violet-500 px-2 md:px-4 py-2 rounded-lg hover:bg-violet-300 text-sm'>
                    <Link href="/">Link</Link>
                </button>
            </div>
            <Image src={reactIcon} alt="" className="w-full object-cover border-2 border-violet-500" height={500} width={500}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deserunt iste commodi ducimus rem praesentium, qui harum voluptatem eveniet beatae iure nobis voluptatum consequatur quidem veritatis ea obcaecati dolore repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi libero voluptates nobis delectus, officiis commodi, consequatur, cum nulla expedita laborum blanditiis nam perspiciatis necessitatibus magnam. Voluptatem perspiciatis totam nulla distinctio.</p>
            <div className='flex items-center space-x-4 text-violet-500'>
                <h2 className=''>Tech used :</h2>
                <div className='flex item space-x-2 text-sm font-bold'>
                    <p className='bg-violet-200 rounded-lg p-1'>NEXT 13</p>
                </div>
            </div>
        </div>
        <Footer props={getSocialData}/>
    </section>
  )
}

export default ProjectPage
