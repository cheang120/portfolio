import PortfolioSection from '@/components/PortfolioSection'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

export const metadata: Metadata = {
    title: "Portfolio - Carrey Cheang"
}

const page = () => {
  return (
    <>
      <section className='max-width section-padding'>
        <div className='box text-center flex flex-col items-center gap-3'>
            <div className='w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink-0 mb-5'>
                <Image src={"/icons/stars.svg"} alt="icon" width={35} height={35}/>
            </div>
            <h2 className='text-grey-700'>My Creative Portfolios</h2>
            <p className='text-grey-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic harum dic</p>
        </div>
      </section>

      <PortfolioSection data={[]} title={''} />
    </>
  )
}

export default page
