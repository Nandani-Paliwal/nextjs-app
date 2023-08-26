import Announcement from '@/components/announcement/index'
import GiestWrapper from '@/components/giest-wrapper'
import Hero from '@/components/hero/index'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Hero />
      <Announcement />
      <GiestWrapper />
    </div>
  )
}
