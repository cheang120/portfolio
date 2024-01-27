"use client"
import { portfolios } from '@/constants'
import { useWindowSize } from '@/hooks/useWindowsSize';
import React, { useEffect, useRef, useState } from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import { Swiper as SwiperType} from "swiper"
import 'swiper/swiper-bundle.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const PortfolioSection = ({data,title,}:{data:typeof portfolios;title:string;}) => {
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
    <div className='max-width section-padding'>
            <div className='pb-3 border-b border-peach flex justify-between items-center'>
                <p>{title}</p>
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
    </div>
  )
}

export default PortfolioSection
