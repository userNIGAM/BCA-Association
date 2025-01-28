
import About from '@/components/home/About'
import ContactSection from '@/components/ContactSection'
import EventSection from '@/components/home/EventSection'
import Hero from '@/components/home/Hero'
import NewsSection from '@/components/home/NewsSection'
import React from 'react'

const page = () => {
  return (
    <div>
       <Hero/> 
      <About/>

      <EventSection/>
      <NewsSection/>
      
      <ContactSection/>
    </div>
  )
}

export default page
