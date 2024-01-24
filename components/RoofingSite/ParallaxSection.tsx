import React from 'react'

type Props = {}

const ParallaxSection = (props: Props) => {
  return (
    <section className='w-full lg:px-80 lg:text-lg text-center bg-cover bg-fixed p-10 text-white bg-top space-y-6' style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/about.jpg')" }}>
      <h1 className='text-2xl font-bold'>Ready to get started?</h1>
      <p>Request your free, No-Obligation estimate now!</p>
      <p>Simply click the button below, fill out the short form and we&apos;ll contact you to discuss your requirements and give you a simple, fair no-strings-attached no-hidden-surprises estimate.</p>
      <p>Straightforward, honest service - just like it should be.</p>
      <button className='max-w-full px-10 lg:px-20 bg-blue-500 p-4'>Get a Free Estimate!</button>
    </section>
  )
}

export default ParallaxSection