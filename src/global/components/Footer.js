import React from 'react'
import Logo from '../../assets/images/logo/logo.svg'

export default function Footer() {
  return (
    <>
           <footer class="page_width">
        <div class="coloumn_one">
            <img src= {Logo} alt='' />
            <p>We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction.</p>
        </div>
        <div class="coloumn_two">
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div class="coloum_three">

            <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Linkedin</li>
                <li>Instagram</li>
            </ul>
        </div>
        <div class="coloumn_four">
            <ul>
                <li>
                    +92 123456789
                </li>
                <li>
                    alihamza917h@gmail.com
                </li>
            </ul>
            <div class="news_letter">
                <input type="text" placeholder="Enter Email"/>
                <button>send</button>
            </div>
        </div>
    </footer>
    <div class="copy_right_txt">
        @Copyrights reserved by HomeComfort
    </div>
      
    </>
  )
}
