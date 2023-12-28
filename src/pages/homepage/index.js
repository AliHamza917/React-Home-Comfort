import React from 'react'
import OurServiceBanner from './components/OurServiceBanner'
import GlobalHeadings from '../../global/components/GlobalHeadings'
import '../../style/our_service_banner.css'
import '../../style/who_we_are.css'
import '../../style/company_authority_banner.css'
import '../../style/quick_service_banner.css'
import '../../style/global_title.css'
import '../../style/service_card.css'
import WhoWeAreBanner from './components/WhoWeAreBanner'
import CompanyAuthBanner from './components/CompanyAuthBanner'
import QuickServiceBanner from './components/QuickServiceBanner'
import ServiceCards from './components/ServiceCards'


export default function HomePage() {
  return (
    <>
        <OurServiceBanner/>
        <GlobalHeadings txt ='Explore our' boldtxt = 'Services' />
        <ServiceCards />
        <WhoWeAreBanner/>
        <CompanyAuthBanner/>
        <QuickServiceBanner/>
    </>
  )
}
