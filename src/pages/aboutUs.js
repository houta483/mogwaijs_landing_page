import React from "react"
import Layout from "../components/layout"
import AboutTeamMembers from "../components/aboutTeamMembers"

export default () => (
  <Layout>
    <h1>About Us</h1>
    <b>The MogwaiJS Team</b>
    <ul>
      <li>
        <AboutTeamMembers />
      </li>
      <li>Neftali Dominguez</li>
      <li>Tanner Houghton</li>
      <li>Taylor Burrington</li>
    </ul>
  </Layout>
)