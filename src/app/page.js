import React from 'react'

import Nav from './components/NavHome'
import Hero from './components/Hero'
import Story from './components/Story'
import TagHolder from './components/TagHolder'
import Merchandise from './components/Merchandise'
import Partners from './components/Partners'
import Faq from './components/Faq'
import Team from './components/Team'
import Footer from './components/Footer'

const Home = () => {
  return (
    <>
    <div className={`sm:px-16 px-6 flex justify-center items-center w-full fixed z-10 shadow-md backdrop-filter backdrop-blur-lg bg-transparent `}>
        <div className={`xl:max-w-[1600px] w-full`}>
           <Nav />
         </div>
      </div>
    <div className={`bg-transparent flex justify-center md:items-start md:text-left ss:items-center ss:text-center xs:text-center xs:items-center pt-16 `}>
      <div className={` xl:max-w-[1600px] w-full`}>
       <Hero />
      </div>
  </div>
  <div className={`bg-transparent flex justify-center md:items-start md:text-left ss:items-center ss:text-center xs:text-center xs:items-center pt-8 Mobile:pt-0`}>
      <div className={` xl:max-w-[1600px] w-full`}>
       <Story />
      </div>
  </div>
  <div className={`bg-transparent flex justify-center md:items-start md:text-left ss:items-center ss:text-center xs:text-center xs:items-center pt-[6rem] Mobile:pt-0`}>
      <div className={` xl:max-w-[1600px] w-full`}>
       <TagHolder / >
      </div>
  </div>
  <div className={`bg-transparent flex justify-center md:items-start md:text-left ss:items-center ss:text-center xs:text-center xs:items-center pt-[6rem] Mobile:pt-0`}>
      <div className={` xl:max-w-[1600px] w-full`}>
       <Merchandise / >
      </div>
  </div>
  
  <div className={`bg-transparent flex justify-center md:items-start md:text-left ss:items-center ss:text-center xs:text-center xs:items-center pt-[6rem] Mobile:pt-0`}>
      <div className={` xl:max-w-[1600px] w-full`}>
       <Faq / >
      </div>
  </div>
  <div className={`bg-transparent flex justify-center md:items-start md:text-left ss:items-center ss:text-center xs:text-center xs:items-center pt-[6rem] Mobile:pt-0`}>
      <div className={` xl:max-w-[1600px] w-full`}>
       <Team / >
      </div>
  </div>
  <Footer />
  </>
  )
}

export default Home