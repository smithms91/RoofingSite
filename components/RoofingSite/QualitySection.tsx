import { Heart, Home } from 'lucide-react'
import React from 'react'

type Props = {}

const QualitySection = (props: Props) => {
  return (
    <section className='flex flex-col w-full p-10 space-y-4'>
      <Heart size={32} className='mx-auto' fill='red' color='red' />
      <h1 className='font-bold text-2xl text-center'>Premium Quality Work & Materials, at Wallet-Friendly Prices - Our Customers Love Us!</h1>
      <p className='text-sm text-center'>We Make it Easy For You to Protect Your Home Against The Worst American Weather.</p>
      <div className='gap-10 flex flex-col md:flex-row justify-around items-center flex-wrap relative'>
        <div className='bg-[#fefefe] text-gray-600 px-6 py-10 flex items-center flex-col justify-center space-y-4 max-w-[350px] max-h-[350px] border-2 border-transparent hover:bg-[#e5e5e5] hover:border-2 hover:border-[#b4b4b4] transition-all'>
          <Home size="42" color='#3B82F6' />
          <h1 className='font-bold text-xl'>Lifetime Roofing Solution</h1>
          <p className=''>A metal roof will last your lifetime without needing repair or replacement - unlike shingles that need replacing every 10-12 years.</p>
        </div>
        <div className='bg-[#fefefe] text-gray-600 px-6 py-10 flex items-center flex-col justify-center space-y-4  max-w-[350px] max-h-[350px] border-2 border-transparent hover:bg-[#e5e5e5] hover:border-2 hover:border-[#b4b4b4] transition-all'>
          <Home size="42" color='#3B82F6' />
          <h1 className='font-bold text-xl'>Environmentally Friendly</h1>
          <p className=''>Unlike shingles, metal roofs are made from recycled metal, and are fully recyclable in future. Shingles end up right in the landfill!</p>
        </div>
        <div className='bg-[#fefefe] text-gray-600 px-6 py-10 flex items-center flex-col justify-center space-y-4  max-w-[350px] max-h-[350px] border-2 border-transparent hover:border-2 hover:border-[#b4b4b4]  hover:bg-[#e5e5e5] transition-all'>
          <Home size="42" color='#3B82F6' />
          <h1 className='font-bold text-xl'>More Energy Efficient</h1>
          <p className=''>Metal roofing is more energy efficient compared to shingles - heating and cooling costs will be reduced, and the risk of mold in your attic is eliminated.</p>
        </div>
        <div className='bg-[#fefefe] text-gray-600 px-6 py-10 flex items-center flex-col justify-center space-y-4  max-w-[350px] max-h-[350px] border-2 border-transparent hover:bg-[#e5e5e5] hover:border-2 hover:border-[#b4b4b4] transition-all'>
          <Home size="42" color='#3B82F6' />
          <h1 className='font-bold text-xl'>True-North Super-Strong!</h1>
          <p className=''>Metal roofs are much stronger than shingles and withstand much more extreme snow, rain, wind or hail and won&apos;t suffer from ice dams.</p>
        </div>
        <div className='bg-[#fefefe] text-gray-600 px-6 py-10 flex items-center flex-col justify-center space-y-4  max-w-[350px] max-h-[350px] border-2 border-transparent hover:bg-[#e5e5e5] hover:border-2 hover:border-[#b4b4b4] transition-all'>
          <Home size="42" color='#3B82F6' />
          <h1 className='font-bold text-xl'>Increase Your Homes Value</h1>
          <p className=''>Choosing a metal roof is a sound investment that adds appeal - and value - to your home. Future buyers will love that they will never need to replace the roof!</p>
        </div>
        <div className='bg-[#fefefe] text-gray-600 px-6 py-10 flex items-center flex-col justify-center space-y-4  max-w-[350px] max-h-[350px] border-2 border-transparent hover:bg-[#e5e5e5] hover:border-2 hover:border-[#b4b4b4] transition-all'>
          <Home size="42" color='#3B82F6' />
          <h1 className='font-bold text-xl'>Proudly American</h1>
          <p className=''>We are proud to be American and use the best quality American-made materials that are made to withstand the worst American weather.</p>
        </div>
      </div>
    </section>
  )
}

export default QualitySection