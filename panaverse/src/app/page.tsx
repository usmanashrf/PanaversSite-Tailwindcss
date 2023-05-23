import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Hero from '@/views/heroSection/Hero'
import Program from '@/views/programSection/Program'
import JoinUs from '@/views/joinUs/JoinUs'
import OurPartners from '@/views/ourPartners/OurPartners'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
   <Hero></Hero>
   <Program/>
   <JoinUs/>
   <OurPartners/>
   <Hero></Hero>
   </>
  )
}
