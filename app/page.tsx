
import Hero from '@/components/hero'
import Announcement from '@/components/announcement'
import GiestWrapper from '@/components/giest-wrapper'
import ReactFramworkProduction from '@/components/react-framewrk-production'
import Features from '@/components/features'
import Customers from '@/components/customers'


export default function Home() {
  return (
    <div>
      <Hero />
      <Announcement />
      <GiestWrapper />
      <ReactFramworkProduction />
      <Features />
      <Customers />
    </div>
  )
}
