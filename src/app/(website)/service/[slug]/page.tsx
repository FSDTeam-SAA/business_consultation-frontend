// import { Award, BarChart2, DollarSign } from "lucide-react";
import OurServices from '@/components/ourServices/OurServices'
import PageHero from '@/components/page-hero'
import React from 'react'

const page = ({params}: {params: {slug: string}}) => {
  return (
    <div className='mb-10'>
       <PageHero
              title="Our Services"
              breadcrumb="Our Services"
              currentRoute="service"
            />

            <OurServices activeTab={params.slug} />
        

     {/* card  */}
     {/* <div className="container py-16 mx-auto grid grid-cols-1 gap-8  md:grid-cols-3">
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
      </div> */}
        
     
    </div>
  )
}

export default page
