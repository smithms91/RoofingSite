import React from 'react'

type Props = {}

const AboutParallax = (props: Props) => {
  return (
    <section className='flex flex-col w-full relative lg:flex-row bg-white'>
      <div className='w-full bg-[url("/about.jpg")] h-[300px] sm:h-[500px] lg:h-[800px] bg-cover bg-fixed top-0 bottom-0'></div>
      <div className='w-full p-10 text-black/75 space-y-6 text-lg'>
        <h1 className='text-2xl lg:text-3xl font-bold '>About Roofing Company</h1>
        <p><strong>Roofing Company is a family business that has been helping Detroit home owners and businesses</strong> keep their properties looking and performing great for over 10 years. We&apos;re committed to using high-quality sustainable American materials and providing premium service and workmanship at a fair price. <strong>Happy customers are our best form of advertising!</strong></p>
        <p>Our goal is to simplify your roofing project by providing you the best quality products and installation, with customer service to match.</p>
        <p>Because we know that a simple change in the design or colour of your roof could significantly increase or decrease curb appeal and value of your home, we handle each project with the greatest care and attention to detail, as if it were our own home.</p>
        <p>With a wide range of steel roofing tile options, we will provide you with the perfect style and colour choices to compliment and enhance your home or commercial property. <strong>Lets get started!</strong></p>
        <button className='bg-blue-500 w-full p-4 text-white'>Get a Free Estimate</button>
      </div>
    </section>
  )
}

export default AboutParallax