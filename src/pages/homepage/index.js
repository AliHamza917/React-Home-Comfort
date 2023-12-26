import React from 'react'
import OurServiceBanner from './components/OurServiceBanner'
import '../../style/our_service_banner.css'
import '../../style/who_we_are.css'
import '../../style/company_authority_banner.css'
import '../../style/quick_service_banner.css'
import WhoWeAreBanner from './components/WhoWeAreBanner'
import CompanyAuthBanner from './components/CompanyAuthBanner'
import QuickServiceBanner from './components/QuickServiceBanner'

export default function HomePage() {
  return (
    <>
        <OurServiceBanner/>
        <WhoWeAreBanner/>
        <CompanyAuthBanner/>
        <QuickServiceBanner/>
    </>
  )
}
