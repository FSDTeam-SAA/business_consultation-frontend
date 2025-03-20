import { ChevronRight } from "lucide-react";

export function FlexiblePricing() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-12 flex flex-col gap-8 lg:flex-row">
        <div className="lg:w-1/2">
          <div className="mb-6 inline-block rounded-full border border-green-500 px-3 py-1 text-sm font-medium text-green-500">
            • Flexible Pricing
          </div>

          <h2 className="mb-6 text-4xl font-bold text-black">
            Tailored Pricing
            <br />
            Plans for everyone
          </h2>

          <p className="leading-relaxed text-gray-600">
            Tremendous involvement with power departure, land master
            <br />
            curement, liaisoning and working with state. An ideal mix of
            <br />
            woldwide experience and skill to additional.
          </p>
        </div>

        <div className="space-y-4 lg:w-1/2">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between overflow-hidden rounded-md bg-[#004225] text-white"
            >
              <span className="px-6 py-4 text-xl font-medium">Basic Plan</span>
              <button className="flex h-full items-center justify-center px-6 py-4 text-white">
                <ChevronRight size={24} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
