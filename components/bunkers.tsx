import VideoThumb from '@/public/images/hero-image-01.jpg'
import ModalVideo from '@/components/modal-video'

export default function Bunkers() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">


        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">


        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16 text-left">
            <div className="mx-auto max-w-lg text-center lg:mx-0 text-left">
                <h2 className="text-3xl font-bold sm:text-4xl text-left">Find a Bunker</h2>

                <p className="mt-4 text-white text-left">
                Our state of the art bunkers are equiped with the latest technologies to ensure a consistent internet connetion even during an extinction level event.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="#"
                >

                <h2 className="mt-2 font-bold">Bunker 1</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-white">
                Central Australia.
                </p>
                </a>

                <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="#"
                >

                <h2 className="mt-2 font-bold">Bunker 2</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-white">
                Northern Canada.
                </p>
                </a>

                <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="#"
                >

                <h2 className="mt-2 font-bold">Bunker 3</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-white">
                Patagonia, Argentina.
                </p>
                </a>

                <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="#"
                >

                <h2 className="mt-2 font-bold">Bunker 4</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-white">
                Siberia, Russia.
                </p>
                </a>

                <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="#"
                >

                <h2 className="mt-2 font-bold">Bunker 5</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-white">
                The Scottish Highlands.
                </p>
                </a>

                <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="#"
                >

                <h2 className="mt-2 font-bold">Bunker 6</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-white">
                Namib Desert, Namibia.
                </p>
                </a>
            </div>
            </div>


        </div>

      </div>
    </section>
  )
}
