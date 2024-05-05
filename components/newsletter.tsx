import Image from 'next/image';
import Army from '@/public/images/army.jpg';

export default function Newsletter() {
  return (

    <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 bg-neworange">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-left">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Get notified when to take action.
          </h2>

          <p className="hidden text-white md:mt-4 md:block">
            Add your email below and you will receive a notification about any new world events or whether the military is recruiting.
          </p>

          <div>
            <form>

              <input
                type="email"
                id="UserEmail"
                placeholder="john@rhcp.com"
                className="mt-1 w-full rounded-md text-black border-gray-200 shadow-sm sm:text-sm"
              />

            </form>


          </div>
          <div className="mt-4 md:mt-8">
            <a
              href="#"
              className="inline-block rounded bg-ugdark px-12 py-3 text-sm font-medium text-white transition hover:bg-ugbluetail focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Notified
            </a>
          </div>
        </div>
      </div>

      <Image
        src={Army}  // Direct reference to the imported image
        alt="Army recruitment image"
        width={400}
        height={400}
      />
    </section>
  )
}
