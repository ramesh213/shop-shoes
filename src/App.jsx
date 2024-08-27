import React, { useState } from 'react'
import  { Hero, PopularProducts, SuperQuality, Services, SpecialOffers, CustomerReviews, Subscribe, Footer } from './sections'
import Nav from './components/Nav'
import Register from './components/Register';



function App() {

  const [popUp, setPopUp] = useState(false);

  const handlePopUp = () => {
    setPopUp(true);
  };

  return (
    <main className='relative'>
      <Nav handlePopUp = {handlePopUp}/>
      <section >
        <Register  popUp = {popUp} setPopUp = {setPopUp}/>

      </section>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero/>
      </section>
      <section className='padding'>
        <PopularProducts/>
      </section>
      <section className='padding'> 
        <SuperQuality/>
      </section>
      <section className='padding-x py-10'>
        <Services/>
      </section>
      <section className='padding'>
        <SpecialOffers/>
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews/>
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe/>
      </section>
      <section className='bg-slate-700 padding-x padding-t pb-8'>
        <Footer/>
      </section>
    </main>
  )
}

export default App
