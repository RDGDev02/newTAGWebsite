"use client"
import { slideInView, imgAnimation } from './utils/motionEffects'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image';

const Merchandise = () => {
  return (
    <motion.section id="merchandise" className='scroll-mt-28'>
      <div
        className='flex-1 flex justify-center items-left flex-col Mobile:px-6 px-[3rem] pt-4 pb-[4rem]'
      >
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={slideInView(0.3)}
          className=" flex flex-row justify-between items-center">
          <h1 className="flex-1 text-[52px] text-white Mobile:text-[40px] font-semibold">
            <span className="text-gradient font-semibold">TAG MERCHANDISE</span>{" "}
          </h1>

        </motion.div>
        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          variants={slideInView(0.6)}
          className={`font-opensan font-normal text-gray-300 `}
        >
          Foxes reappear in the dark to continue bring glow to a GREATER LIFE - A collection to discover your personal glow within the darkest moments.
        </motion.p>
      </div>
      <div className="grid Mobile:grid-cols-1 Mobile:px-[1.5rem] Med:grid-cols-2  grid-cols-3 gap-4 justify-center px-[3rem] ">

        <motion.div
          variants={imgAnimation(0.4)}
          initial="initial"
          whileInView="animate"
          className="p-4  rounded-[20px] relative ">
          <div className="mx-auto relative">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex flex-1 flex-col gap-2">
                <div className="flex flex-1 flex-col">

                  <Image
                    width={500}
                    height={500}
                    loading='lazy'
                    alt='Merch'
                    className="object-cover h-full rounded-xl" src="/assets/tagMerch.jpg" />

                  <div className="absolute bottom-[5rem] right-0 p-4">
                    <Link href="https://shopee.ph/TAG-Limited-Edition-Shirt-(White)-i.970931907.22573324032?sp_atk=b2ed445d-8d58-4a6e-9965-8e961a587b67&xptdk=b2ed445d-8d58-4a6e-9965-8e961a587b67"
                      target="_blank">
                      {/* <img src="/assets/buy-now-white.png" alt="Buy Now" className="h-20 w-20" /> */}
                    </Link>
                  </div>
                  <p className='text-gray-300 text-center pt-2'>TAG Limited Edition Shirt (White)</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={imgAnimation(0.6)}
          initial="initial"
          whileInView="animate"
          className="p-4  rounded-[20px]  relative">
          <div className="mx-auto relative">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex flex-1 flex-col gap-2">
                <div className="flex flex-1 flex-col">
                  <Image
                    width={500}
                    height={500}
                    alt='Merch'
                    loading='lazy' className="object-cover h-full rounded-xl" src="/assets/tagMerchBlack.jpg" />

                  <div className="absolute bottom-[5rem] right-0 p-4">
                    <Link href="https://shopee.ph/TAG-Limited-Edition-Shirt-(Black)-i.970931907.21681707488?sp_atk=822493e3-ee09-42d6-a3a4-7bf08586a408&xptdk=822493e3-ee09-42d6-a3a4-7bf08586a408"
                      target="_blank">
                      {/* <img src="/assets/buy-now-black.png" alt="Buy Now" className="h-20 w-20" /> */}
                    </Link>
                  </div>
                  <p className='text-gray-300 text-center pt-2'>TAG Limited Edition Shirt (Black)</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={imgAnimation(0.8)}
          initial="initial"
          whileInView="animate"
          className="p-4  rounded-[20px] relative">

          <div className="mx-auto relative">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex flex-1 flex-col gap-2">
                <div className="flex flex-1 flex-col">

                  <Image
                    width={500}
                    height={500}
                    alt='Merch'
                    loading='lazy' className="object-cover h-full rounded-xl" src="/assets/tagSticker.jpg" />

                  <div className="absolute bottom-[5rem] right-0 p-4">

                   {/* <img src="/assets/soldOut.png" alt="Buy Now" className="h-20 w-20" /> */}
                  </div>
                  <p className='text-gray-300 text-center pt-2'>TAG Limited Edition Sticker Pack</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Merchandise