import QuoteForm from '../forms/QuoteForm'
import React from 'react'

type Props = {}

const RoofingEstimate = (props: Props) => {
  return (
    <section className='mt-24 w-full flex flex-col md:flex-row items-center justify-evenly p-10 md:px-20 lg:px-40 bg-cover bg-fixed bg-no-repeat bg-top lg:bg-center' style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/quotebg.jpg')" }}>
      <div className='mb-6 md:mb-0 space-y-4 text-center relative text-white basis-2/4 max-w-[400px] md:mr-10 '>
        <h1 className='text-2xl font-bold lg:text-4xl'>Finally! A Roof that lasts a Lifetime!</h1>
        <p className=''>Learn more about us and the benefit of installing metal roofing for your home below, or fill in the form to request your free no-obligation estimate today!</p>
        <button className='w-full p-4 bg-blue-500 text-sm'>Learn More &gt;</button>
      </div>
      <QuoteForm />
    </section>
  )
}

export default RoofingEstimate