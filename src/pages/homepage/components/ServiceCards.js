import React from 'react'
import CardImg1 from '../../../assets/images/home/service_card_oe.jpg'
import CardImg2 from '../../../assets/images/home/service_card_two.jpg'



import CardWidgets from '../../../global/components/CardWidgets'
export default function ServiceCards() {
  return (
    <div className='ourService page_width'>
        
        <div className="card_grid ">
            <CardWidgets Img = {CardImg1} cardTitle = 'AC Duct' />
            <CardWidgets Img = {CardImg2} cardTitle = 'AC Cleaning' />
        </div>
    </div>
  )
}
