import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import SectionHeading from '@/components/SectionHeading'
import { timeline } from '@/constants'

export const metadata: Metadata = {
    title: "About - Carrey Cheang"
}

const page = () => {
  return (
    <>
      <section className='dark:bg-stone-950 bg-peach-500 md:pt-24 pt-32 pt-24 pb-16 max-width justify-center flex flex-col tablet:flex-row gap-20 items-center'>
        <div className='relative justify-center w-96 tablet:w-200px h-[calc(300px+20vw)] tablet:h-[600px] ' data-aos="fade-right" data-aos-delay="100">
            <Image 
                src={"/images/about.png"}
                fill
                alt='about img'
                className=''
            />
        </div>

        <div className='tablet:w-1/2'>

          <div className=' space-y-3 max-tablet:text-center flex flex-col mb-4'>
            <p className='dark:bg-stone-800 dark:text-peach-700 px-4 py-2 bg-peach-500 text-grey-600 w-max rounded tablet:w-max max-tablet:mx-auto' data-aos="fade-down" data-aos-delay="100">
              Welcome to the world of captivating web development!
            </p>
            <h1 className="dark:text-peach-700 text-grey-700" data-aos="fade-down" data-aos-delay="200">I'm Carrey Cheang</h1>
            <p className="dark:text-peach-700 text-grey-600" data-aos="fade-down" data-aos-delay="300">
            I have been working in the social services industry for over a decade, 
              assisting young individuals in recovering from drug addiction and 
              reintegrating into society. I also help them rebuild their family 
              relationships. Apart from my professional work, I have a passion for 
              learning new knowledge and skills. Web development is one of my interests, 
              and during my free time, I dedicate myself to learning various web 
              development-related skills.
            </p>
          </div>

        <div className='text-center dark:bg-stone-800 bg-peach-300 w-full py-4 px-4 rounded-1-lg justify-around flex-wrap gap-6  lm:flex' data-aos="fade-left" data-aos-delay="400">
            <div className='my-4 border-t-2 border-b-2 py-4'>
              <p className='dark:text-peach text-grey-600'>Serve</p>
              <h3 className='dark:text-peach-700 text-grey-700'>
                400 <span className='text-purple'>+</span>
              </h3>
              <p className='dark:text-peach text-grey-600'>Individuals with drug addiction</p>
            </div>
            <div className='my-4 border-t-2 border-b-2 py-4'>
              <p className='dark:text-peach text-grey-600'>Organize and/or coordinate</p>
              <h3 className='dark:text-peach-700 text-grey-700'>
                10 <span className='text-purple'>+</span>
              </h3>
              <p className='dark:text-peach text-grey-600'>events or courses annually</p>
            </div>
            <div className='my-4 border-t-2 border-b-2 py-4'>
              <h3 className='dark:text-peach-700 text-grey-700'>
                13 <span className='text-purple'>+</span>
              </h3>
              <p className='dark:text-peach text-grey-600'>Years of experience</p>
            </div>
        </div>

        </div>

      </section>

      {/* Milstons Section */}
      <section className='max-width pt-20 pb-24'>
        <SectionHeading
          title='Milestones of my career'
          subtitle='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi temporibus animi quos 
          iusto assumenda, magni sit beatae provident dignissimos porro sunt impedit expedita perspiciatis quia 
          earum velit eos quasi? Dolores.'
        />
        <div className='space-y-8 relative before:absolute before:inset-0 before:ml-5 before:translate-x-px
        tablet:before:mx-auto tablet:before:translate-x-0 before:h-full before:w-0.5 before:bg-purple before:bg-opacity-30'>
          {timeline.map((item,index) => (
            <div 
              key={index}
              className='relative flex items-center justify-between tablet:justify-normal tablet:odd:flex-row-reverse group'
            >

                <div
                  className='flex items-center justify-center w-10 h-10 rounded-full bg-peach-400 shrink-0 tablet:order-1
                  tablet:group-odd:-translate-x-1/2 tablet:group-even:translate-x-1/2
                  group-first:before:absolute group-first:before:w-1 group-first:before:h-20 group-first:before:bottom-full
                  group-first:before:bg-peach-600 dark:group-first:before:bg-purple
                  group-last:before:absolute group-last:before:w-1 group-last:before:h-20 group-last:before:bottom-full
                  group-last:before:top-full group-last:before:bg-peach-600 dark:group-last:before:bg-purple'
                >
                  <span className='w-3 h-3 bg-purple rounded-full'></span>
                </div>

                <div className='dark:bg-stone-800 w-[calc(100%-4rem)] tablet:w-[calc(50%-2.5rem)] box !p-5 tablet:!p-8' data-aos="fade-down" data-aos-delay="200">
                  <div className='flex items-center justify-between space-x-2 mb-1'>
                    <h6 className='dark:text-peach-700 text-grey-700'>{item.title}</h6>
                    <p className='dark:text-yellow font-semibold text-purple'>{item.duration}</p>
                  </div>
                  <div className='dark:text-peach-700 text-grey-600'>{item.description}</div>
                </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default page
