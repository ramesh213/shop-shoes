import React from 'react'
import { products } from '../constants'
import PopularProductCard from '../components/PopularProductCard'



const PopularProducts = () => {
  return (
   <section id="products" className="max-container max-sm:mt-12">
    <div className="flex flex-col justify-start gap-5">
      <h2 className='text-4xl font-palanquin font-bold'>Popular <span className='text-coral-red'>Products</span></h2>
      <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>Explore our Popular Products section to discover the latest and best-selling shoes, featuring stylish designs and top-notch comfort to elevate your footwear experience.</p>
    </div>
    <div className="mt-16 grid lg:grid-cols-4 mx:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
      {
        products.map((product) => (
          <PopularProductCard key={product.name} {...product}/>
        ))
      }
    </div>
   </section>
  )
}

export default PopularProducts
