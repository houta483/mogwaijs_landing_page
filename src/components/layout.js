import React, { useState } from "react"
import DropDownMenu from "./dropdownMenu.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'




export default ( props ) => {
  const [isModalOpen, setModalOpen] = useState(false);
  // const [currentSelection, setCurrentSelection] = useState(null);
  console.log(props)

  const handleMenuClick = () => {
    setModalOpen(isModalOpen ? false : true)
  }

  return (
    <div style={{ padding: `0 1rem`, paddingBottom: "0" }}>
      <div className="header">
        <h3 style={{ marginBottom: "0", paddingTop: "1.8rem" }}>MogwaiJS</h3>

        <div>
          <a href="https://github.com/oslabs-beta/mogwaijs">
            <FontAwesomeIcon id="github-icon" icon={faGithub}/>
          </a>
          <i onClick={handleMenuClick} id="hamburger-menu" className="material-icons">
            menu
          </i>
          {isModalOpen ? <DropDownMenu pathname={props.location.pathname}/> : null}
        </div>
      </div>

      <div className="main-content">
      {props.children}
      </div>
  
    </div>
  )
}
