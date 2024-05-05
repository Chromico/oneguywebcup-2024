export const metadata = {
    title: 'Survival Guide - United Government',
    description: 'Survival Guide',
  }
  

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
  