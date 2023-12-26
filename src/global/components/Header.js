import React from 'react'
import Logo from '../../assets/images/logo/logo.svg'

export default function Header() {
  return (

        <header>
            <div className="logo_img " id="">
                <img src= {Logo} alt=""/>
            </div>
            <nav>
                <ul>
                    <li>
                        Home
                    </li>
                    <li className="dropdown">
                        Service
                            <div className="dropdown_menu">
                                <a className="dropdown_item" href="AC">AC Services</a>
                                <a className="dropdown_item" href="AC">Dust Cleaning</a>
                                <a className="dropdown_item" href="AC">Handyman</a>
                                <a className="dropdown_item" href="AC">Plumbing</a>
                                <a className="dropdown_item" href="AC">Electrical</a>
                            </div>
                    </li>
                    <li>
                        Contact
                    </li>
                    <li className="header_btn">
                        +8980003809343
                    </li>
                </ul>
            </nav>
         </header>
      

  )
}
