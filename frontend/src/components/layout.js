import * as React from "react"
import Header from "/src/components/Header.js"
import Footer from "/src/components/Footer.js"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
