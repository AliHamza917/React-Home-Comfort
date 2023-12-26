import React from 'react'
import WhoIamImg from '../../../assets/images/home/who_img.jpg'

export default function WhoWeAreBanner() {
  return (
    <>
        <section className="who_we_are_banner page_width">
            <div className="who_we_are_img">
                <img src= {WhoIamImg} alt='' />
            </div>

            <div className="who_we_are_txt">
                <h1>Who we <b>Are?</b></h1>
                <p>
                    Home Comfort is a leading multiple service provider company catering to your 360 needs with quality guaranteed. The aim and priority of Home Comfort are to add value to our consumers’ lives by providing smart solutions to all their problems. Our pride is providing the most extensive range of services. From home maintenance to personal assistance.

                </p><br/>
                <p>
                    We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction. Our goal is to become the largest and most famous online home services platform and provide our customers with the best of services and experience. Our experts will give you the most satisfying experience and professionalism. On your demand, all of our best home maintenance and renovation services are available at the very right time and place.
                </p>
            </div>
            
        
        </section><br/><br/><br/>
      
    </>
  )
}
