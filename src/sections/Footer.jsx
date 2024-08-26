import React from 'react'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constants'
import { copyrightSign } from '../assets/icons'

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
          <img src={footerLogo} alt="footerlogo" width={150} height={46}/>
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>Get shoes ready fot the new term at your nrarest Shoe Store. Find your perfect size in store, get rewards..</p>
          <div className="flex items-center gap-5 mt-8">
            {
              socialMedia.map((icon) => (
                <div className='flex justify-center items-center w-12 h-12 bg-white rounded-full' key={icon.src}>
                    <img src={icon.src} alt={icon.alt} width={24} height={24} />
                </div>
              ))
            }
          </div>
        </div>
        <div className="flex flex-1 justify-between gap-20 flex-wrap lg:gap-10">
          {
            footerLinks.map((link) => (
              <div key={link.title}>
                  <h4 className='text-white font-montserrat text-2xl leading-normal font-medium mb-6'>{link.title}</h4>
                  <ul>
                    {
                      link.links.map((itemlink) => (
                        <li key={itemlink.link} className='mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-yellow-400'> <a href="">{itemlink.name }</a></li>
                      ))
                    }
                  </ul>
              </div>
            ))
          }

        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
          <div className="flex flex-1 gap-2 font-montserrat cursor-pointer">
            <img src={copyrightSign} alt="copyright" width={15} height={15} className='rounded-full m-0'/>
            <p>Copyright. All rights reserved.</p>
          </div>
          <p className='font-montserrat cursor-pointer'>Terms & conditions.</p>
      </div>
    </footer>
  )
}

export default Footer
