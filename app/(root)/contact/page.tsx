import { Metadata } from 'next'
import React from 'react'
import Image from 'next/image'
import { socialLinks } from '@/constants'
import FaqsSection from '@/components/FaqsSection'


export const metadata: Metadata = {
    title: "Contact - Carrey Cheang"
}

const page = () => {
  return (
    <>
        <section className='max-width pt-20'>
            <div className='dark:bg-stone-800 box text-center flex flex-col items-center gap-3'>
                <div className='w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink-0 mb-5'>
                    <Image src={"/icons/stars.svg"} alt="icon" width={35} height={35}/>
                </div>
                <h2 className='dark:text-peach-700 text-grey-700'>I'd love to hear from you</h2>
                <p className='dark:text-peach-600 text-grey-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic harum dic</p>
            </div>
        </section>

        <section className='max-width section-padding flex max-tablet:flex-col gap-16'>
            <div className='tablet:max-w-md w-full'>
                <div className="space-y-4">
                    <div className='dark:bg-stone-800 box !p-6'>
                        <p className='dark:text-peach-600 text-grey-600'>You can Email Me here</p>
                        <h6 className='dark:text-peach-700 text-grey-700'>carrey.120.cc@gmail.com</h6>
                    </div>
                    <div className='dark:bg-stone-800 box !p-6'>
                        <p className='dark:text-peach-600 text-grey-600'>Give me a Call on</p>
                        <h6 className='dark:text-peach-700 text-grey-700'>+853 663695090</h6>
                    </div>
                    <div className='dark:bg-stone-800 box !p-6'>
                        <p className='dark:text-peach-600 text-grey-600'>Location</p>
                        <h6 className='dark:text-peach-700 text-grey-700'>Lorem ipsum dolor sit amet consectetur.</h6>
                    </div>
                    <h6 className='mt-10 text-grey-700 max-tablet:text-center'>My Social Profiles</h6>
                    <div className='dark:bg-stone-800 flex mb-3 gap-3 box !p-6 w-max max-tablet:mx-auto'>
                        {socialLinks.map((link,index) => (
                            <a 
                                href={link.url}
                                key={index}
                                className='w-10 h-10 bg-purple text-peach flex items-center justify-center rounded'
                            >
                                <link.icon strokeWidth={0} fill='currentColor' />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className='dark:bg-stone-800 box w-full'>
                <form action="" className='space-y-5'>
                    <div className='flex gap-5 max-tablet:flex-col'>
                        <input type="text" placeholder='First Name' className='dark:bg-stone-800 dark:text-peach-700'/>
                        <input type="text" placeholder='last Name' className='dark:bg-stone-800 dark:text-peach-700' />
                    </div>
                    <div className='flex gap-5 max-tablet:flex-col'>
                        <input type="text" placeholder='Email' className='dark:bg-stone-800 dark:text-peach-700'/>
                        <input type="text" placeholder='Phone' className='dark:bg-stone-800 dark:text-peach-700'/>
                    </div>
                    <textarea placeholder='Message' className='min-h-[200px] dark:bg-stone-800 dark:text-peach-700'>

                    </textarea>
                    <button type='submit' className='btn btn-primary'>Send</button>
                </form>
            </div>
        </section>

        <FaqsSection />
    </>
  )
}

export default page
