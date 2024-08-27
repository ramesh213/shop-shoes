import React from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants' 

const Nav = () => {
  return (
   <header className='padding-x py-4 z-20 w-full top-0 sticky bg-indigo-300'>
    <nav className='flex justify-between items-center max-container'>
        <a href="/"> <img src={headerLogo} alt="logo" width={130} height={29} /></a>
        <ul className="flex-1 flex items-center justify-center gap-16 max-lg:hidden">
            {
                navLinks.map((link) => (
                    <li key={link.label}>
                        <a href={link.href} className='font-montserrat leading-normal text-lg text-red-500 hover:text-white active'>{link.label}</a>
                    </li>
                ))
            }
        </ul>
        <div className='hidden max-lg:block'>
            <img src={hamburger} alt="hamburgur" width={25} height={25} />
        </div>
    </nav>
   </header>
  )
} 

export default Nav
