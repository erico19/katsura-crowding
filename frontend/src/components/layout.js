import * as React from "react"
import Header from "/src/components/Header.js"
import Footer from "/src/components/Footer.js"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
