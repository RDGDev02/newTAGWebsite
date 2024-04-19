"use client"

import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
const animation = { duration: 15000, easing: (t) => t }

const Partners = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        renderMode: "performance",
        drag: false,
        breakpoints: {
            '(max-width: 500px)': {
                slides: {
                    perView: 2,
                    spacing: 5,
                },
            },
            '(max-width: 1050px)': {
                slides: {
                    perView: 3,
                    spacing: 5,
                },
            },
          },
        slides: {
            perView: 5,
            spacing: 10,
        },
        
        created(s) {
          s.moveToIdx(5, true, animation)
        },
        updated(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
      })
  return (
    <section className={`flex justify-center items-center my-4`}>
         <div ref={sliderRef} className="keen-slider">
    <div className={`flex justify-center items-center flex-wrap keen-slider__slide number-slide1`}>
        <div  className={`flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[120px] m-5`}>
          <img src="/assets/airbnb.png" alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
        </div>
    </div>
    <div className={`flex justify-center items-center flex-wrap keen-slider__slide number-slide2`}>
        <div  className={`flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[120px] m-5`}>
          <img src="/assets/airbnb.png" alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
        </div>
    </div>
    <div className={`flex justify-center items-center flex-wrap keen-slider__slide number-slide3`}>
        <div  className={`flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[120px] m-5`}>
          <img src="/assets/airbnb.png" alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
        </div>
    </div>
    <div className={`flex justify-center items-center flex-wrap keen-slider__slide number-slide4`}>
        <div  className={`flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[120px] m-5`}>
          <img src="/assets/airbnb.png" alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
        </div>
    </div>
    <div className={`flex justify-center items-center flex-wrap keen-slider__slide number-slide5`}>
        <div  className={`flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[120px] m-5`}>
          <img src="/assets/airbnb.png" alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
        </div>
    </div>
    <div className={`flex justify-center items-center flex-wrap keen-slider__slide number-slide6`}>
        <div  className={`flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[120px] m-5`}>
          <img src="/assets/airbnb.png" alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
        </div>
    </div>
    </div>
  </section>
  )
}

export default Partners