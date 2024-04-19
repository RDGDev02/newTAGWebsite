// pages/role.js
"use client"
// pages/role.js

import { SessionProvider, useSession } from 'next-auth/react';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import NavRole from '../components/NavRole';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import lottie from 'lottie-web';
import alphaAnimation from '../components/constants/alpha.json';
import betaAnimation from '../components/constants/beta.json';
import gammaAnimation from '../components/constants/gamma.json';
import noRoleAnimation from '../components/constants/notHolder.json';
import notServerAnimation from '../components/constants/notServer.json';
import { redirect } from 'next/navigation';


const RolePageContent = () => {
  const { data: session } = useSession();
  const [shouldFetchGuildInfo, setShouldFetchGuildInfo] = useState(true);
  const [guildInfo, setGuildInfo] = useState(null);
  const [notInGuild, setNotInGuild] = useState(false);
  const [userRole, setUserRoles ] = useState(null);
  const [userName, setUserName ] = useState(null);
  const animationContainer = useRef(null);
  const animationRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // Load fonts when component mounts
    const font1 = new FontFace('Spantaran', 'url(/assets/font/Spantaran.woff2)');
    const font2 = new FontFace('Furore', 'url(/assets/font/Furore.woff2)');
    const font3 = new FontFace('Open Sans', 'url(/assets/font/OpenSans-Regular.woff2)');
    
    Promise.all([font1.load(), font2.load(), font3.load()])
      .then(() => {
        document.fonts.add(font1);
        document.fonts.add(font2);
        document.fonts.add(font3);
      })
      .catch(error => console.error('Fonts loading error:', error));
  }, []);

  useEffect(() => {


    const fetchGuildInfo = async () => {
      try {
        const response = await fetch('https://discord.com/api/users/@me/guilds/939607711002296370/member', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
        });

        if (response.status === 404) {
          // User is not in the guild
          setNotInGuild(true);
          setShouldFetchGuildInfo(false);
          setUserRoles(['Not Join']);
          setUserName(session.discordUser.global_name);
          return;
        }

        if (!response.ok) {
          throw new Error(`Discord API request failed with status ${response.status}`);
        }

        const guilds = await response.json();
        if (guilds.roles) {
          for (let i = 0; i < guilds.roles.length; i++) {
            if (guilds.roles[i] === "992300210132889750") {
              setUserRoles(['alpha']);

              break;
            }
            else if (guilds.roles[i] === "949621526003613777") {
              setUserRoles(['beta']);
              break;
            }
            else if (guilds.roles[i] === "949621544794091530") {
              setUserRoles(['gamma']);
              break;
            }
            else {
              setUserRoles(['no role']);
            }

          }


        }

        console.log('Guilds:', guilds);
        setUserName(guilds.user.global_name);
        setGuildInfo(guilds);
        // Set the flag to false after a successful response
        setShouldFetchGuildInfo(false);
      } catch (error) {
        console.error('Error fetching guild information:', error);
      }
    };
    if (session && shouldFetchGuildInfo) {
      fetchGuildInfo();
    }
  }, [session, shouldFetchGuildInfo]);
  

  useEffect(() => {
    let animationData;
    console.log(userName);
    if (userRole == 'gamma'){
      animationData = gammaAnimation;
    }
    else if(userRole == 'beta'){
      animationData = betaAnimation;
    }
    else if(userRole == 'alpha'){
      animationData = alphaAnimation;
    }
    else if(userRole =='no role') {
      animationData = noRoleAnimation;
    }
    else{
      animationData = notServerAnimation;
    }

    const replacedAnimationData = JSON.parse(JSON.stringify(animationData).replace(/{username}/g, userName));

    animationRef.current = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: replacedAnimationData,
    });

    animationRef.current.addEventListener('complete', () => {
      setIsPaused(true);
    });

    return () => {
      animationRef.current.destroy();
    };
  }, [userRole]);

  useEffect(() => {
    if (isPaused && animationRef.current) {
      animationRef.current.pause();
    }
  }, [isPaused]);

  

  if (!session) {
    // Redirect to the login page or show a loading indicator if the session is not available
    return (
      <div className={`sm:px-16 px-6 flex justify-center items-center w-full fixed z-10 shadow-md backdrop-filter backdrop-blur-lg bg-transparent mt-[200px]`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <h1 className='text-white text-center'>Logging in...</h1>
        </div>
      </div>
    )


  }
  
  if (notInGuild) {
    // User is not in the guild
    return (
      <div ref={animationContainer} style={{ height: '700px', width: '700px' }}></div>
    );
  }
  else {
    return (
      <div ref={animationContainer} style={{ height: '700px', width: '700px' }}></div>
    )
  }

};

const Role = () => {
  


  return (
    <SessionProvider>
      <div className={`sm:px-16 px-6 flex justify-center items-center w-full fixed z-10 shadow-md backdrop-filter backdrop-blur-lg bg-transparent`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <NavRole />
        </div>
      </div>
      <div className={`flex justify-center items-center pt-8`}>
        <RolePageContent />
      </div>
    </SessionProvider>
  );
};

export default Role;

