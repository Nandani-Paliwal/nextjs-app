import Announcement from '@/components/announcement/index'
import Test from '@/components/announcement/test'
import Hero from '@/components/hero/index'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Hero />
      <Announcement />
      {/* <Test /> */}
    </div>
  )
}
