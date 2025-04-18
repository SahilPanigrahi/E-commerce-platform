import dynamic from 'next/dynamic'
import Hero from '@/components/landing-page/Hero'
import Sale from '@/components/landing-page/Sale'
import YearProduct from '@/components/landing-page/YearProduct'
import React from 'react'
const HeroBottom = dynamic(() => import('@/components/landing-page/HeroBottom'))

const App = () => {
  return (
    <div>
      <Hero />
      <HeroBottom />
      <div className="max-w-[1600px] mx-auto px-4 bg-white">
        <Sale />
        <YearProduct />
      </div>
    </div>
  )
}

export default App
