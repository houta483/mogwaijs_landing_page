import React from 'react';

import { Link } from "gatsby"

export default({pathname}) => {
  return (
    <div className="lists-link">

          {pathname === '/documentation' ? null : <Link className="link" to="/documentation">Documentation</Link>}
          {pathname === '/aboutUs' ? null : <Link className="link" to="/aboutUs">About Us</Link>}
          {pathname === '/' ? null :   <Link className="link" to="/">Home</Link>}
          
        
    </div>
  )
}

