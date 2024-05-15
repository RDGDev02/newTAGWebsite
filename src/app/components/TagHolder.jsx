"use client"
import { slideInView , imgAnimation } from './utils/motionEffects'
import { motion } from 'framer-motion'

const TagHolder = () => {
  return (
    <motion.section id="holder" className='scroll-mt-28'>
      <div
        className='flex-1 flex justify-center items-left flex-col Mobile:px-6 px-[3rem] pt-4 pb-[4rem]'
        >
          <motion.div 
          initial="offscreen"
          whileInView="onscreen"
          variants={slideInView(0.3)}
          className=" flex flex-row justify-between items-center">
            <h1 className="flex-1 text-[52px] text-white Mobile:text-[40px] font-semibold">
              <span className="text-gradient font-semibold">TAG BENEFITS</span>{" "}
            </h1>
            
          </motion.div>
          <motion.p 
          initial="offscreen"
          whileInView="onscreen"
          variants={slideInView(0.6)}
          className={`font-opensan font-normal text-gray-300 `}
         >
          Foxes unite! Tails of the AfterGlow is on the way to give you unique privileges to look forward to as we go through.
          </motion.p>
        </div>
        <div className="grid Mobile:grid-cols-1 Mobile:px-[1.5rem] Med:grid-cols-2  grid-cols-3 gap-4 justify-center px-[3rem] ">
          <motion.div 
          variants={imgAnimation(0.2)}
          initial="initial"
          whileInView="animate"
          className="p-4 bg-black-gradient-2 rounded-[20px] box-shadow relative">
          <img
              src="/assets/gamma.png" // Replace with the actual URL of your image icon
              alt="gamma"
              className="mx-auto mb-4 absolute top-[-3rem] left-1/2 transform -translate-x-1/2"
              style={{ width: '100px', height: '100px' }} // Adjust the size as needed
            />
              <h2 className="text-lg font-semibold mb-2 gamma__gradient">GAMMA</h2>
              <p className='text-gray-300 pb-5 font-normal'>NFT holder Tier 1 with 1 to 6 foxes in a den, you are privileged to have the following benefits:</p>
              <p className='text-gray-300 pb-5'>Scholarship Raffle Entry for Future P2E Games.</p>
          </motion.div>


          <motion.div 
          variants={imgAnimation(0.4)}
          initial="initial"
          whileInView="animate"
          className="p-4 bg-black-gradient-2 rounded-[20px] box-shadow relative">
          <img
              src="/assets/beta.png" // Replace with the actual URL of your image icon
              alt="gamma"
              className="mx-auto mb-4 absolute top-[-3rem] left-1/2 transform -translate-x-1/2"
              style={{ width: '100px', height: '100px' }} // Adjust the size as needed
            />
              <h2 className="text-lg font-semibold mb-2 beta__gradient">BETA</h2>
               <p className='text-gray-300 pb-5'>NFT holder Tier 2 with 7 to 10 foxes in a den, you will be given the following benefits:</p>
               <p className='text-gray-300 pb-5'>Scholarship Raffle Entry for Future P2E Games</p>
          </motion.div>

          <motion.div 
          variants={imgAnimation(0.6)}
          initial="initial"
          whileInView="animate"
          className="p-4 bg-black-gradient-2 rounded-[20px] box-shadow relative">
          <img
              src="/assets/alpha.png" // Replace with the actual URL of your image icon
              alt="gamma"
              className="mx-auto mb-4 absolute top-[-3rem] left-1/2 transform -translate-x-1/2"
              style={{ width: '100px', height: '100px' }} // Adjust the size as needed
            />
              <h2 className="text-lg font-semibold mb-2 alpha__gradient">ALPHA</h2>
               <p className='text-gray-300 pb-5'>NFT holder Tier 3 with at least 11 foxes in a den, you are guaranteed the following benefits:</p>
               <p className='text-gray-300 pb-5'>Private and Pre-sale Access to All Future Drops.</p>
          </motion.div>

          </div>
    </motion.section>
  )
}

export default TagHolder