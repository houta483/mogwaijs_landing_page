import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

class aboutTeamMembers extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="cards">
        <div className="card-div">
          <div className="bio-block">
            <div className="picture-block">
              <img
                className="biopictures"
                src={this.props.picture}
                alt="pictures of team members"
              />
              <div className="icon-and-name">
                <a className="linkedIn" href={this.props.linkedIn}>
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a className="github" href={this.props.gitHub}>
                  <FontAwesomeIcon icon={faGithub} />
                </a>

                <p className="name">{this.props.name}</p>
              </div>
            </div>
          </div>
          <p className="bio">{this.props.bio}​</p>
        </div>
      </div>
    )
  }
}

export default aboutTeamMembers
