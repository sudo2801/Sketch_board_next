import Image from 'next/image'
import { Inter } from 'next/font/google'
import Menu from '@/components/Menu'
import Toolbox from '@/components/Toolbox'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
    <Menu />
    <Toolbox  />
   </div>
  )
}
