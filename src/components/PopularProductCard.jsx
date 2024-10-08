import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <img src={imgURL} alt={name} className='w-[280px] h-[280px] max-sm:ml-4'/>
      <div className="mt-8 flex justify-start gap-2">
        <img src={star} alt="rating" width={24} height={24} />
        <p className='font-montserrat text-xl leading-normal text-slate-gray'>4.6</p>
      </div>
      <h3 className='mt-2 text-xl leading-normal font-semibold font-palanquin'>{name}</h3>
      <p className='font-semibold font-montserrat mt-2 text-coral-red'>{price}</p>
      
    </div>
  )
}

export default PopularProductCard
