import React, { useState } from "react"
import DropDownMenu from "./dropdownMenu.js"




export default ( props ) => {
  const [isModalOpen, setModalOpen] = useState(false);
  // const [currentSelection, setCurrentSelection] = useState(null);
  console.log(props)

  const handleMenuClick = () => {
    setModalOpen(isModalOpen ? false : true)
  }

  return (
    <div style={{ padding: `0 1rem`, paddingBottom: "0" }}>
      <div className="header" style={{ marginBottom: `1.5rem` }}>
        <h3 style={{ marginBottom: "0", paddingTop: "1.8rem" }}>MogwaiJS</h3>

        <div>
          <i onClick={handleMenuClick} id="hamburger-menu" className="material-icons">
            menu
          </i>
          {isModalOpen ? <DropDownMenu pathname={props.location.pathname}/> : null}
        </div>
      </div>

      {props.children}
    </div>
  )
}
