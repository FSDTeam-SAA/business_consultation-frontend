import OurServices from '@/components/ourServices/OurServices'
import PageHero from '@/components/page-hero'
import React from 'react'

const page = ({params}: {params: {slug: string}}) => {
  return (
    <div>
       <PageHero
              title="Our Services"
              breadcrumb="Our Services"
              currentRoute="service"
            />

            <OurServices activeTab={params.slug} />
    </div>
  )
}

export default page
