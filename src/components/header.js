import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import kyodaiLogo from "/src/images/kyodai-logo.svg"

const Header = ({ siteTitle }) => (
  <div>    
    <div className="p-4 bg-primary">
      <div className="flex justify-between items-center">
        <img
          className="flex w-16"
          src={kyodaiLogo}
          alt="Logo"
        />
        <h1 className="flex text-white text-2xl font-bold">Katsura Cafeteria</h1>
      </div>
    </div>
  </div>
)

export default Header
