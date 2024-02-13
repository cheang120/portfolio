"use client"
import PortfolioSection from '@/components/PortfolioSection'
import { portfolios } from '@/constants'
import { Metadata } from 'next'
import Image from 'next/image'
import { FaGithub, FaHtml5, FaReact, FaRegFileWord, FaSass } from 'react-icons/fa6'
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io'
import React from "react";
import { render } from "react-dom";
import 'tailwindcss/tailwind.css'
import ProgressBar from '@ramonak/react-progress-bar'
import { SiTailwindcss } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'




const page = () => {

  return (
    <>
      <section className='dark:bg-stone-950 bg-peach-500 md:pt-24 pt-32   max-width '>
        <div className='dark:bg-stone-800 box text-center flex flex-col items-center gap-3'>
            <div className='w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink-0 mb-5'>
                <Image src={"/icons/stars.svg"} alt="icon" width={35} height={35}/>
            </div>
            <h2 className='dark:text-peach-700 text-grey-700'>My works in Web Development and skills.</h2>
            <p className='dark:text-peach-600 text-grey-600'>Here are some of my projects about web development and skills in <span className='text-violet-500'>web development</span> and <span className='text-violet-500'>office</span>.</p>
        </div>
      </section>

      {/* removing first 3 portfolio and adding at last to make a variation */}
      <PortfolioSection data={portfolios} title={"My Works in Web development"}/>

      {/* removing first 3 porfolio and adding at last to make a variation */}
      {/* <PortfolioSection 
        data={portfolios.slice(3).concat(portfolios.slice(0,3))} 
        title={"Projects Done in 2023"}
      /> */}

      {/* same with 6 */}
      {/* <PortfolioSection 
        data={portfolios.slice(6).concat(portfolios.slice(0,6))} 
        title={"Projects Done in 2022"}
      /> */}


    <div className='dark:bg-stone-950 bg-peach-500 max-width section-padding'>
            <div className='pb-3 border-b border-peach flex justify-between items-center'>
                <p>Web Development Skills</p>

            </div>

            <div className='pt-8'>
                {/* <Swiper
                    spaceBetween={20}
                    slidesPerView={slidesPerView}
                    loop={true}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                >
                    {data.map((portfolio,index)=>(
                        <SwiperSlide key={index}>
                            <PortfolioItem portfolio={portfolio}/>
                        </SwiperSlide>
                    ))}
                </Swiper> */}

                <div 
                  className='dark:bg-stone-800 bg-peach-300 text-center bg-peach-400 w-full py-4 px-10 rounded-1-lg justify-around flex-wrap gap-12 flex'
                  // data-aos="fade-down" data-aos-delay="400"
                >
                      <div className='w-96'>
                        <div className='flex mb-1'>
                          <p className='flex '>HTML</p>
                          <div className='text-2xl text-red-600 ml-2'>
                            <FaHtml5 />
                          </div>
                        </div>
                        <ProgressBar completed={90} bgColor='#f06529' animateOnRender={true}/>
                      </div>
                      <div className='w-96'>
                        <div className='flex mb-1'>
                          <p className='flex '>CSS</p>
                          <div className='text-2xl text-sky-600 ml-2'>
                            <IoLogoCss3 />
                          </div>
                        </div>
                        <ProgressBar completed={85} bgColor='#2965f1' animateOnRender={true}/>
                      </div>
                      <div className='w-96'>
                        <div className='flex mb-1'>
                          <p className='flex '>Sass</p>
                          <div className='text-2xl text-[#FF22E9] ml-2'>
                            <FaSass />
                          </div>
                        </div>
                        <ProgressBar completed={85} bgColor='#FF22E9' animateOnRender={true}/>
                      </div>
                      <div className='w-96'>
                        <div className='flex mb-1'>
                          <p className='flex '>Javascript</p>
                          <div className='text-2xl text-[#F0DB4F] ml-2'>
                          <IoLogoJavascript /> 
                          </div>
                        </div>
                        <ProgressBar completed={60} bgColor='#F0DB4F' animateOnRender={true}/>
                      </div>
                      <div className='w-96'>
                        <div className='flex mb-1'>
                          <p className='flex '>Tailwindcss</p>
                          <div className='text-2xl text-[#3490dc] ml-2'>
                            <SiTailwindcss />
                          </div>
                        </div>
                        <ProgressBar completed={70} bgColor='#3490dc' animateOnRender={true}/>
                      </div>
                      <div className='w-96'>
                        <div className='flex mb-1'>
                          <p className='flex '>React</p>
                          <div className='text-2xl text-[#00d8ff] ml-2'>
                          <FaReact />
                          </div>
                        </div>
                        <ProgressBar completed={55} bgColor='#00d8ff' animateOnRender={true}/>
                      </div>
                      <div className='w-96'>
                        <div className='flex mb-1'>
                          <p className='flex '>Next.js</p>
                          <div className='text-2xl dark:text-white ml-2'>
                          <TbBrandNextjs />
                          </div>
                        </div>
                        <ProgressBar completed={55} bgColor='black' animateOnRender={true}/>
                      </div>
                </div>   
            </div>
    </div>

    <div className='dark:bg-stone-950 bg-peach-500 max-width section-padding'>
            <div className='pb-3 border-b border-peach flex justify-between items-center'>
                <p>Office Skills</p>
            </div>

            <div className='pt-8'> 
                <div className='dark:bg-stone-800 bg-peach-300 text-center bg-peach-400 w-full py-4 px-10 rounded-1-lg justify-around flex-wrap gap-12 flex'>
                  <div className='w-96'>
                        <div className='flex mb-1'>
                          <p className='flex '>Word</p>
                          <div className='text-2xl text-red-600 ml-2'>
                            <Image src="/images/word.png" width={25} height={25} alt='word'/> 
                          </div>
                        </div>
                        <ProgressBar completed={95} bgColor='#1B5EBE' animateOnRender={true}/>
                  </div>
                  <div className='w-96'>
                        <div className='flex mb-1'>
                          <p className='flex '>Excel</p>
                          <div className='text-2xl text-red-600 ml-2'>
                            <Image src="/images/excel.png" width={25} height={25} alt='word'/> 
                          </div>
                        </div>
                        <ProgressBar completed={80} bgColor='#185C37' animateOnRender={true}/>
                  </div>

                  <div className='w-96'>
                        <div className='flex mb-1'>
                          <p className='flex '>Excel</p>
                          <div className='text-2xl text-red-600 ml-2'>
                            <Image src="/images/powerpoint.png" width={25} height={25} alt='word'/> 
                          </div>
                        </div>
                        <ProgressBar completed={95} bgColor='#C13B1B' animateOnRender={true}/>
                  </div>

                </div>
            </div>
    </div>


    </>
  )
}

export default page
