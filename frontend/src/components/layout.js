/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import Header from "/src/components/Header.js"
import Footer from "/src/components/Footer.js"

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle={`Title`} />
      <div className="container mx-auto">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
