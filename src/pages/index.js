import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <h1>Welcome to Martingrove United Church Online Service!</h1>
    <Link to="/page-2">Lets Begin!</Link>
  </div>
)

export default IndexPage
