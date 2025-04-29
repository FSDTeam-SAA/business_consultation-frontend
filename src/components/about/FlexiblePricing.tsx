import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FlexiblePricing() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 md:py-24">
      <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-16">
        <div className="w-full space-y-6 lg:w-1/2">
          <div className="text-md inline-flex items-center rounded-md border border-green-600 px-3 py-1 font-medium text-green-600">
            <span className="mr-1">•</span> Flexible Pricing
          </div>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Tailored Pricing Plans for everyone
          </h2>

          <p className="max-w-lg text-gray-600">
            Tremendous involvement with power departure, land master curement,
            liaisoning and working with state. An ideal mix of worldwide
            experience and skill to additional.
          </p>
        </div>

        <div className="w-full space-y-4 lg:w-1/2">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem
              value="basic-plan"
              className="overflow-hidden rounded-lg border border-gray-200"
            >
              <AccordionTrigger className="flex justify-between bg-green-900 px-6 py-4 text-white hover:bg-green-800">
                <span className="text-xl font-medium">Basic Plan</span>
              </AccordionTrigger>
              <AccordionContent className="bg-green-900 px-6 py-4 text-white">
                <div className="space-y-4">
                  <p className="text-lg font-medium">$19/month</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">✓</span>
                      <span>Essential features for small businesses</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">✓</span>
                      <span>Up to 5 team members</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">✓</span>
                      <span>Basic support</span>
                    </li>
                  </ul>
                  <button className="w-full rounded-md bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700">
                    Get Started
                  </button>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="pro-plan"
              className="overflow-hidden rounded-lg border border-gray-200"
            >
              <AccordionTrigger className="flex justify-between bg-green-900 px-6 py-4 text-white hover:bg-green-800">
                <span className="text-xl font-medium">Pro Plan</span>
              </AccordionTrigger>
              <AccordionContent className="bg-green-900 px-6 py-4 text-white">
                <div className="space-y-4">
                  <p className="text-lg font-medium">$49/month</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">✓</span>
                      <span>All Basic features</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">✓</span>
                      <span>Up to 20 team members</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">✓</span>
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">✓</span>
                      <span>Advanced analytics</span>
                    </li>
                  </ul>
                  <button className="w-full rounded-md bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700">
                    Get Started
                  </button>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="enterprise-plan"
              className="overflow-hidden rounded-lg border border-gray-200"
            >
              <AccordionTrigger className="flex justify-between bg-green-900 px-6 py-4 text-white hover:bg-green-800">
                <span className="text-xl font-medium">Enterprise Plan</span>
              </AccordionTrigger>
              <AccordionContent className="bg-green-900 px-6 py-4 text-white">
                <div className="space-y-4">
                  <p className="text-lg font-medium">Custom pricing</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">✓</span>
                      <span>All Pro features</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">✓</span>
                      <span>Unlimited team members</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">✓</span>
                      <span>24/7 dedicated support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">✓</span>
                      <span>Custom integrations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">✓</span>
                      <span>On-premise deployment options</span>
                    </li>
                  </ul>
                  <button className="w-full rounded-md bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700">
                    Get Started
                  </button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
