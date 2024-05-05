export const metadata = {
  title: 'Home - Open PRO',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Hero2 from '@/components/hero2'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Essentials from '@/components/essentials'

export default function Home() {
  return (
    <>
      <Hero2 />
      {/* <Essentials /> */}
      {/* <Features /> */}
      {/* <Zigzag /> */}
      {/* <Testimonials /> */}
      <Newsletter />
    </>
  )
}
