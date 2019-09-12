import React from "react"
import Layout from "../components/layout"
import Style from "../styles/style.css"
import AboutTeamMembers from "../components/aboutTeamMembers"
import aboutUsData from "../../static/aboutUsData"

export default class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memberNames: aboutUsData.memberNames,
      memberBios: aboutUsData.memberBios,
      pictures: aboutUsData.pictures,
      linkedIn: aboutUsData.linkedIn
    }
  }

render() {
  // for loop
  return (
    <Layout>
      <h1 className="aboutUs">About Us</h1>
      <b>The MogwaiJS Team</b>
      <div className ="form">

        <AboutTeamMembers 
        name = {this.state.memberNames[0]}
        bio = {this.state.memberBios[0]}
        picture = {this.state.pictures[0]}
        linkedIn = {this.state.linkedIn[0]}
        />

        <AboutTeamMembers 
        name = {this.state.memberNames[1]}
        bio = {this.state.memberBios[1]}
        picture = {this.state.pictures[1]}
        linkedIn = {this.state.linkedIn[1]}
        />

        <AboutTeamMembers 
        name = {this.state.memberNames[2]}
        bio = {this.state.memberBios[2]}
        picture = {this.state.pictures[2]}
        linkedIn = {this.state.linkedIn[2]}
        />

        <AboutTeamMembers 
        name = {this.state.memberNames[3]}
        bio = {this.state.memberBios[3]}
        picture = {this.state.pictures[3]}
        linkedIn = {this.state.linkedIn[3]}
        />

      </div>
    </Layout>
      )
  }
}