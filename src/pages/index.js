import React from "react"
import Layout from "../components/layout"

export default ({location}) => (
  <Layout location={location}>
   <div class="image-explanation-div">
     <div>
     <h1 class='image-heading'>Cypher, Cloud Hosted Databases, Javascript</h1>
     <p class="information">MogwaiJS brings to life an intuitive OGM, keeping
       in mind the declarative nature of the Cypher query language.
       With the ever-increasing popularity of graph databses,
       MogwaiJS makes the process of querying graph Databases
       even simpler in Javascript environments. <i class="arrow right"></i>
     </p>

     </div>
     <div class="logo-image">
     <img class="image" src="logo.png"></img>
     </div>
     </div>
   <div class="video-explanation-div">
     <iframe src="https://giphy.com/embed/xT9IgzoKnwFNmISR8I" width="480" height="429" frameBorder="0" class="giphy-embed" allowFullScreen ></iframe>
     <p class="information2">MogwaiJS brings to life an intuitive OGM, keeping
       in mind the declarative nature of the Cypher query language.
       With the ever-increasing popularity of graph databses,
       MogwaiJS makes the process of querying graph Databases
       even simpler in Javascript environments. <br></br><i class="arrow left"></i></p>
     </div>
  </Layout>
)