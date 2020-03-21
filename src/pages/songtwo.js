import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Songtwo from "../assets/amazinggrace.mp4"
import { ResponsivePlayer } from "../components/ResponsivePlayer"

const SongTwo = () => (
  <div>
    <SEO title="Song two" />
    <h1>"Amazing Grace"</h1>
    <ResponsivePlayer url={Songtwo} />
    <Link to="/readingone">
      Reading from the Scripture one: Ecclesiastes 17: 7 - 12:1
    </Link>
  </div>
)

export default SongTwo
