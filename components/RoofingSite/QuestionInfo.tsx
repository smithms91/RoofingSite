'use client';

import React from 'react'
import { Map, Mail } from 'lucide-react'

type Props = {}

const QuestionInfo = (props: Props) => {
  return (
    <section className='text-center p-10 space-y-6 w-full py-20'>
      <h1 className='text-xl lg:text-3xl -mb-4'>Got questions or need more info?</h1>
      <p className='lg:text-lg'>Feel free to contact us any time, we&apos;re here to help :)</p>
      <div className='flex flex-col lg:flex-row items-center justify-center gap-4 w-full'>
        <div className='flex w-full md:w-[600px] flex-col items-center justify-center gap-4 bg-white shadow-lg p-4 text-sm'>
          <Map size="36" color="#3B82F6" />
          <p className='md:text-lg'>Based in Roseville, Michigan</p>
        </div>
        <div className='flex w-full md:w-[600px] flex-col items-center justify-center gap-4 bg-white shadow-lg p-4 text-sm'>
          <Mail size="36" color="#3B82F6" />
          <p className='md:text-lg'>info@roofingsite.com</p>
        </div>
      </div>
    </section>
  )
}

export default QuestionInfo