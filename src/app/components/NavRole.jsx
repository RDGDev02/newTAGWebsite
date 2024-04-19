'use client'

import { useState, useEffect } from "react";
import { navLinks } from "./constants/navLinks";
import { signIn  , signOut} from 'next-auth/react';
import { useRouter } from 'next/navigation';


const NavRole = () => {
  const [toggle, setToggle] = useState(false);
  const router = useRouter();

  const handleSignOut = () => {
    // Perform sign-out logic if needed

    // Navigate back to the home page
    router.push('/');
  };
  return (

    <nav className="w-full flex py-6 justify-between items-center navbar ">
      <a href="/"><img src="assets/logo.png" alt="tag"
      className="w-[50px] h-[32px]" /></a>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav , index) => (
          <li
            key={nav.id}
            className={`font-poppins
            font-normal
            cursor-pointer
            text[16px]
            mr-10
             text-white`}
          >
            <a href={`/`} >
              {nav.title}
            </a>

          </li>
        ))}
         <li
            className={`font-poppins
            font-normal
            cursor-pointer
            text[16px]}
            mr-0
             text-white`}
          >
          <button  onClick={handleSignOut} className="bg-gradient-to-r  from-indigo-500 text-white py-2 px-4 rounded inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-1 bi bi-discord" viewBox="0 0 16 16"> <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/> </svg>
                <span>Sign Out</span>
                </button>
          </li>
        
      </ul>
      
      

      <div className="sm:hidden flex flex-1 justify-end items-center ">
        <img src={toggle ? '/assets/close.svg' : '/assets/menu.svg'}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={()=> setToggle((prev) => !prev)}
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-0 min-w-[140px] rounded-xl sidebar 
          `}>
            <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav , index) => (
                <li
                  key={nav.id}
                  className={`font-poppins
                  font-normal
                  cursor-pointer
                  text[16px] ${index === navLinks.length -1 ? 'mr-0' : 'mb-4'}
                  text-white`}
                >
                  <a href={`#${nav.id}`} >
                    {nav.title}
                  </a>
                  

                </li>
              ))}
              <li
                className={`font-poppins
                font-normal
                cursor-pointer
                text[16px]}
                mt-4
                mr-0
                text-white
                `
                }
              >
                <button onClick={() => signOut('discord' , { callbackUrl: '/'}) } className="bg-gradient-to-r  from-indigo-500 text-white py-2 px-4 rounded inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-1 bi bi-discord" viewBox="0 0 16 16"> <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/> </svg>
                <span>Sign Out</span>
                </button>

              </li>
          </ul>
          </div>
      </div>
    </nav>

  )
}

export default NavRole