import React from 'react'
import Image from 'next/image'

type Props = {}

const ProjectSection = (props: Props) => {
  return (
    <section className='p-10 lg:py-20 bg-white flex flex-col items-center justify-center text-center space-y-4'>
      <h1 className='text-2xl lg:text-4xl'>Check out some of our recent projects</h1>
      <p className='lg:text-lg'>Examples of our work on recently completed projects in Michigan and the Detroit area.</p>
      <div className='relative w-full flex flex-wrap items-center justify-center gap-4'>
        <div className='w-full md:w-[400px] h-[400px] relative'>
          <Image className="bg-cover object-cover" src="/projects/1.jpg" fill alt="Recent Work" />
        </div>
        <div className='w-full md:w-[400px] h-[400px] relative'>
          <Image className="bg-cover object-cover" src="/projects/2.jpg" fill alt="Recent Work" />
        </div>
        <div className='w-full md:w-[400px] h-[400px] relative'>
          <Image className="bg-cover object-cover" src="/projects/3.jpg" fill alt="Recent Work" />
        </div>
        <div className='w-full md:w-[400px] h-[400px] relative'>
          <Image className="bg-cover object-cover" src="/projects/4.jpg" fill alt="Recent Work" />
        </div>
        <div className='w-full md:w-[400px] h-[400px] relative'>
          <Image className="bg-cover object-cover" src="/projects/5.jpg" fill alt="Recent Work" />
        </div>
        <div className='w-full md:w-[400px] h-[400px] relative'>
          <Image className="bg-cover object-cover" src="/projects/6.jpg" fill alt="Recent Work" />
        </div>
      </div>
      <p className='lg:text-xl lg:py-5'>Lets work together and improve your home.</p>
      <button className='w-full md:w-[400px] lg:w-[600px] bg-blue-500 p-4 text-white'>Get a free estimate!</button>
    </section>
  )
}

export default ProjectSection