import React from 'react'
import Button from '../components/Button'


const Subscribe = () => {
  return (
    <section id='contact-us' className="max-container flex  items-center justify-between gap-10 max-lg:flex-col">
      <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold'>Sign Up for latest <span className='text-coral-red'>updates</span> & Newsletter</h3>
      <div className='lg:max-w-[50%] max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded'>
        <input type="text" placeholder='subscribe@myshoe.com' className='input'/>
        <div className='flex justify-end items-center max-sm:w-full'> 
        <Button label="Sigh Up" fullWidth/>
      </div>
      </div>
      
    </section>
  )
}

export default Subscribe
