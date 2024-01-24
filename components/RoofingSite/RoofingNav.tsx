import React from 'react'
import Image from 'next/image'

type Props = {}

const RoofingNav = (props: Props) => {
  return (
    <nav className='bg-[#3B82F6] flex items-center fixed top-0 left-0 right-0 z-20 justify-between w-full px-10 md:px-20 lg:px-40 py-4 border-b-2 border-black/25'>
      <p><Image src="/logoipsum-241.svg" width="100" height="100" alt="Logo" /></p>
      <button className='p-4 bg-[#12183a] text-white'>Get Estimate &gt;</button>
    </nav>
  )
}

export default RoofingNav