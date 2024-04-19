"use client"
import { slideInView , imgAnimation } from './utils/motionEffects'
import { motion } from 'framer-motion'
import { FiPlus } from "react-icons/fi";
import React, { useState, useRef, useEffect } from "react";

const Faq = () => {
  const [activeSections, setActiveSections] = useState([]);

  const contentRefs = useRef([]);

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      ref.style.maxHeight = activeSections.includes(index)
        ? `${ref.scrollHeight}px`
        : "0px";
    });
  }, [contentRefs, activeSections]);

  const toggleAccordion = (index) => {
    setActiveSections((prevActiveSections) => {
      if (prevActiveSections.includes(index)) {
        return prevActiveSections.filter((i) => i !== index);
      } else {
        return [...prevActiveSections, index];
      }
    });
  };

  return (
    <motion.section id="faq" className='scroll-mt-28'>
      <div
        className='flex-1 flex justify-center items-left flex-col Mobile:px-6 px-[3rem] pt-4 pb-[4rem]'
      >
        <motion.div 
          initial="offscreen"
          whileInView="onscreen"
          variants={slideInView(0.3)}
          className=" flex flex-row justify-between items-center"
        >
          <h1 className="flex-1 text-[52px] text-white Mobile:text-[40px] font-semibold">
            <span className="text-gradient font-semibold">F.A.Q</span>{" "}
          </h1>
        </motion.div>
        <motion.p 
          initial="offscreen"
          whileInView="onscreen"
          variants={slideInView(0.6)}
          className={`font-opensan font-normal text-gray-300 `}
        >
          Find the answers for the most frequently asked questions below.
        </motion.p>
      </div>
      <div className='grid Mobile:grid-cols-1 Mobile:px-[1.5rem] Med:grid-cols-2  grid-cols-3 gap-4 justify-center px-[3rem] '>
      <motion.div 
          variants={imgAnimation(0.3)}
          initial="initial"
          whileInView="animate"
           className=' relative'>
          <button
            className={`question-section ${activeSections.includes(0) ? 'active' : ''}`}
            onClick={() => toggleAccordion(0)}
          >
            <div>
              <div className="question-align">
                <h4 className="question-style text-white">
                What is TAG?
                </h4>
                <FiPlus
                  className={activeSections.includes(0) ? 'question-icon rotate' : 'question-icon'}
                />
              </div>
              <div
                ref={(ref) => contentRefs.current[0] = ref}
                className={activeSections.includes(0) ? 'answer answer-divider' : 'answer'}
              >
                <p>Tails of the AfterGlow is a set of 4,266 NFT collectibles by Real Deal Guild, one of the pioneering communities in blockchain-based play-to-earn games.</p>
                </div>
            </div>
          </button>
        </motion.div>
        <motion.div 
          variants={imgAnimation(0.4)}
          initial="initial"
          whileInView="animate"
           className=' relative'>
          <button
            className={`question-section ${activeSections.includes(1) ? 'active' : ''}`}
            onClick={() => toggleAccordion(1)}
          >
            <div>
              <div className="question-align">
                <h4 className="question-style text-white">
                What is RDG?
                </h4>
                <FiPlus
                  className={activeSections.includes(1) ? 'question-icon rotate' : 'question-icon'}
                />
              </div>
              <div
                ref={(ref) => contentRefs.current[1] = ref}
                className={activeSections.includes(1) ? 'answer answer-divider' : 'answer'}
              >
                <p>Real Deal Guild (RDG) is a reputable and trusted social community of players who help each other discover and explore profit-making opportunities made possible by cryptocurrency and gaming. As one of the earliest adopters of blockchain-based games, RDG belongs amongst the most renowned guilds in the Philippines that mobilized the play-to-earn revolution. With over 63,000 members and counting, RDG continues to grow and educate its community about the Metaverse, crypto gaming, NFTs, and the blockchain technology that powers them.</p> </div>
            </div>
          </button>
        </motion.div>
        <motion.div 
          variants={imgAnimation(0.5)}
          initial="initial"
          whileInView="animate"
          className=' relative'>
          <button
            className={`question-section ${activeSections.includes(2) ? 'active' : ''}`}
            onClick={() => toggleAccordion(2)}
          >
            <div>
              <div className="question-align">
                <h4 className="question-style text-white">
                What is TAG’s Goal?
                </h4>
                <FiPlus
                  className={activeSections.includes(2) ? 'question-icon rotate' : 'question-icon'}
                />
              </div>
              <div
                ref={(ref) => contentRefs.current[2] = ref}
                className={activeSections.includes(2) ? 'answer answer-divider' : 'answer'}
              >
                <p>Tails of the AfterGlow, aligned with Real Deal Guild’s mission, aims to build a community and give economic opportunities to every individual through play to earn revolution.</p>
              </div>
            </div>
          </button>
        </motion.div>
        <motion.div 
          variants={imgAnimation(0.6)}
          initial="initial"
          whileInView="animate"
          className=' relative'>
          <button
            className={`question-section ${activeSections.includes(3) ? 'active' : ''}`}
            onClick={() => toggleAccordion(3)}
          >
            <div>
              <div className="question-align">
                <h4 className="question-style text-white">
                What is TAG’s Mission?
                </h4>
                <FiPlus
                  className={activeSections.includes(3) ? 'question-icon rotate' : 'question-icon'}
                />
              </div>
              <div
                ref={(ref) => contentRefs.current[3] = ref}
                className={activeSections.includes(3) ? 'answer answer-divider' : 'answer'}
              >
                <p>Tails of the AfterGlow intends to educate all holders about the wide-ranged possibilities in the blockchain - NFTs, Trading, and Play to Earn, especially those who want to start exploring more into the metaverse through TAG.</p>
                </div>
            </div>
          </button>
        </motion.div>
        <motion.div 
          variants={imgAnimation(0.7)}
          initial="initial"
          whileInView="animate"
           className=' relative'>
          <button
            className={`question-section ${activeSections.includes(5) ? 'active' : ''}`}
            onClick={() => toggleAccordion(5)}
          >
            <div>
              <div className="question-align">
                <h4 className="question-style text-white">
                What is TAG’s unique benefit to holders?
                </h4>
                <FiPlus
                  className={activeSections.includes(5) ? 'question-icon rotate' : 'question-icon'}
                />
              </div>
              <div
                ref={(ref) => contentRefs.current[5] = ref}
                className={activeSections.includes(5) ? 'answer answer-divider' : 'answer'}
              >
                <p>
                Tails of the AfterGlow allots 10% of its revenue, including revenue from P2E games and merchandise sales, to the holders. This amount is further subdivided into 5%, 3%, and 2% shares for Alpha, Beta, and Gamma respectively. The distributions are made twice a year, every six months.
                </p>
                </div>
            </div>
          </button>
        </motion.div>
        <motion.div 
          variants={imgAnimation(0.8)}
          initial="initial"
          whileInView="animate"
           className=' relative'>
          <button
            className={`question-section ${activeSections.includes(7) ? 'active' : ''}`}
            onClick={() => toggleAccordion(7)}
          >
            <div>
              <div className="question-align">
                <h4 className="question-style text-white">
                Can we still purchase TAG?
                </h4>
                <FiPlus
                  className={activeSections.includes(7) ? 'question-icon rotate' : 'question-icon'}
                />
              </div>
              <div
                ref={(ref) => contentRefs.current[7] = ref}
                className={activeSections.includes(7) ? 'answer answer-divider' : 'answer'}
              >
                <p>
                The collection can be found on the secondary market –
OpenSea
If you are interested, some may be selling theirs on it. However, we encourage holders to tame your mysterious, dope-looking foxes until you experience all the privileges you will get along with them.
                </p>
                </div>
            </div>
          </button>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Faq;
