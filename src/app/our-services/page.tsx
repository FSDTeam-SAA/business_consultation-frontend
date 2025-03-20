import OurServices from '@/components/ourServices/OurServices'
import PageHero from '@/components/page-hero'
import React from 'react'

const page = () => {
  return (
    <div>
       <PageHero
              title="Our Services"
              breadcrumb="Our Services"
              currentRoute="service"
            />

            <OurServices/>
    </div>
  )
}

export default page
