import * as React from "react"
import { Link } from "gatsby"
import itslablogo from "../images/its-lab-logo.png"

const Footer = () => {
  return (
    <body className="relative bg-white max-w-6xl mx-auto mt-32">
      <main className="grid gap-2 text-sm sm:text-base p-4 md:px-0 border-t-2 mx-auto">
        <div className="flex">
          <img
            className="flex h-10 md:h-16"
            src={itslablogo}
            alt="Logo"
          />
        </div>
        <div className="text-xs md:text-base">
          <p className="">Katsura Campus Crowding Research by ITS Lab, Kyoto University. </p>
          <div className="flex gap-2">
            <p className="">© {new Date().getFullYear()} ITS Lab.</p>
            <Link 
              to="/acknowledgements" 
              className="text-primary"
              style={{
                backgroundImage: 'linear-gradient(90deg, #66E1FF, #66E1FF)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% .25em',
                backgroundPosition: '0 70%',
                textDecoration: 'none',
              }}>
              Project explanation and acknowledgements.
            </Link>
          </div>
        </div>
      </main>
    </body>
  )
}

export default Footer
