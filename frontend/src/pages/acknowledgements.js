import * as React from "react"

import Layout from "../components/Layout"

import explanation1 from "../images/explanation-1.png"
import explanation2 from "../images/explanation-2.png"
import explanation3 from "../images/explanation-3.png"
import explanationScenarios from "../images/explanation-scenarios.png"
import explanationMap from "../images/explanation-map.png"

const Acknowledgements = () => (
  <Layout>
    <div className="max-w-6xl mx-auto text-justify">
      <h1 className="md:text-4xl text-3xl font-bold my-4 md:my-8 py-2 border-b-2">
        Project explanations
      </h1>

      <div className="grid md:grid-cols-2 gap-4 items-end">
        <img
          className="flex w-full"
          src={explanation1}
          alt="explanation"
        />
        <img
          className="flex w-full"
          src={explanationScenarios}
          alt="explanation"
        />
      </div>
      

      <h1 className="md:text-3xl text-2xl font-bold pt-8 pb-2">
        About the project
      </h1>

      <p>
      Understanding the crowding phenomenon at open, confined and  semi-confined spaces during operational hours, is highly consequential for informed trip scheduling and more efficient management of such sites subject to crowd traffic in an institutional setting such as Katsura Campus. In this study, our main objective is to utilize Wi-Fi sensor data to predict crowding at the Main Student Cafeteria (Cafeteria Selene) at Katsura Campus during the Lunch break operational period (11:00 AM - 2:00 PM). The purpose of this Experiment is to enhance a better understanding of the crowding phenomenon at the Cafeteria and to assess the value of the crowd forecast information prior to trip scheduling. Some of the expected project outcomes include but are not limited to shorter waiting times manifesting through shorter queue lengths and an overall better end user experience. Additional crowd traffic information during both the designated and undesignated operational hours at other access points (other locations), within Katsura Campus has been provided with brief location descriptions and useful links information to encapsulate what is now referred to as “Katsura Campus Wi-Fi Times”.  
      </p>

      <h1 className="md:text-3xl text-2xl font-bold pt-8 pb-2">
        Sensors map
      </h1>
      <img
        className="flex w-full p-4"
        src={explanationMap}
        alt="explanation"
      />

      <h1 className="md:text-3xl text-2xl font-bold pt-8 pb-2">
        About Wi-Fi packet sensors and Wi-Fi sensor data
      </h1>

      <p>
        Wi-Fi sensors are relatively small, low-cost, low power devices integrated with a dual set of Wi-Fi sniffers, built upon the Raspberry Pi Model B with an additional Wi-Fi USB dongle for passive collection of Bluetooth and Wi-Fi probe requests spontaneously emitted by Wi-Fi configurable devices such as Smartphones within the influence area of the Wi-Fi packet sensor. Preliminary raw data handling involves the re-configuration of the identities of the captured devices by replacing their original MAC(Media Access Control) addresses with anonymized identifiers (AMACs) consisting of unique arrays of number-letter combinations. The processed probe request records are then uploaded through the long term evolution(LTE) connection to the central server. Each record contains the; Unix Time, Timestamp, Anonymized Media Access Control (AMAC), Bluetooth Signal Parameter(SC), Received Signal Strength Indicator (RSSI), Organizational User Identifier (OUI) and the Unique Access point identifier (AMPID). These records are then retrieved locally and further preprocessed by aggregating the AMAC counts for different time intervals prior to analyzing various aspects of the “crowd” such as presence, movement and density.
      </p>

      <h1 className="md:text-3xl text-2xl font-bold pt-8 pb-2">
        About the graphical display interface
      </h1>

      <p>
        Although the Graphical display interfaces differ, see illustrations below i.e., “Cafeteria Sensors in 15 Minute Intervals” (11:00AM – 2:00PM) and “Other locations sensors in Hourly intervals” (6:00AM – 5:00PM), Both operate upon the same principle as here explained. For any location on the drop down menu, The bar graph shows the relative “busyness” of the location at a particular time on a typical day of the week, based on the average Wi-Fi crowd traffic historical data in Navy Blue (Historical data) of the same (Lecture) day of the week over the past month. If the CURRENT TIME is within the specified range, then the current bar will be highlighted in Light grey (Live Historical data) with  an overlay of the live Wi-Fi crowd traffic count (Live data) in Cyan Blue showing how active the location is as compared to its regular Wi-Fi crowd count at that particular time. The peak times during the day are clearly visible from the graphical display  and a brief description of the live status for each specific time interval is returned such as; “As Busy as Usual”, “Busier than Usual”, “Less Busier than Usual” , “Much Busier than Usual” or “Much less Busier than Usual” as shown in by the Scenarios in the illustrations below.
      </p>

      <div className="grid md:grid-cols-2 gap-4 items-end">
        <img
          className="flex w-full md:py-16"
          src={explanation2}
          alt="explanation"
        />
        <img
          className="flex w-full md:py-16"
          src={explanation3}
          alt="explanation"
        />
      </div>

<h1 className="md:text-4xl text-3xl font-bold my-4 md:my-8 py-2 border-b-2">
        Acknowledgements
      </h1>
      <div className="grid gap-4">
        <p>
        (日本語) 本プロジェクトは、桂キャンパス実証研究促進ファンドの助成を受けたものです。ここに感謝の意を表します。また、株式会社社会システム総合研究所には、WiFiセンサーの運用にあたり、様々なサポートをいただきました。心より感謝申し上げます。
        </p>

        <ul>
          <li>
          株式会社社会システム総合研究所：https://www.jriss.jp/
          </li>
          <li>
          本プロジェクト動画：https://www.youtube.com/watch?v=5fvl1YeWqZE
          </li>
          <li>
          問い合わせメールアドレス：its-katsura-wifi@trans.kuciv.kyoto-u.ac.jp
          </li>
        </ul>

        <p className="mt-12">
        (English)
        This project was funded by ”Katsura Campus Empirical Research Promotion Fund".  We wish to express our deep appreciation for the financial support. We would also like to thank JRISS (Japan Research Institute for Social Systems) for their support in operating the Wi-Fi sensors. 
        </p>

        <ul>
          <li>
          JRISS: https://www.jriss.jp/
          </li>
          <li>
          Project movie: https://www.youtube.com/watch?v=5fvl1YeWqZE
          </li>
          <li>
          Contact e-mail for questions or comments: its-katsura-wifi@trans.kuciv.kyoto-u.ac.jp
          </li>
        </ul>
      </div>
    </div>
    
  </Layout>
)

export default Acknowledgements
