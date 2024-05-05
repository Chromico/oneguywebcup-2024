export default function Faq() {
    return (
      <section className="bg-gradient-to-r from-ugdark to-ugpurple"> 
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          {/* Hero content */}
          <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
            <div className="space-y-4">
                <details className="group rounded-lg bg-ugblue p-6 [&_summary::-webkit-details-marker]:hidden" open>
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                    <h2 className="font-medium">How many people can each bunker accomodate?</h2>

                    <span className="relative size-5 shrink-0">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                        strokeWidth="2"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        </svg>

                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                        strokeWidth="2"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        </svg>
                    </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-white">
                    Every bunker can accomodate up to 9000 people at a time. We cannot guarantee a place for you unless you are a high ranking United Government politician.
                    </p>
                </details>

                <details className="group rounded-lg bg-ugblue p-6 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                    <h2 className="font-medium text-white">There's no bunker near me. What do I do?</h2>

                    <span className="relative size-5 shrink-0">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 opacity-100 group-open:opacity-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                        strokeWidth="2"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        </svg>

                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 opacity-0 group-open:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                        strokeWidth="2"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        </svg>
                    </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-white">
                    We recommend you have a look at our survival page. 
                    </p>
                </details>
            </div>
          </div>
        </div>
      </section>
    );
}
