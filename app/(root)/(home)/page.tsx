"use client"
import PortfolioItem from '@/components/PortfolioItem'
import SectionHeading from '@/components/SectionHeading'
import TestimonialSection from '@/components/TestimonialSection'
import { benefits, portfolios, skills } from '@/constants'
import { ArrowRight, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import FaqsSection from '@/components/FaqsSection'
import { FaGithub, FaHtml5, FaReact, FaSass } from "react-icons/fa6";
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io'

const page = () => {
  return (
    <div>
      {/* hero section */}
      <section className='dark:bg-stone-950 pt-20 pb-16 bg-peach-500 flex items-center max-width flex-col-reverse tablet:flex-row '>
      
        <div className=' tablet:w-2/3 mt-10 tablet:mt-0'>
          <div className='flex flex-col gap-3 items-center tablet:items-start max-w-2xl text-center tablet:text-left'>
            <p 
              className='dark:bg-purple dark:text-peach px-4 py-2 bg-peach-500 text-grey-600 w-max rounded'
              data-aos="fade-down"
            >
                Welcome 🤗
            </p>
            <h1 className='dark:text-peach text-grey'  data-aos="fade-down" data-aos-delay="100">
              Here is Carrey Cheang!
            </h1>
            <p className='dark:text-peach-700 text-grey-600' data-aos="fade-down" data-aos-delay="200">
              I have been working in the social services industry for over a decade, 
              assisting young individuals in recovering from drug addiction and 
              reintegrating into society. I also help them rebuild their family 
              relationships. Apart from my professional work, I have a passion for 
              learning new knowledge and skills. Web development is one of my interests, 
              and during my free time, I dedicate myself to learning various web 
              development-related skills.
            </p>
          </div>

          <div className=' flex gap-5 mt-6 justify-center tablet:justify-start' data-aos="fade-down" data-aos-delay="300">
            <Link href={"/contact"} className='btn primary dark:text-peach'>
              <Phone />
              Contact now
            </Link>
            <Link href={"/portfolio"} className='dark:text-peach btn'>
              View Portfolio
              <ArrowRight size={16}/>
            </Link>
          </div>

          {/* <div className='mt-16 grid grid-cols-2 gap-3 tablet:hidden'>
            <div className='py-8 px-10 rounded-lg bg-peach-400 text-center col-span-2'>
              <h3 className='text-grey-700'>
                55 <span className='text-purple'>+</span>
              </h3>
              <p className='text-grey-600'>Projects Completed</p>
            </div>
            <div className='py-8 px-10 rounded-lg bg-peach-400 text-center col-span-2'>
              <h3 className='text-grey-700'>
                55 <span className='text-purple'>+</span>
              </h3>
              <p className='text-grey-600'>Happy Customers</p>
            </div>
            <div className='py-8 px-10 rounded-lg bg-peach-400 text-center col-span-2'>
              <h3 className='text-grey-700'>
                5 <span className='text-purple'>+</span>
              </h3>
              <p className='text-grey-600'>Years of experience</p>
            </div>
          </div> */}

        </div>

        <div 
          className=' relative w-80 tablet:w-96 h-[400px] tablet:h-[550px] rounded-b-2xl overflow-hidden'
          data-aos="fade-left" data-aos-delay="300"
        >
            <Image
              src={"/images/hero.jpg"} 
              alt='hero'
              fill
              className=''
            />
          </div>

      </section>

      <section className='dark:bg-stone-950 bg-peach-500 max-width section-padding'>
        <SectionHeading
          title="Social Services"
          subtitle="Here is my overview of my involvement in social service over the past decade."
        />
        <div className='text-center dark:bg-stone-800 bg-peach-300 w-full py-4 px-10 rounded-1-lg justify-around flex-wrap gap-12  lm:flex' data-aos="fade-right" data-aos-delay="400">
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
      </section>

      <section className='dark:bg-stone-950 bg-peach-500 max-width section-padding'>
        <SectionHeading
          title="Web Development"
          subtitle="Although not currently a full-time web developer, 
          I have been learning during my spare time and am able to utilize 
          web design tools such as HTML, CSS, JavaScript, React, Tailwind CSS, 
          and more to complete web development projects."
        />
        <div className='dark:bg-stone-800 bg-peach-300 text-center bg-peach-400 w-full py-4 px-10 rounded-1-lg justify-around flex-wrap gap-12 flex' data-aos="fade-right" data-aos-delay="400">
            <div className='my-2 text-4xl text-red-600'>
              <FaHtml5 />
            </div>
            <div className='my-2 text-4xl text-sky-600'>
              <IoLogoCss3 />
            </div>
            <div className='my-2 text-4xl text-[#FF22E9]'>
              <FaSass />
            </div>

            <div className='my-2 text-4xl text-[#F0DB4F]'>
              <IoLogoJavascript />            
            </div>
            <div className='my-2 text-4xl text-[#61DBFB]'>
              <FaReact />          
            </div>
            <div className='my-2 text-4xl text-black'>
              <FaGithub />
            </div>
            <div className='my-2 text-4xl text-black'>
            <Image 
                    src="/images/figma.png"
                    width={36}
                    height={36}
                    alt='logo'  
              />
            </div>


        </div>
      </section>


      {/* skills section */}
      <section className='dark:bg-stone-950 bg-peach-500 max-width section-padding'>
        <SectionHeading
          title="Creative Skills"
          subtitle="lorem ipsum dolor,...."
        />

          {/* skills */}
        <div className=' grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6'>
          {skills.map((skill,index)=>(
            <div key={index} className='dark:bg-stone-800 bg-peach-300 box flex flex-col items-center gap-5'>
              
              <div className='w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrnk-0 mb-2'>
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={35}
                  height={35}
                />
              </div>

              <div className=' text-center'>
                <h4 className='dark:text-peach-700 text-grey-700 mb-2'>{skill.name}</h4>
                <p className='dark:text-peach-700 text-grey-600'>{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* benifits section */}
      <section className='dark:bg-stone-950 bg-peach-500 max-width section-padding'>
        <SectionHeading
          title='Benefits'
          subtitle="lorem ipsum dolor,...."
        />
        <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6 mb-3 tablet:mb-6'>
            {benefits.slice(0,2).map((benefit,index) =>(
              <div key={index} className='box dark:bg-stone-800'>
                <h5 className='dark:text-peach-700 text-grey-700 mb-2'>{benefit.name}</h5>
                <p className='dark:text-peach-700 text-grey-600'>{benefit.description}</p>
              </div>
            ))}
        </div>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6'>
            {benefits.slice(2).map((benefit,index) =>(
              <div key={index} className='box dark:bg-stone-800 bg-peach-300'>
                <h5 className='dark:text-peach-700 text-grey-700 mb-2'>{benefit.name}</h5>
                <p className='dark:text-peach-700 text-grey-600'>{benefit.description}</p>
              </div>
            ))}
        </div>
      </section>

      {/* portfolio section */}
      <section className='dark:bg-stone-950 bg-peach-500 max-width section-padding'>
        <SectionHeading
          title='My Works'
          subtitle="lorem ipsum dolor,...."
        />
        <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6'>
          {portfolios.slice(0,3).map((portfolio, index)=>(
            <PortfolioItem key={index} portfolio={portfolio}/>
          ))}
        </div>
        
        <Link 
          href={"/portfolio"}
          className='btn btn-primary mt-10 mx-auto w-max'
        >
          View All projects
        </Link>
      </section>

      {/* testimonial section */}
      <TestimonialSection />

      {/* FAQs Section */}
      <FaqsSection />
    </div>

  )
}

export default page
