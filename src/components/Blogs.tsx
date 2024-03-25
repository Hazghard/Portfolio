import React from 'react'
import Blog from './Blog'
import Motion from './Motion'

type Props = {}

const Blogs = (props: Props) => {
  return (
    <section className='max-w-7x1 h-screen mx-auto p-5 flex flex-col items-center justify-center space-y-24 '>
      <h2 className='text-2x1 uppercase tracking-[20px] text-black-500'>blogs</h2>
      <div className='w-full flex flex-col items-start space-y-3 '>
        <Blog/>
        <Blog/>
        <Blog/>
      </div>
      <p className='text-center text-sm text-slate-950 cursor-pointer'>See more..</p>
    </section>
  )
}

export default Blogs