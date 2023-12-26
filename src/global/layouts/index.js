import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../../style/header.css'
import '../../style/footer.css'

export default function Layout({children}) {
  return (
    <>
        <Header/>
            {children}
        <Footer/>

    </>
  )
}
