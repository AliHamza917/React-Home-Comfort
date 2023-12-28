import React from 'react'


export default function CardWidgets(props) {
  return (
    <div className="service_card">
                <img src= {props.Img} alt='' width='100%' />
                <div className="overlay">
                    <div className="content">
                        <h2>{props.cardTitle}</h2>
                        <button>Book Me</button>
                    </div>
                </div>
            </div>
    
  )
}
