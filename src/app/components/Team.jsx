"use client"
import { slideInView, imgAnimation , teamAnimation} from './utils/motionEffects'
import { motion } from 'framer-motion'
import { FiPlus } from "react-icons/fi";
import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { slideInFromBottom , socialHover } from "./utils/motionEffects";
import Image from 'next/image';


const Team = () => {

  const teamData = [
    {
      imageHref: "/assets/team/b3nn.png",
      name: "B3NN",
      role: "Founder",
      twitterHandle: "https://twitter.com/manilacrypto1"
    },
    {
      imageHref: "/assets/team/TP.png",
      name: "TP",
      role: "Co-Founder/Marketing Head",
      twitterHandle: "https://twitter.com/0xtipxie"
    },
    {
      imageHref: "/assets/team/Focc.png",
      name: "Focc",
      role: "Creative Director",
      twitterHandle: "https://twitter.com/focc_x"
    },
    {
      imageHref: "/assets/team/Jas.png",
      name: "Jas",
      role: "Developer",
      twitterHandle: "https://twitter.com/Jas0nly"
    },
    {
      imageHref: "/assets/team/jam.png",
      name: "Jam",
      role: "Head Writer",
      twitterHandle: "https://twitter.com/jamrdg"
    },
    {
      imageHref: "/assets/team/mm.png",
      name: "MM",
      role: "H.R Manager",
      twitterHandle: "https://twitter.com/immharnelle"
    },
    {
      imageHref: "/assets/team/heaven.png",
      name: "0xHeavensent",
      role: "Marketing and Social Media Officer",
      twitterHandle: "https://twitter.com/0xHeavensent"
    },
    {
      imageHref: "/assets/team/banan.png",
      name: "Banan",
      role: "Senior Graphic Artist",
      twitterHandle: "https://twitter.com/wikhandbanan"
    },
    {
      imageHref: "/assets/team/eimi.png",
      name: "Eimethyst",
      role: "Community Moderator",
      twitterHandle: "https://twitter.com/itsmeseri__"
    },
    {
      imageHref: "/assets/team/wez.png",
      name: "Wez",
      role: "TAG Host",
    },
    {
      imageHref: "/assets/team/bii.png",
      name: "Papa bii",
      role: "TAG Host",
      twitterHandle: "https://twitter.com/papabii_rmt"
    },
    {
      imageHref: "/assets/team/kamote.png",
      name: "Master Kamote",
      role: "TAG Host",
      twitterHandle: "https://twitter.com/masterkamote_"
    },
  ];

  return (
    <motion.section id="team" className='scroll-mt-28'>
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
            <span className="text-gradient font-semibold">OUR TEAM</span>{" "}
          </h1>
        </motion.div>
        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          variants={slideInView(0.6)}
          className={`font-opensan font-normal text-gray-300 `}
        >
          Meet and greet our team members.
        </motion.p>
      </div>
      <div className="flex flex-wrap px-[3rem]">
      {teamData.map((member, index) => (
        <motion.div 
        variants={teamAnimation(0.4, index * 0.2, 0.4)}
        initial="initial"
        whileInView="animate"
         key={index} className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
          <div className="relative">
            <div  className="block">
              <Image 
              width={500}
              height={500}
              loading='lazy'
              className="rounded-2xl grayscale hover:grayscale-0"
                src={member.imageHref} alt={member.name}></Image>
                {member.twitterHandle && (
              <div className="absolute bottom-0 right-0 mb-2 mr-2">
              <a 
                href={member.twitterHandle} className="text-white text-2xl mx-2 block hover:text-blue-600" target='_blank'>
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
                )}
            </div>
          </div>
          <div className="text-center mt-6">
            <h4 className="text-white mb-1">
              {member.name}
            </h4>
            <div className="text-gray-400 font-light mb-2">
              {member.role}
            </div>
          </div>
        </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Team;
