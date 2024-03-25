import React from 'react'
import Motion from './Motion'

type Props = {}

const Blog = (props: Props) => {
  return (
    <div className='w-full flex justify-between items-center'>
      <Motion delay={0.1} direction={'left'}>
        <p className='text-gray-600 cursor-pointer hover:text-pink-500'>This is a title !</p>
      </Motion>

      <Motion delay={0.1} direction={'right'}>
        <p className='text-sm text-gray-600 hidden md:block'>2024/01/01</p>
      </Motion>
    </div>
  )
}

export default Blog