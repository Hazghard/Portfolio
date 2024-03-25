import React from 'react'
import Image from 'next/image'

import aboutPic from '../../public/IMG-20221207-WA0002.jpg'
import Motion from './Motion'


type Props = {}

const About = (props: Props) => {
    const textAbout1 = "Passionné par le développement Frontend, je suis actuellement en reconversion professionnelle après avoir exercé en tant qu'ingénieur expert en sécurité des machines. Ma transition vers le domaine du développement a été marquée par l'obtention de mon diplôme sur la plateforme OpenClassrooms."
    const textAbout2 = "Fort de mon expertise antérieure en sécurité, j'apporte une approche rigoureuse et orientée vers la qualité à mes projets de développement."
    const textAbout3 = "Mon parcours professionnel diversifié me confère une vision holistique des technologies, et je suis constamment avide d'apprendre et de m'adapter aux évolutions du secteur ainsi que de relever de nouveaux défis passionnants"
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