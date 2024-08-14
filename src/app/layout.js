

import './globals.css';
import { Montserrat } from "@next/font/google";
import { motion, useInView, useAnimation } from 'framer-motion';
import StarsCanvas from './components/star';
import Buy from './components/Buy';
import { FloatingSocialMedia } from './components/SocialMedia';
import ScrollProgress from './components/ScrollProgress';
import { Metadata } from 'next';


export const metadata = {
	title: {
		default: 'TAG',
		template: 'Tails of the Afterglow is a unique collection of 4,266 dope foxes roaming around the grounds of Polygon Blockchain.',
	},
  openGraph: {
    title: 'TAG',
    description: 'Tails of the Afterglow is a unique collection of 4,266 dope foxes roaming around the grounds of Polygon Blockchain.',
    url: 'https://nextjs.org',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://realdealguild.io/img/logo/logoNew.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://realdealguild.io/img/logo/logoNew.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

const mont = Montserrat({
  weight: ['100', '300', '400', '500', '700', '800'],
  subsets: ['latin'],
});



export default function RootLayout({ children }) {
  

  return (
    <html lang="en" className={mont.className}>
      
      <body>
      
          <>
            <ScrollProgress />
            <StarsCanvas />
            <main className="app">
              {children}
              <FloatingSocialMedia />
              <Buy />
            </main>
          </>
     
      </body>
    </html>
  );
}
