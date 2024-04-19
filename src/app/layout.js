import './globals.css'
import { Montserrat } from "@next/font/google";
import { motion  , useInView , useAnimation} from 'framer-motion'
import StarsCanvas from './components/star';
import Buy from './components/Buy';
import { FloatingSocialMedia } from './components/SocialMedia';
import ScrollProgress from './components/ScrollProgress';


export const metadata = {
  title: 'TAG',
  description: 'Tails of the Afterglow',
}
const mont = Montserrat({
  weight: ['100', '300', '400', '500', '700', '800'],
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mont.className}>
      
      <body>
      <ScrollProgress />
      <StarsCanvas />
      <main className="app">
            {children}
            <FloatingSocialMedia / >
            <Buy />
        </main>
        </body>
    </html>
  )
}
