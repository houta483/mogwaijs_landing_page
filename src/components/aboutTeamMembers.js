import React from "react"

class aboutTeamMembers extends React.Component {
  constructor(props) {
   super(props);
    
  }
  render() {
    return (
      <div className='member'>
        <p className='name'>{this.props.name}</p>
          <div className="biopic">
          <p className='bio'>{this.props.bio}​</p>
          <img src={this.props.picture}/>
          </div>
        <a className = 'linkedIn' href={this.props.linkedIn}> LinkedIn </a> 
       
      </div>
    )
  }
}

export default aboutTeamMembers;
