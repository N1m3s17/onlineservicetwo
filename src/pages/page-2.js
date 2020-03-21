import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const SecondPage = () => (
  <div>
    <SEO title="Page two" />
    <h1>CALL TO WORSHIP</h1>
    <ul>
      <li>One: People of God, hear the Lord's call</li>
      <li>
        All: To worship, serve, pray, share gifts, and proclaim the good news.
      </li>
      <li>One: We hear the Lord's call to ministry, and we try to follow</li>
      <li>
        All: But the temptations of material gain, fame, and power are so strong
        and attractive, we go astray.
      </li>
      <li>One: If we ask, God will give us the Holy Spirit</li>
      <li>
        All: To remain faithful and to overcome the most powerful and attractive
        temptations
      </li>
      <li>One: Come, Holy Spirit, fill our hearts with your fire and power</li>
      <li>All: And bind us to God's love for faithful discipleship.</li>
    </ul>
    <Link to="/songone">Song: Lord! I need you</Link>
  </div>
)

export default SecondPage
