import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import reactIcon from '@public/react-icon.png'

type Props = {}

function Post({}: Props) {
  return (
    <Link href='/posts/slugs' className='flex item border-2 border-violet-400 hover:scale-105 duration-500 space-x-4 bg-violet-100 rounded-lg shadow-lg shadow-gray-300 p-3'>
        <div className='w-[40%]'>
            <Image src={reactIcon} alt='blogImg' className='w-full object-cover rounded-lg' height={100} width={100} />
        </div>
        <div className='w-[60%] flex flex-col items-start justify-center'>
          <h2 className='font-bold text-xl'>This is a text sample to show the design</h2>
          <div className='flex items-center space-x-1 text-violet-500'>
            <p>Author :</p>
            <p className='font-bold'>John DOE</p>
          </div>
          <div className='w-full justify-between flex items-center space-x-1 text-violet-500'>
            <p className='text-sm'>2023/09/06</p>
            <p className='font-bold text-xs'>Click to read more</p>
          </div>
        </div>
    </Link>
  )
}

export default Post