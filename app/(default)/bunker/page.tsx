export const metadata = {
    title: 'Bunker Locations - United Government',
    description: 'Bunker Locations',
  }
  

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
  