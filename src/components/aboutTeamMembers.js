import React from "react";
import styles from "../styles/global.css"
import { Link } from 'gatsby';

class aboutTeamMembers extends React.Component {
  constructor(props) {
   super(props) ;
   this.state = {
     name: 'Tanner',
     picture: 'insert pic here',
   }
  }
  render() {
    return (
      <div className='name'>
        My name is {this.state.name}
      </div>
    )
  }
}

export default aboutTeamMembers;
