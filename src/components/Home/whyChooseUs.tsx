
import { Award, BarChart2, DollarSign } from "lucide-react";

export default function WhyChooseUsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:py-16 lg:py-20">
    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
  <div className="space-y-6">
    <div className="inline-block rounded-md border border-green-500  px-3 py-1 text-sm font-medium text-green-600">
      • WHY CHOOSE US
    </div>

    <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
      Why choose us
      <br />
      business solutions?
    </h2>

    <p className="max-w-lg text-gray-600 md:text-base lg:text-lg">
      Team is a diverse network of consultants and industry professionals
      with a global mindset and a collaborative culture. We work to
      understand your issues & are driven to ask better questions.
    </p>

    <button className="rounded-md bg-green-500 px-6 py-3 font-medium text-white transition-colors hover:bg-green-600">
      More About Us
    </button>
  </div>

  <div className="relative order-first h-[300px] w-full overflow-hidden rounded-lg md:h-[400px] lg:order-last lg:h-[350px]">
    <video className="w-full h-full object-cover" muted controls>
      <source
        src="https://s3-figma-videos-production-sig.figma.com/video/TEAM/1461204755658353120/2720cb9358fdcd4909cebcb97d5ccbb1aa85378d?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KD1gIYMDmGN1ENYvebkB7GjV7beiruC7x~dzLuiW1-bSDivY0KS1Z~Hs9rBouK4Y6HghB9dRXBX4k1wC0HuxUMM-OOF4Ve1yhy~YzL0gd44tq0WoheLS~Cu~AYy5ry8xbnQBhzLSkmPGfzSren3YseI1qfQFveUKZRkxsXaK-XYr4C5z5jhcRRmev~DjBzMcC-uPAoj7pqy4a5mJFqc3H8Lx-qxPWC1deAVmmlOLW4OnyYuvNmTyUCs~sPGTXTXwt7vu1KZkt8R6XOLQ0oyVhvWE-yneINEYdBvMlTkP3VTlEqyYhthqm5xYa2HTTg4Sr7qk558j2suK5zGy82267Q__"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  </div>
</div>



{/* card  */}
      <div className="grid grid-cols-1 gap-8 pt-8 md:grid-cols-3">
        <div className="flex flex-col justify-between space-y-6 md:flex-row md:items-center md:space-y-0">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-500 p-5 transition duration-300 hover:bg-green-600 md:mx-0 md:mb-0">
            <DollarSign className="h-10 w-10 text-white" />
          </div>
          <div className="text-center md:ml-6 md:text-left">
            <h3 className="mb-2 text-2xl font-semibold text-gray-900">
              Cost Saving Ideas
            </h3>
            <p className="text-sm text-gray-700 md:text-base">
              Exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between space-y-6 md:flex-row md:items-center md:space-x-6 md:space-y-0">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-500 p-5 transition duration-300 hover:bg-green-600 md:mx-0 md:mb-0">
            <BarChart2 className="h-10 w-10 text-white" />
          </div>
          <div className="text-center md:ml-6 md:text-left">
            <h3 className="mb-2 text-2xl font-semibold text-gray-900">
              Grow Your Business
            </h3>
            <p className="text-sm text-gray-700 md:text-base">
              Exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between space-y-6 md:flex-row md:items-center md:space-x-6 md:space-y-0">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-500 p-5 transition duration-300 hover:bg-green-600 md:mx-0 md:mb-0">
            <Award className="h-10 w-10 text-white" />
          </div>
          <div className="text-center md:ml-6 md:text-left">
            <h3 className="mb-2 text-2xl font-semibold text-gray-900">
              Award Winning
            </h3>
            <p className="text-sm text-gray-700 md:text-base">
              Exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit. Amet nostrud
              consequat adipisicing excepteur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
