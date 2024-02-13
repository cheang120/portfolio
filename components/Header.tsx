"use client"
import { navLinks, socialLinks } from '@/constants'
import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Menu, Phone, X } from 'lucide-react'
import MobileMenu from './MobileMenu'
import Themebutton from './Themebutton'
import { usePathname } from 'next/navigation'
import { Provider } from './Provider';

const Header = ({href,label,className}:{href:string,label:string,className?:string}) => {

  const [isOpen, setIsOpen] = useState(true)

  const toggleMenu = () => {
      setIsOpen(!isOpen)
  }

  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname()

  return (
    <header className="justify-between w-full flex bg-peach-500 md:py-3 py-1 dark:bg-stone-950 start-0 backdrop-blur backdrop-opacity-80 dark:text-white fixed z-20"  >
      {/* <Link href={"/"}>
        <h5 className='text-purple text-xl font-semibold'>Carrey<span className='text-yellow'>Cheang</span> </h5>
      </Link> */}
      {/* <nav className='flex items-center gap-12 max-tablet:hidden'>
        <ul className='flex items-center gap-8'>
          {navLinks.map((link,index) => (
            <li key={index}>
              <NavLink href={link.url} label={link.label} />
            </li>
          ))}
        </ul>

        <Link href={"/contact"} className='btn btn-primary'>
          <Phone size={24}/>
          Contact me
        </Link>
      </nav>
      <MobileMenu /> */}
        <div className="w-full flex items-center md:py-2 py-6 justify-end md:justify-between px-10">
              <Link 
                href="/"
                className='hidden md:block'
              >
                <h5 className='text-purple text-xl font-semibold'>Carrey<span className='text-yellow'>Cheang</span> </h5>
              </Link>
              
              <div className="flex  md:flex-row flex-col-reverse w-full justify-end">
                <div
                  className={`  md:block  md:pb-0 md:mt-0 
                  ${navbar ? '  block ' : 'hidden'}
                  `}
                >
                  <ul 
                    className="h-screen flex items-center  gap-12  md:h-auto items-center justify-center flex mr-6 max-md:flex-col  "
                  >      
                    <Link 
                        href="/" 
                        onClick={() => setNavbar(!navbar)}
                        className={`dark:text-white dark:hover:text-peach max-md:text-3xl
                        py-3 text-grey-700 hover:text-purple transition-colors relative block after:block after:absolute
                                    after:left-0 after:h-0.5 after:bg-purple after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition
                                    after:duration-300 after:origin-right after:hover:origin-left 
                                    ${className}
                                    ${
                                        pathname === "/"
                                            ? "after:scale-x-100 after:origin-right"
                                            : "after:scale-x-0 after:origin-left"
                                    }
                            `}
                       
                    >
                        Home
                    </Link>
                    <Link 
                        href="/about" 
                        onClick={() => setNavbar(!navbar)}
                        className={`dark:text-white dark:hover:text-peach max-md:text-3xl
                        py-3 text-grey-700 hover:text-purple transition-colors relative block after:block after:absolute
                                    after:left-0 after:h-0.5 after:bg-purple after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition
                                    after:duration-300 after:origin-right after:hover:origin-left 
                                    ${className}
                                    ${
                                        pathname === "/about"
                                            ? "after:scale-x-100 after:origin-right"
                                            : "after:scale-x-0 after:origin-left"
                                    }
                            `}
                       
                    >
                        About
                    </Link>

                    <Link 
                        href="/portfolio" 
                        onClick={() => setNavbar(!navbar)}
                        className={`dark:text-white dark:hover:text-peach max-md:text-3xl
                        py-3 text-grey-700 hover:text-purple transition-colors relative block after:block after:absolute
                                    after:left-0 after:h-0.5 after:bg-purple after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition
                                    after:duration-300 after:origin-right after:hover:origin-left 
                                    ${className}
                                    ${
                                        pathname === "/portfolio"
                                            ? "after:scale-x-100 after:origin-right"
                                            : "after:scale-x-0 after:origin-left"
                                    }
                            `}
                       
                    >
                        Portfolio & Skills
                    </Link>

                    <Link 
                        href="/contact" 
                        onClick={() => setNavbar(!navbar)}
                        className={`dark:text-white dark:hover:text-peach max-md:text-3xl
                        py-3 text-grey-700 hover:text-purple transition-colors relative block after:block after:absolute
                                    after:left-0 after:h-0.5 after:bg-purple after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition
                                    after:duration-300 after:origin-right after:hover:origin-left 
                                    ${className}
                                    ${
                                        pathname === "/contact"
                                            ? "after:scale-x-100 after:origin-right"
                                            : "after:scale-x-0 after:origin-left"
                                    }
                            `}
                       
                    >
                        Contact
                    </Link>
                  </ul>

                  
                </div>



                <div className='flex justify-between'>
                  <div className='items-center flex'>
                    <Link 
                      href="/"
                      className='block md:hidden'
                    >
                      <h5 className='text-purple text-xl font-semibold'>Carrey<span className='text-yellow'>Cheang</span> </h5>
                    </Link>
                  </div>
                  <div>
                    <button
                        className=" md:hidden  p-2 text-gray-700 rounded-md outline-none  "
                        onClick={() => setNavbar(!navbar)}
                      >
                        {navbar ? (

                          <div className='cursor-pointer '>
                            <div className=' h-0.5 w-7 dark:bg-white bg-black my-2 opacity-80 origin-center rotate-45 duration-150 translate-y-3 transition-all ease-in-out '></div>
                            <div className='odd:opacity-0 h-0.5 w-7 dark:bg-white bg-black my-2 opacity-0 '></div>
                            <div className='h-0.5 w-7 dark:bg-white bg-black my-2 opacity-80 origin-center -rotate-45 duration-150  -translate-y-2 transition-all ease-in-out '></div>
                          </div>
                        ) : (
                          <div className=' cursor-pointer '>
                          <div className=' h-0.5 w-7 dark:bg-white bg-black my-2 opacity-80 transition-all ease-in-out duration-150 '></div>
                          <div className=' h-0.5 w-7 dark:bg-white bg-black my-2 opacity-80 transition-all ease-in-out duration-150 '></div>
                          <div className='h-0.5 w-7 dark:bg-white bg-black my-2 opacity-80 transition-all ease-in-out duration-150 '></div>
                        </div>
                          
                        )}
                    </button>

                    <Themebutton />
                  </div>
                </div>
              </div>
        </div>
    </header>
  )
}

export default Header
