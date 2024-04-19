"use client"

import React from 'react'
import { CircularText , OpenseaLogo } from '../../../public/assets'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Buy = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 2 }}
    whileHover={{
        scale: 1.2,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.9 }}
    className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden '
    
    >
        <div className='w-40 h-auto flex items-center justify-center relative z-1 Mobile:w-24 Med:w-[8rem] HiRes:w-[8rem]'>
            <CircularText  className={"fill-dark animate-spin-slow"}/>
            <Link href="https://magiceden.io/collections/polygon/0xe7b94a3208111a595a27634ca68d2210e674a7e6" target='_blank' className='flex items-center justify-center 
            absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black
            bg-white shadow-md border border-solid border-white w-[4rem] h-[4rem] rounded-full Mobile:w-10 Mobile:h-10 Med:w-[4rem] Med:h-[4rem] HiRes:w-[4rem] HiRes:h-[4rem]'><OpenseaLogo /></Link>
        </div>

    </motion.div>
  )
}

export default Buy