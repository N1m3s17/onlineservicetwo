import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import { ResponsivePlayer } from "../components/ResponsivePlayer"

const sermon = () => {
  return (
    <div>
      <SEO title="Sermon" />
      <h1>While you are youngg</h1>
      <ResponsivePlayer url="" />
      <Link to="/announcements">Announcements</Link>
    </div>
  )
}

export default sermon
