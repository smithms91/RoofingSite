import React from 'react'
import { Home } from 'lucide-react'

type Props = {}

const RoofingAbout = (props: Props) => {
  return (
    <section className='p-10 text-center space-y-6 bg-white text-gray-700'>
      <h1 className='text-2xl font-bold'>Forget Shingles - Here&apos;s Why Metal Roofing is the #1 Choice For Smart Home Owners in Detroit</h1>
      <p><strong>Over the last few years, Detroit has seen a trend of savvy home and business owners replacing traditional shingle roofs with metal - with good reason.</strong> Metal roofs have many benefits for home owners and the environment.</p>
      <p>Here&apos;s just a few great reasons you should choose metal roofing instead of shingles for your home or commercial property...</p>
      <div className='gap-10 flex flex-col md:flex-row justify-around items-center flex-wrap relative'>
        <div className='bg-[#cecece] text-gray-600 px-6 py-10 flex items-center flex-col justify-center space-y-4 max-w-[350px] max-h-[350px] hover:bg-[#e5e5e5] transition-all'>
          <Home size="42" color='#3B82F6' />
          <h1 className='font-bold text-xl'>Lifetime Roofing Solution</h1>
          <p className=''>A metal roof will last your lifetime without needing repair or replacement - unlike shingles that need replacing every 10-12 years.</p>
        </div>
        <div className='bg-[#cecece] text-gray-600 px-6 py-10 flex items-center flex-col justify-center space-y-4  max-w-[350px] max-h-[350px]  hover:bg-[#e5e5e5] transition-all'>
          <Home size="42" color='#3B82F6' />
          <h1 className='font-bold text-xl'>Environmentally Friendly</h1>
          <p className=''>Unlike shingles, metal roofs are made from recycled metal, and are fully recyclable in future. Shingles end up right in the landfill!</p>
        </div>
        <div className='bg-[#cecece] text-gray-600 px-6 py-10 flex items-center flex-col justify-center space-y-4  max-w-[350px] max-h-[350px]  hover:bg-[#e5e5e5] transition-all'>
          <Home size="42" color='#3B82F6' />
          <h1 className='font-bold text-xl'>More Energy Efficient</h1>
          <p className=''>Metal roofing is more energy efficient compared to shingles - heating and cooling costs will be reduced, and the risk of mold in your attic is eliminated.</p>
        </div>
        <div className='bg-[#cecece] text-gray-600 px-6 py-10 flex items-center flex-col justify-center space-y-4  max-w-[350px] max-h-[350px]  hover:bg-[#e5e5e5] transition-all'>
          <Home size="42" color='#3B82F6' />
          <h1 className='font-bold text-xl'>True-North Super-Strong!</h1>
          <p className=''>Metal roofs are much stronger than shingles and withstand much more extreme snow, rain, wind or hail and won&apos;t suffer from ice dams.</p>
        </div>
        <div className='bg-[#cecece] text-gray-600 px-6 py-10 flex items-center flex-col justify-center space-y-4  max-w-[350px] max-h-[350px]  hover:bg-[#e5e5e5] transition-all'>
          <Home size="42" color='#3B82F6' />
          <h1 className='font-bold text-xl'>Increase Your Homes Value</h1>
          <p className=''>Choosing a metal roof is a sound investment that adds appeal - and value - to your home. Future buyers will love that they will never need to replace the roof!</p>
        </div>
        <div className='bg-[#cecece] text-gray-600 px-6 py-10 flex items-center flex-col justify-center space-y-4  max-w-[350px] max-h-[350px]  hover:bg-[#e5e5e5] transition-all'>
          <Home size="42" color='#3B82F6' />
          <h1 className='font-bold text-xl'>Proudly American</h1>
          <p className=''>We are proud to be American and use the best quality American-made materials that are made to withstand the worst American weather.</p>
        </div>
      </div>
      <p className='lg:text-xl font-semibold'>Want the best roof for your home? A metal roof from Roofing Company should be your choice!</p>
      <button className='bg-blue-600 w-full p-4 text-white max-w-[600px]'>Get a free estimate!</button>
    </section>
  )
}

export default RoofingAbout