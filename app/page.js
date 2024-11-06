
import About from '@/components/About'
import ContactSection from '@/components/ContactSection'
import EventSection from '@/components/EventSection'
import Hero from '@/components/Hero'
import NewsSection from '@/components/NewsSection'
import React from 'react'

const page = () => {
  return (
    <div>
       <Hero/> 
      <About/>
      <NewsSection/>
      <EventSection/>
      <ContactSection/>
    </div>
  )
}

export default page
