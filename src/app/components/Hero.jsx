"use client"
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { slideInFromLeft , slideInFromTop, slideInFromRight } from "./utils/motionEffects";
import { CircularText } from "../../../public/assets";
import Image from 'next/image';


const Hero = () => {
    return (
      <motion.section
      initial="hidden"
      animate="visible"
      id="home" className={`flex md:flex-row flex-col Mobile:pt-6`}
      >
         <motion.div  
        variants={slideInFromTop(1.8)}
        className='flex-1 flex  justify-center items-centermd:my-0 my-10 relative Mobile:order-last Med:order-last'>
          <Image src='/assets/robot.png' width={6200}
                height={1000}
                priority={true}
                alt="Fox Head" className="relative object-scale-down" />
        </motion.div>
        <div
        className='flex-1 flex justify-center items-left flex-col Mobile:px-6 px-[3rem] pt-4'
        >
          <motion.div 
          variants={slideInFromLeft(0.5)}
          className=" flex flex-row justify-between items-center">
            <h1 className="flex-1 text-[52px] text-white Mobile:text-[40px] font-semibold">
              Tails of the <br className="sm:block hidden" />{" "}
              <span className="text-gradient font-semibold">AFTERGLOW</span>{" "}
            </h1>
            
          </motion.div>
          <motion.p 
          variants={slideInFromLeft(1)}
          className={`font-opensan font-normal text-gray-300`}>
          Tails of the Afterglow is a unique collection of 4,266 dope foxes roaming around the grounds of Polygon Blockchain.<br />
  
  Your TAG NFTs will grant you premium member-only benefits, including access to VIP facilities, exclusive discord channels, and early scholarship programs. Owning one of these unique artworks will also give you the chance to have limited edition merchandises and Real Deal Guild badges that are highly reputable in the NFT world.<br />
  
  With their prestige and aesthetic, these TAGs are here to rule the metaverse.
          </motion.p>
          <motion.div 
          variants={slideInFromLeft(1.3)}
          className="flex flex-row justify-between items-start pt-3">
          <motion.button 
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.9 }}
          className="group relative h-12 w-40 overflow-hidden rounded-lg button-gradient text-md shadow">
            <a href="#story"><span className="relative text-white group-hover:text-white text-[14px]">GET STARTED</span></a>
          </motion.button>
            
          </motion.div>
        </div>
  
       
      </motion.section>
    );
  };
  
  export default Hero;