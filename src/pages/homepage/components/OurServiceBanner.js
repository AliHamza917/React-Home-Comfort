import React from 'react'
import BannerImage from '../../../assets/images/home/banner/banner.svg'
import Icon1 from '../../../assets/images//icons/noun-twenty-four-hours-1239181.png'
import Icon2 from '../../../assets/images/icons/noun-price.png'
import Icon3 from '../../../assets/images/icons/noun-team.png'

export default function OurServiceBanner() {
  return (
    <>

         <section className="banner_section">
        <div className="page_width">
            <div className="banner_inner_section">
                <div className="banner_content">
                    <small>Best in Dubai</small>
                    <p className="intro">Welcome To</p>
                    <h2>Home <span>Comfort</span></h2>
                    <p className="description">
                        Home Comfort provides home repair services in Dubai with reasonable rates. We fix it right with
                        home comfort professional experts.
                    </p>
                    <div className="banner_button">
                        <button className="btn btn_1">Contact US</button>
                        <button className="btn btn_2">Learn More</button>
                    </div>
                </div>
                <div className="banner_img">
                    <img src= {BannerImage} alt="" />
                </div>
            </div>
        </div>
         </section>
    
         <section className="circle_banner page_width">
        <div className="circle_banner_eclips">
            <div className="circle_banner_img" ><img src={Icon1} alt='' /></div>
            <div className="circle_banner_txt">24/7 Service</div>
        </div>

        <div className="circle_banner_eclips">
            <div className="circle_banner_img" ><img src={Icon2} alt=''/></div>
            <div className="circle_banner_txt">Reasonable Rates</div>
        </div>

        <div className="circle_banner_eclips">
            <div className="circle_banner_img" ><img src= {Icon3} alt='' /></div>
            <div className="circle_banner_txt">Experienced Team</div>
        </div>
        
        </section>
      
    </>
  )
}
