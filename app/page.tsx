import Hero from '@/components/hero'
import Announcement from '@/components/announcement'
import GiestWrapper from '@/components/giest-wrapper'
import ReactFramworkProduction from '@/components/react-framewrk-production'
import Features from '@/components/features'
import Customers from '@/components/customers'
import Learn from '@/components/learn'
import NewsletterSubscribe from '@/components/newsletter-subscribe'


export default function Home() {
  return (
    <div className=''>
      <Hero />
      <Announcement />
      <GiestWrapper />
      <ReactFramworkProduction />
      <Features />
      <Customers />
      <Learn />
      <NewsletterSubscribe />
    </div>
  )
}
