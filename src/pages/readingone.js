import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const readingone = () => {
  return (
    <div>
      <SEO title="Reading One" />
      <h1>Ecclesiastes</h1>
      <Link to="/readingtwo">Readings from Scripture Two: Luke 12:31</Link>
    </div>
  )
}

export default readingone
