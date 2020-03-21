import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const readingtwo = () => {
  return (
    <div>
      <SEO title="Reading Two" />
      <h1>Luke 12:31</h1>
      <p>
        "But seek his kingdom, and these things will be given to you as well."
      </p>
      <Link to="/sermon">Sermon: "While you are young"</Link>
    </div>
  )
}

export default readingtwo
