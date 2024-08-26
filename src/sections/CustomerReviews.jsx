import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard'
 
const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        What Our <span className='text-coral-red'>Customers</span> Say?
      </h3>
      <p className='text-center m-auto mt-4 max-w-lg font-montserrat text-lg text-gray-500'>Hear genuine stories form our satisfied customers about their expceptional experiences with us.</p>
      <div className="flex clex-1 justify-evenly items-center max-lg:col gap-14">
        {
          reviews.map((review) => (
            <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}/>
          ))
        }
      </div>
    </section>
  )
}

export default CustomerReviews
