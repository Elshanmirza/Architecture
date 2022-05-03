import React from 'react'
import { ScrollToTop } from 'react-to-top'

const Home = () => {
  return (
    <div id='home'>
      <div className="home-wrapper">
        <div className="main">
          <h1>Architecture & <br />Interior Design</h1>
          <p>Architecture is both the process and the product of planning,<br /> designing, and constructing buildings or other structures.</p>
          <a href="#">DISCOVER NOW</a>
        </div>
      </div>
      <ScrollToTop bgColor='orange' />
    </div>
  )
}

export default Home