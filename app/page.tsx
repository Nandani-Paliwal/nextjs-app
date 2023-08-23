import Announcement from '@/components/announcement/Announcement'
import Hero from '@/components/hero/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Hero />
      <Announcement />
    </div>
  )
}
