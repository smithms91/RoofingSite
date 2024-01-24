import React from 'react'

type Props = {}

const RoofingFooter = (props: Props) => {
  return (
    <section className='bg-blue-500 w-full p-10 text-white text-sm text-center space-y-6 lg:text-lg'>
      <p>&copy; Copyright 2024 Roofing Company - All Rights Reserved</p>
      <ul className='flex items-center justify-between md:justify-center md:space-x-6'>
        <li>Privacy Policy</li>
        <li>Terms Of Use</li>
        <li>Home</li>
        <li>Facebook</li>
      </ul>
      <p>Roofing Company is your #1 source for residential and commercial metal roofing - proudly serving the Detroit area.</p>
    </section>
  )
}

export default RoofingFooter