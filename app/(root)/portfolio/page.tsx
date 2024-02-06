import PortfolioSection from '@/components/PortfolioSection'
import { portfolios } from '@/constants'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

export const metadata: Metadata = {
    title: "Portfolio - Carrey Cheang"
}

const page = () => {
  return (
    <>
      <section className='dark:bg-stone-950 bg-peach-500 md:pt-24 pt-32   max-width '>
        <div className='dark:bg-stone-800 box text-center flex flex-col items-center gap-3'>
            <div className='w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink-0 mb-5'>
                <Image src={"/icons/stars.svg"} alt="icon" width={35} height={35}/>
            </div>
            <h2 className='dark:text-peach-700 text-grey-700'>My Creative Portfolios</h2>
            <p className='dark:text-peach-600 text-grey-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic harum dic</p>
        </div>
      </section>

      {/* removing first 3 portfolio and adding at last to make a variation */}
      <PortfolioSection data={portfolios} title={"Projects Done in 2024"}/>

      {/* removing first 3 porfolio and adding at last to make a variation */}
      <PortfolioSection 
        data={portfolios.slice(3).concat(portfolios.slice(0,3))} 
        title={"Projects Done in 2023"}
      />

      {/* same with 6 */}
      <PortfolioSection 
        data={portfolios.slice(6).concat(portfolios.slice(0,6))} 
        title={"Projects Done in 2022"}
      />
    </>
  )
}

export default page
