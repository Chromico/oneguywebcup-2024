import Image from 'next/image';
import Army from '@/public/images/army.jpg';

export default function Newsletter() {
  return (
    <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 bg-neworange">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-left">
          <h2 className="text-2xl font-bold text-white md:text-3xl mb-2">
            Get notified when to take action.
          </h2>
          <p className="text-white md:mt-4 mb-2 md:block">
            Add your email below and you will receive a notification about any new world events or whether the military is recruiting.
          </p>
          <form
            action="https://api.web3forms.com/submit"  // Web3Forms endpoint
            method="POST"
            className="space-y-4"
          >
            <input type="hidden" name="access_key" value="4c45546f-8706-48b3-bef9-e7054b8bec12" />  

            <input
              type="email"
              id="UserEmail"
              name="email"  // Ensure the name attribute is set correctly for Web3Forms to recognize it
              placeholder="john@email.com"
              className="mt-1 w-full rounded-md text-black border-gray-200 shadow-sm sm:text-sm"
            />

            <button
              type="submit"
              className="inline-block rounded bg-ugdark px-12 py-3 text-sm font-medium text-white transition hover:bg-ugblue tail focus:outline-none focus:ring focus:ring-newgreen"
            >
              Get Notified
            </button>
          </form>
        </div>
      </div>

      <Image
        src={Army}  // Direct reference to the imported image
        alt="Army recruitment image"
        width={400}
        height={400}
      />
    </section>
  );
}
