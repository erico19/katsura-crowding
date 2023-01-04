import * as React from "react"
import { Link } from "gatsby"
import kyodaiLogo from "/src/images/kyodai-logo.svg"

const Header = () => (
  <div>    
    <div className="p-4 md:p-8 bg-primary">
      <div className="max-w-6xl mx-auto flex justify-center items-center">
        <img
          className="flex w-16"
          src={kyodaiLogo}
          alt="Logo"
        />
        <Link to="/">
          <h1 style={{fontFamily: "Helvetica", fontSize: "32px", fontWeight: "bold"}} className="flex text-white text-center">Katsura Main Student Cafeteria</h1>   
        </Link>
      </div>
    </div>
  </div>
)

export default Header
