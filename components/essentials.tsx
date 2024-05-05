import VideoThumb from '@/public/images/hero-image-01.jpg'
import ModalVideo from '@/components/modal-video'

export default function Essentials() {
  return (
    <section className="bg-ugdark text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="mx-auto max-w-lg text-left">
            <h2 className="text-3xl font-bold sm:text-4xl">Quick Checklist</h2>

            <p className="mt-4 mb-6 text-white">
                The primary essentials you will need for at least 2 weeks. 
            </p>

            <fieldset>
                <legend className="sr-only">Checkboxes</legend>

                <div className="space-y-2">
                    <label
                    htmlFor="Option1"
                    className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-newgreen"
                    >
                    <div className="flex items-center">
                        &#8203;
                        <input type="checkbox" className="size-4 rounded border-gray-300" id="Option1" />
                    </div>

                    <div>
                        <strong className="font-medium text-white">Drinking Water</strong>

                        <p className="mt-1 text-pretty text-sm text-white">
                        The United Government of Earth's Health Authority recommends at least 5L of water per person.
                        </p>
                    </div>
                    </label>

                    <label
                    htmlFor="Option2"
                    className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-newgreen"
                    >
                    <div className="flex items-center">
                        &#8203;
                        <input type="checkbox" className="size-4 rounded border-gray-300" id="Option2" />
                    </div>

                    <div>
                        <strong className="font-medium text-white"> Medication </strong>

                        <p className="mt-1 text-pretty text-sm text-white">
                        If you have any serious illness or condition that requires medication please stock up as much as you can. Pharmacies will be closed in case of an attack.
                        </p>
                    </div>
                    </label>

                    <label
                    htmlFor="Option3"
                    className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-newgreen"
                    >
                    <div className="flex items-center">
                        &#8203;
                        <input type="checkbox" className="size-4 rounded border-gray-300" id="Option3" />
                    </div>

                    <div>
                        <strong className="text-pretty font-medium text-white"> Food & Snacks </strong>

                        <p className="mt-1 text-pretty text-sm text-white">
                        Please carry as much food as possible. We recommend you get food that is either canned, dried, vacuum sealed or dry freezed.
                        </p>
                    </div>
                    </label>
                </div>
            </fieldset>


            </div>

            
        </div>
    </section>
  )
}
