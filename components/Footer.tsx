import { contactDetails, navLinks, socialLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'

const Footer = () => {
  return (
    <footer className='dark:bg-stone-950 bg-peach-500 py-10 border-slate-400 border-t dark:border-slate-600 border-stone-800 max-width'>
      <div className='flex flex-col items-center justify-between'>
        <Link href={"/"} className='text-purple text-xl font-semibold'>
          <h5 className='text-purple text-xl font-semibold'>Carrey<span className='text-yellow'>Cheang</span> </h5>
        </Link>

              <div className='w-full my-4 w-max border border-peach p-5 mx-auto flex gap-5 tablet:gap-10 flex-col tablet:flex-row items-center rounded-lg'>
                  {contactDetails.map((detail, index) => (
                    <div key={index} className='flex gap-3 items-center text-purple'>
                      <detail.icon size={20} />
                      <p className='dark:text-peach-700 text-grey-600'>{detail.text}</p>
                    </div>
                  ))}
              </div>

        <div className='flex gap-3'>
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
      


      <p className='dark:text-peach-700 mt-8 text-grey-600 text-center text-sm'>
          Copyright © {new Date().getFullYear()} BabyCode All right reseved
      </p>

    </footer>
  )
}

export default Footer
