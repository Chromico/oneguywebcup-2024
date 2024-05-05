import React from 'react';
import Image from 'next/image';
import Bunker from '@/public/images/bunker.png';
import Supplies from '@/public/images/supplies.png';
import Route from '@/public/images/route.png';
import Tuned from '@/public/images/tuned.png';

export default function Guide() {
  return (
    <section className="bg-gradient-to-r from-ugdark to-ugpurple">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        
        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                <div className="flex flex-col items-center justify-center h-96 rounded-lg bg-neworange text-center p-4">
                    <p className="text-xl text-white mb-2">Step 1</p>
                    <h2 className="text-2xl text-white mb-4">Seek shelter at your nearest bunker.</h2>
                    <Image
                        src={Bunker}  // Direct reference to the imported image
                        alt="Bunker image"
                        width={200}
                        height={200}
                    />
                </div>
                <div className="flex flex-col items-center justify-center h-96 rounded-lg bg-newgreen text-center p-4 lg:col-span-2">
                    <p className="text-xl mb-2">Step 2</p>
                    <h2 className="text-2xl mb-4">Prepare your supplies. Only the essentials.</h2>
                    <Image
                        src={Supplies}  // Direct reference to the imported image
                        alt="Supplies image"
                        width={200}
                        height={200}
                    />
                </div>
            </div>
        </div>

        <div className="relative pb-10">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                <div className="flex flex-col items-center justify-center h-96 rounded-lg bg-ugpurple text-center p-4 lg:col-span-2">
                    <p className="text-xl mb-2">Step 3</p>
                    <h2 className="text-2xl mb-4">Prepare an escape route. We cannot predict where exactly the attack will start.</h2>
                    <Image
                        src={Route}  // Direct reference to the imported image
                        alt="Route image"
                        width={200}
                        height={200}
                    />
                </div>
                <div className="flex flex-col items-center justify-center h-96 rounded-lg bg-ugblue text-center p-4">
                    <p className="text-xl mb-2">Step 4</p>
                    <h2 className="text-2xl mb-4">Stay Tuned on Social Media</h2>
                    <Image
                        src={Tuned}  // Direct reference to the imported image
                        alt="Tuned image"
                        width={200}
                        height={200}
                    />
                </div>
            </div>
        </div>

      </div>
    </section>
  )
}
