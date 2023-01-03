import React, { useEffect, useState } from "react";

import Layout from "./Layout"
import DisplayChart from "./DisplayChart"

const App = () => {
  return (
    <Layout>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.6.0/Chart.min.js"></script>
      <div className="grid grid-cols-1 md:grid-cols-5 p-4 md:py-24 md:px-8 gap-2 md:gap-16 lg:gap-24 items-end">
        <div className="col-span-5 relative grid grid-cols-1 p-4 gap-2 content-start">
          <DisplayChart/>
          <div className="flex">
            <button className="bg-primary hover:bg-gray-600 text-white text-sm sm:text-md font-medium py-2 px-4 rounded-lg">
              <a to="https://west2-univ.jp/sp/index.php?t=650120">Today's menu →</a>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;