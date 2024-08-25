import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons';

const SpecialOffers = () => {
  return (
    <section className="flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className='flex-1'>
        <img src={offer} width={773} height={687} className='object-contain w-full' alt="Special Offer" /> {/* Added alt attribute for accessibility */}
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-2'>Special</span> 
          <span className='text-coral-red inline-block mt-3'>Offers</span>
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
        </p>
        <p className='info-text mt-6 lg:max-w-lg'>
          Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftewst expectations. Your journey with us is nothing short of exceptional.
        </p>
        <div className="m-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconUrl={arrowRight} />
          <Button label="Learn More.." backgroundColor="bg-white"
          borderColor="border-blue-500"/>
        </div>
      </div>
    </section>
  );
}

export default SpecialOffers;


