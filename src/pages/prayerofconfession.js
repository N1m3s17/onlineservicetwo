import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const PrayerOfConfession = () => (
  <div>
    <SEO title="Page two" />
    <h1>Prayer of Confession</h1>
    <ul>
      <li>One: Sometimes,</li>
      <li>All: I think I have all the answers.</li>
      <li>One: Sometimes,</li>
      <li>All: I ignore feelings of unease.</li>
      <li>One: Sometimes,</li>
      <li>I forget that you are active in my life, my calling purpose.</li>
      <li>One: Sometimes,</li>
      <li>
        All: I don't want to listen, I don't want to act, I don't want to serve.
      </li>
      <li>One: Forgive us for these times.</li>
      <li>
        All: Help us to respond to all that we are, all that you have made us,
        with love, with abundance, with care.
      </li>
    </ul>
    <Link to="/prayerofpardon">Prayer of Pardon</Link>
  </div>
)

export default PrayerOfConfession
