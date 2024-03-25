import React from 'react'
import Motion from './Motion'

type Props = {}

const Divider = (props: Props) => {
  return (
    <Motion delay={0.1} direction={'left'}>
      <div className='w-screen'>
          <div className='w-[40%] h-[2px] bg-[#008170]'></div>
      </div>
  </Motion>
  )
}

export default Divider