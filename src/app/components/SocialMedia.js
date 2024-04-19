// components/FloatingSocialMedia.js
"use client"
// components/FloatingSocialMedia.js
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faDiscord,
  faMedium,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { slideInFromBottom , socialHover } from "./utils/motionEffects";

export const FloatingSocialMedia = () => {
  const socialMediaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="fixed left-4 bottom-1/3 z-50 Mobile:invisible"
      initial="hidden"
      animate="visible"
      variants={socialMediaVariants}
    >
      <motion.a 
        variants={slideInFromBottom(0.6)}
        whileHover={socialHover}
        href="https://discord.com/invite/Wf8bD6Pgsh" className="text-white text-xl mx-2 block pb-7" target='_blank'>
        <FontAwesomeIcon icon={faDiscord} className="highlight" />
      </motion.a>
      <motion.a 
       variants={slideInFromBottom(0.5)}
       whileHover={socialHover}
       href="https://twitter.com/TailsAfterGlow" className="text-white text-xl mx-2 block pb-7" target='_blank' >
        <FontAwesomeIcon icon={faTwitter} />
      </motion.a>
      <motion.a 
       variants={slideInFromBottom(0.4)}
       whileHover={socialHover}
       href="https://www.facebook.com/TailsAfterGlow/" className="text-white text-xl mx-2 block pb-7" target='_blank' >
        <FontAwesomeIcon icon={faFacebook} />
      </motion.a>
      <motion.a 
       variants={slideInFromBottom(0.3)}
       whileHover={socialHover}
       href="https://www.instagram.com/tailsafterglow/" className="text-white text-xl mx-2 block pb-7" target='_blank' >
        <FontAwesomeIcon icon={faInstagram} />
      </motion.a>
      <motion.a 
       variants={slideInFromBottom(0.2)}
       whileHover={socialHover}
       href="https://tailsafterglow.medium.com/" className="text-white text-xl mx-2 block pb-7" target='_blank' >
        <FontAwesomeIcon icon={faMedium} />
      </motion.a>
      <motion.a 
       variants={slideInFromBottom(0.1)}
       whileHover={socialHover}
       href="https://www.youtube.com/@TailsAfterGlow" className="text-white text-xl mx-2 block pb-7" target='_blank' >
        <FontAwesomeIcon icon={faYoutube} />
      </motion.a>
    </motion.div>
  );
};
