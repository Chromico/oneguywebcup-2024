export const metadata = {
    title: 'Reset Password - Open PRO',
    description: 'Page description',
  }
  
import Link from 'next/link'

import Faq from '@/components/faq'
import Bunkers from '@/components/bunkers'
import Newsletter from '@/components/newsletter'

export default function Bunker() {
return (
    <>
     <Bunkers />
     <Faq />
     <Newsletter />
    </>
)
}
  