import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import CrowdChart from '../components/CrowdChart';
import TrendChart from '../components/TrendChart';

import Layout from "../components/layout"
import Seo from "../components/seo"

import LiveIcon from "../images/live-icon.svg"
import Exclamation from "../images/Exclamation.svg"

const IndexPage = () => (
  <Layout>
    <div className="grid grid-cols-1 p-4 gap-2">
      <div className="px-8 py-16">
        <CrowdChart />
      </div>
      <div className="flex gap-1 p-2 bg-yellow-200 rounded-lg items-center">
        <img
          className="inline h-4"
          src={Exclamation}
          alt="Exclamation"
        />
        <p className="text-xs text-gray-800 font-medium">Expected to be less crowded in 30 minutes</p>
        
      </div>

      <div className="p-4 bg-gray-100 rounded-lg">
        <h2 className="text-md text-gray-500 font-medium">Monday, October 31st 2022</h2>
        <TrendChart />
        <div className="flex gap-1 items-center">
          <img
            className="inline h-3"
            src={LiveIcon}
            alt="Live"
          />
          <span className="text-sm text-gray-800 font medium">Busier than usual</span>
        </div>
      </div>
      <div>
        <button className="bg-primary hover:bg-gray-600 text-white text-sm sm:text-md font-medium py-2 px-4 rounded-lg">
          <Link to="/blog">Today's menu →</Link>
        </button>
      </div>
      
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
