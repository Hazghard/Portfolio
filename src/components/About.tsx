import React from 'react'
import Image from 'next/image'

import aboutPic from '../../public/IMG-20221207-WA0002.jpg'
import Motion from './Motion'


type Props = {}

const About = (props: Props) => {
    const textAbout1 = "Passionate about Frontend development, I am currently undergoing professional retraining after working as a machine security expert engineer. My transition to the development field was marked by obtaining my degree on the OpenClassrooms platform.";
    const textAbout2 = "Drawing from my previous expertise in security, I bring a rigorous and quality-oriented approach to my development projects.";
    const textAbout3 = "My diverse professional background provides me with a holistic view of technologies, and I am constantly eager to learn and adapt to industry changes as well as take on new exciting challenges.";
    return (
        <section className='max-w-7x1 mx-auto py-[70px] lg:px-80 md:px-20 flex flex-col items-center justify-center space-y-6 '>
            <Motion delay={0.1} direction={'left'}>
                <h2 className='text-2xl uppercase tracking-[20px] text-black-500'>about me</h2>
            </Motion>
            <div className='flex md:flex-row md:items-center md:justify-between w-full'>
                <div className='w-full'>
                    <Motion delay={0.1} direction={'left'}>
                        <div className='p-4 text-center font-semibold text-lg'>
                            <p>{textAbout1}</p>
                            <br />
                            <p>{textAbout2}</p>
                            <br />
                            <p>{textAbout3}</p>
                        </div>
                    </Motion>
                </div>
            </div>
        </section>
    )
}

export default About
