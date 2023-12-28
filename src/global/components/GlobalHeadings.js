import React from 'react'


export default function GlobalHeadings(props) {
  return (
    <div className='global_heading page_width'>
        <h1> {props.txt} <b>{props.boldtxt}</b></h1><br></br>
        {/* <h1>Explore our <b>Services</b></h1><br></br>   */}
    </div>
  )
}
