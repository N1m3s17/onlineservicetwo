import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Songone from "../assets/lordineedyou.mp4"
import { ResponsivePlayer } from "../components/ResponsivePlayer"

const SongOne = () => (
  <div>
    <SEO title="Song One" />
    <h1>"Lord, I need you"</h1>
    <ResponsivePlayer url={Songone} />
    <Link to="/prayerofconfession">Prayer of Confession</Link>
  </div>
)

export default SongOne
