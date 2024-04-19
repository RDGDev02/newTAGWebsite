"use client"
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef , useState } from "react";
import { imgAnimation, slideInView } from "./utils/motionEffects";
import { CircularText } from "../../../public/assets";
import Image from 'next/image';


const Story = () => {
  const storyImgHover = {
    scale: 1.8,
    zIndex: 3,
    transition:{
      delay: 0.04
    }
  };

    return (
      <motion.section
      
      id="story" className={`flex md:flex-row flex-col Mobile:pt-6 scroll-mt-28`}
      >
         
        <div
        className='flex-1 flex justify-center items-left flex-col Mobile:px-6 px-[3rem] pt-4'
        >
          <motion.div 
          initial="offscreen"
          whileInView="onscreen"
          variants={slideInView(0.3)}
          className=" flex flex-row justify-between items-center">
            <h1 className="flex-1 text-[52px] text-white Mobile:text-[40px] font-semibold">
              <span className="text-gradient font-semibold">STORY</span>{" "}
            </h1>
            
          </motion.div>
          <motion.p 
           initial="offscreen"
           whileInView="onscreen"
           variants={slideInView(0.6)}
          className={`font-normal text-gray-300 `}
         >
          In a city where the golden sun sets, mysterious fox-like creatures known as the Tails of the Afterglow emerge at night, their elusive nature and unique traits captivating the inhabitants.<br /> Though their appearance remains a mystery to most, those chosen to witness them describe human-like features. <br />The creatures' purpose and selection criteria remain unknown, but over time, people have embraced their existence, and the Tails of the Afterglow have become a curious part of city life.<br /> The question lingers: do these mystical foxes truly belong to the Human World?
                    </motion.p>
        </div>
        <motion.div
        className='flex-1 flex  justify-center items-center md:my-0 my-10 relative Mobile:order-last Mobile:px-1 Med:px-3 Res:px-3 Med:order-last'>
          <div className="container mx-auto px-5 mt-10 ">
            <div className="-m-1 flex flex-wrap md:-m-2 ">
              <div className="flex w-1/2 flex-wrap ">
                <motion.div 
                variants={imgAnimation(0.05)}
                initial="initial"
                whileInView="animate"
                whileHover={storyImgHover}
                className="w-1/2 p-1 md:p-2 ">
                  <Image 
                            width={500}
                            height={500}
                            loading='lazy'
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center "
                    src="/assets/story1.png" />
                </motion.div>
                <motion.div 
                 variants={imgAnimation(0.1)}
                initial="initial"
                whileInView="animate"
                whileHover={storyImgHover}
                className="w-1/2 p-1 md:p-2">
                  <Image 
                            width={500}
                            height={500}
                            loading='lazy'
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="/assets/story4.png" />
                </motion.div>
                <motion.div 
                 variants={imgAnimation(0.15)}
                initial="initial"
                whileInView="animate"
                whileHover={storyImgHover}
                className="w-full p-1 md:p-2">
                  <Image 
                            width={500}
                            height={500}
                            loading='lazy'
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="/assets/story.jpg" />
                </motion.div >
              </div>
              <div 
              className="flex w-1/2 flex-wrap">
                <motion.div 
                 variants={imgAnimation(0.2)}
                initial="initial"
                whileInView="animate"
                whileHover={storyImgHover}
                className="w-full p-1 md:p-2">
                  <Image 
                            width={500}
                            height={500}
                            loading='lazy'
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="/assets/story2.png" />
                </motion.div>
                <motion.div 
                 variants={imgAnimation(0.25)}
                initial="initial"
                whileInView="animate"
                whileHover={storyImgHover} 
                className="w-1/2 p-1 md:p-2">
                  <Image 
                            width={500}
                            height={500}
                            loading='lazy'
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="/assets/story3.png" />
                </motion.div>
                <motion.div 
                 variants={imgAnimation(0.3)}
                initial="initial"
                whileInView="animate"
                whileHover={storyImgHover}
                className="w-1/2 p-1 md:p-2">
                  <Image 
                            width={500}
                            height={500}
                            loading='lazy'
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="/assets/story5.png" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
  
       
      </motion.section>
    );
  };
  
  export default Story;