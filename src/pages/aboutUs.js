import React, { useState } from "react"
import Layout from "../components/layout"
import Style from "../styles/style.css"
import AboutTeamMembers from "../components/aboutTeamMembers"
import aboutUsData from "../../static/aboutUsData"

export default props => {
  const [memberData] = useState(aboutUsData)

  const membersArray = []

  for (let i = 0; i < 4; i++) {
    membersArray.push(
      <AboutTeamMembers
        name={memberData.memberNames[i]}
        bio={memberData.memberBios[i]}
        picture={memberData.pictures[i]}
        linkedIn={memberData.linkedIn[i]}
        gitHub={memberData.gitHub[i]}
        key={i}
      />
    )
  }

  return (
    <Layout location={props.location}>
      <div className="aboutUs-heading">
      <h1 className="aboutUs">About Us</h1>
      <h5 className="subheading">The MogwaiJS Team</h5>
      </div>
      <div className="form">{membersArray}</div>
    </Layout>
  )
}
