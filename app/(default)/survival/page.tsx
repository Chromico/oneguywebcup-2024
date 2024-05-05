export const metadata = {
    title: 'Reset Password - Open PRO',
    description: 'Page description',
  }
  
import Link from 'next/link'

import Guide from '@/components/guide'
import Essentials from '@/components/essentials'
import Newsletter from '@/components/newsletter'

export default function Survivalguide() {
return (
    <>
     <Guide />
     <Essentials />
     <Newsletter />
    </>
)
}
  