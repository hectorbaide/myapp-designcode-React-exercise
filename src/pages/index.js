import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>I think I understand how this works...</h1>
        <p>Wuuuut?</p>
        <p>So this is react?!? I wanna have a bit more text so we can see how stuff works eeeeh??</p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
