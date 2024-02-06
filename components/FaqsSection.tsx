import React from 'react'
import SectionHeading from './SectionHeading'
import { ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'
import Accordion from './Accordion'
import { faqs } from '@/constants'

const FaqsSection = () => {
  return (
    <section className='dark:bg-stone-950 bg-peach-500 max-width section-padding overflow-hidden'>
      <SectionHeading
        title='Frequently Asked Question'
        subtitle="jdkdk jeiei iowlq ppoo oididk fjdiwu quei fjdkf "
      />
        <div className='dark:bg-stone-950 bg-peach-500 flex flex-col tablet:flex-row gap-5 items-start'>
            <div className='dark:bg-stone-800 bg-peach-300 box'>
                <Accordion data={faqs} />
            </div>
            <div className='dark:bg-stone-800  box flex flex-col gap-5 tablet:max-w-md'>
                <div className='w-16 h-16 rounded bg-purple text-peach-100 flex items-center justify-center flex-shrink-0 mb-2'>
                    <Star fill="currentColor" size={30} />
                </div>
                <div>
                    <h5 className='dark:text-peach-700 text-grey-700 mb-2'>Still have any questions?</h5>
                    <p className='dark:text-peach-700 text-grey-600'>jfkdk eieie fjdkdk jfkdk skdldk fkdlsl {" "}</p>
                </div>
                <Link href={"/contact"} className='btn btn-primary w-max'>
                    Contact me <ArrowRight />
                </Link>
            </div>
        </div>
    </section>
  )
}

export default FaqsSection
