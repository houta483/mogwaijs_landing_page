import React from "react"
import Layout from "../components/layout"

export default ({location}) => (
  <Layout location={location}>
   <div className="image-explanation-div">
     <div>
     <h1 className='image-heading'>Cypher, Cloud Hosted Databases, Javascript</h1>
     <p className="information">MogwaiJS brings to life an intuitive OGM, keeping
       in mind the declarative nature of the Cypher query language.
       With the ever-increasing popularity of graph databses,
       MogwaiJS makes the process of querying graph Databases
       even simpler in Javascript environments. <i className="arrow right"></i>
     </p>

     </div>
     <div className="logo-image">
     <img className="image" src="logo.png"></img>
     </div>
     </div>
   <div className="video-explanation-div">

     
     <iframe src="https://giphy.com/embed/xT9IgzoKnwFNmISR8I" frameBorder="0" class="giphy-embed" allowFullScreen ></iframe>
    <div className="giphy-info">

     <iframe src="https://giphy.com/embed/xT9IgzoKnwFNmISR8I" width="480" height="429" frameBorder="0" class="giphy-embed" allowFullScreen ></iframe>
     <p className="information2">MogwaiJS brings to life an intuitive OGM, keeping
       in mind the declarative nature of the Cypher query language.
       With the ever-increasing popularity of graph databses,
       MogwaiJS makes the process of querying graph Databases
       even simpler in Javascript environments. <br></br><i className="arrow left"></i></p>

       </div>
     </div>
  </Layout>
)