"use client"
import { Plus } from 'lucide-react';
import React, { useState } from 'react'

interface AccordionData {
    question:string;
    answer:string;
}

const Accordion = ({data} : {data: AccordionData[]}) => {
    const [currentActive, setCurrentActive] = useState <number | null>(0)

  return (
    <div className='dark:bg-stone-800 bg-peach-300 flex flex-col gap-3'>
      {data.map((item,index) => (
        <div key={index} className='dark:bg-stone-900  bg-peach-600 px-5 rounded-lg'>
            <div 
                className='dark:bg-stone-900 bg-peach-600 flex items-center justify-between cursor-pointer py-5'
                onClick={() => setCurrentActive(index)}
            >
                <h6 className='dark:text-peach-700 text-grey-700'>{item.question}</h6>
                <div className={`transition-transform duration-300 ${
                    currentActive === index ? "rotate-45" : ""
                }`}>
                    <Plus size={16}/>
                </div>
            </div>
            <div className={`dark:bg-stone-900 dark:text-peach-700 bg-peach-600 text-grey-600 transition-all duration-300 ${
                currentActive !== index ? "max-h-0 opacity-0" : "max-h-[1000px] opacity-100 pb-5"
            }`}>
                <p>{item.answer}</p>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Accordion
