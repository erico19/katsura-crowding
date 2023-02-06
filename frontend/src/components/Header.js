import * as React from "react"
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import kyodaiLogo from "../images/kyodai-logo.svg"

const Header = () => {
  const { languages, originalPath, i18n } = useI18next();
  return (
    <div>    
      <div className="p-4 md:p-8 bg-primary">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <img
            className="flex w-16 md:w-18"
            src={kyodaiLogo}
            alt="Logo"
          />
          <Link to="/">
            <h1 className="flex text-white text-center text-xl md:text-3xl font-bold">Katsura Campus Wi-Fi Times</h1>   
          </Link>
        </div>
        
      </div>
      <div className="px-4 md:px-8 bg-gray-200">
        <ul className="languages flex gap-2 justify-end max-w-6xl mx-auto">
          {languages.map((lng) => (
            <li key={lng}>
              <Link to={originalPath} language={lng} style={{ textDecoration: i18n.resolvedLanguage === lng ? 'underline' : 'none' }}>
                {lng}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Header
