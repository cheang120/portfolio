"use client"
import React, { useEffect, useRef, useState } from 'react'
import SectionHeading from './SectionHeading'
import { reviews } from '@/constants'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import {Swiper, SwiperSlide} from "swiper/react"
import { Swiper as SwiperType} from "swiper"
import 'swiper/swiper-bundle.css';
import { useWindowSize } from '@/hooks/useWindowsSize'

const TestimonialSection = () => {
    const swiperRef = useRef<SwiperType>()
    const [slidesPerView, serSlidePerview] = useState(3)
    const {width} = useWindowSize()
    useEffect(() => {
        if (width <768) {
            serSlidePerview(1)
        } else if (width < 1268) {
            serSlidePerview(2)
        } else {
            serSlidePerview(3)
        }
    },[width])

  return (
    <section className='dark:bg-stone-950 bg-peach-500 max-width section-padding'>
      <SectionHeading
        title='What my clients say about me' 
        subtitle={'Lorem ,ipsum kdls jakeu ndkdj meigup jfmdk .jfkdwo ,sjeig fhdksl woqpw'}      
      />
        <div>
            <div className='pb-3 border-b border-peach flex justify-between items-center'>
                <p>
                    {reviews.length} total reviews
                </p>
                <div className='flex gap-2'>
                    <button 
                        className='bg-peach-200 border border-peach p-1 rounded text-grey-700'
                        onClick={()=>swiperRef.current?.slidePrev()}
                    >
                        <ChevronLeft />
                    </button>
                    <button 
                        className='bg-peach-200 border border-peach p-1 rounded text-grey-700'
                        onClick={()=>swiperRef.current?.slideNext()}
                    >
                        <ChevronRight />
                    </button>
                </div>
            </div>
            <div className='pt-8'>
                <Swiper 
                    spaceBetween={20} 
                    slidesPerView={slidesPerView} 
                    loop={true}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                >
                    {reviews.map((review,index) =>(
                        <SwiperSlide key={index}>
                            <SingleReview review={review}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default TestimonialSection

const SingleReview = ({review}:{review:(typeof reviews)[0] }) => {

    return (
        <div className='dark:bg-stone-800 bg-peach-300 box flex flex-col gap-5'>
            <div className='flex items-center justify-between'>
                <div>
                    <h6 className='dark:text-peach-700 text-grey-700'>{review.name}</h6>
                    <p className='dark:text-peach-700 text-grey-500 text-sm'>{review.designation}</p>
                </div>
                <div className='flex gap-3'>
                    {review.socialLinks.map((link,index) => (
                        <a 
                            key={index}
                            href={link.url}
                            className='text-purple hover:scale-105 transition-transform duration-300'
                        >
                            <link.icon strokeWidth={0} fill="currentColor"/>
                        </a>
                    ))}

                </div>
            </div>

            <div>
                <div className='flex gap-1'>
                    {Array.from({length:5}).map((_,index) => (
                        <Star 
                            key={index} 
                            size={20} 
                            fill="currentColor" 
                            className={`text-purple ${
                                index < review.stars ? "opacity-100" : "opacity-30"
                            }`}
                        />
                    ))}
                </div>
            </div>
            <p className='dark:text-peach-700 text-grey-600'>{review.review}</p>
        </div>

    )
}