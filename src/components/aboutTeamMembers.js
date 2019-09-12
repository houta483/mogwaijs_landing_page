import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


class aboutTeamMembers extends React.Component {
  constructor(props) {
   super(props);
    
  }
  render() {
    return (
      
      <div className='member'>
        <div className="cards">
         <div>
        <div className = "bio-block">
          
          <div className="picture-block">
         <img className="biopictures" src={this.props.picture}/>
         <div className="icon-and-name">
         <a className = 'linkedIn' href={this.props.linkedIn}><FontAwesomeIcon icon={faLinkedin}/></a> 
        <a className = 'github' href={this.props.linkedIn}><FontAwesomeIcon icon={faGithub}/></a> 
         <p className='name'>{this.props.name}</p>
         </div>
         {/* <div className="icon-and-name"> */}
        
     
        {/* </div> */}
        </div>
    
        
        </div>
          <p className='bio'>{this.props.bio}​</p>
         
     
          </div>
        </div>
      </div>
     
    )
  }
}

export default aboutTeamMembers;
