"use client"

import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'

type Props = {
  words: string[];
}

const TypeWriter = (props: Props) => {
  // console.log('props', props)
    const [text] = useTypewriter({
        words:props.words,
        loop : true,
        delaySpeed: 2000
    })
  return (
    <h1 className='text-3x1 md:text-5x1 font-extrabold text-center'>{text}</h1>
  )
}

export default TypeWriter