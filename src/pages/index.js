import React from "react"
import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default ({ location }) => (
  // <Layout location={location}>
  <div>
    <header className="header"><h3 id="main-heading">Taylor Burrington</h3></header>
    <div className="image-explanation-div">
      <div className="left-side-column">
        <h1 className="image-heading">A little about me...</h1>
        <p className="information">
          Software Engineer by day and cat-dad by night. I'm also an avid
          hobbyist. I roast coffee on the weekends, trek out for the occasional
          birding adventure, and am always up to try some new, craft beer.
        </p>
        <p className="information" id="bottom-paragraph">
          I'm passionate about appealing and intuitive web applications, finding
          my best work in the space where design meets optimization.
        </p>
        
        <i className="arrow right"></i>
        <a href="https://github.com/Tburrington">
            <FontAwesomeIcon className="left-github-icon" id="github-icon1" icon={faGithub}/>
          </a>
      </div>
    
        <div className="logo-image">
          <img src="mainimage.JPG" alt="mogwai logo" />
        </div>
 
    </div>
    
    <div className="video-explanation-div">
    
      <img
        alt="gif showing graph database queries"
        src="logo.png"
        id="mogwai"
      />
   
      <div id="information2-div">
      <h3 className="right-column-heading">Current Work</h3>
        <p className="information2">
          Using the Gremlin Query Language under the hood, a team of engineers and myself
          created MogwaiJS which seeks to eliminate a lot of the verbosity and overhead
          present with more imperative query languages like Gremlin.
          </p>
          <br></br>
          <p className="information2">
           Available in
          a simple NPM package, the full capabilites of this Object-Graph-Mapper
          can be easily integrated into your project and used on a number of
          cloud hosted databases. The work for Mogwai is ongoing. Check out our
          github to see how you can contribute to this open source work.
          <br></br>
          <a href="https://github.com/oslabs-beta/mogwaijs">
            <FontAwesomeIcon className="right-icon" id="github-icon2" icon={faGithub}/>
          </a><i className="arrow left"></i>
        </p>
      </div>
    </div>
    <div className="image-explanation-div">
      <div>
        <h1 className="image-heading">Open Source Projects</h1>
        <p className="information">
          I've also done quite a bit of work with the broader open-source community.
          Some of my most recent projects include an application which allows the user to locate
          vegan restaurants in the Los Angeles area. 
        </p>
        <p className="information" id="bottom-paragraph">
          Using a combination of React, Node, Mapbox, Postgres, and a little Python for the elasticsearch,
          my fellow engineers and I were able to create a fun, intuitive web application.
        </p>
        <i className="arrow right"></i><a href="https://github.com/team-animalfarm/VY">
            <FontAwesomeIcon className="left-github-icon" id="github-icon3" icon={faGithub}/>
          </a>
      </div>
    
       
          <img src="homepage.png" alt="plantfare LA homepage" id="plantFare" />
          {/* <img src="morehomepage.png" alt="plantfare LA dropdown"/> */}
   
 
    </div>
    <div className="video-explanation-div" id="final-div">
    
      <img
        alt="gif showing graph database queries"
        src="wasm-ferris.png"
        id="wasm-ferris"
      />
   
      <div id="bottom-div-info">
      <h3 className="right-column-heading" >Recent Talks</h3>
        <p className="information2">
          I was privileged to give a talk recently as part of the Ethiq Speakers Series on
          Rust and WebAssembly titled "WebAssembly: The future is here..."
          </p>
          <br></br>
          <p className="information2"> I enjoy interacting with the larger development community,
            and discussing all the exciting places web development is going.
            Let's connect on LinkedIn to start a conversation!
            <br></br>
            <a href="https://www.linkedin.com/in/taylorburrington/">
            <FontAwesomeIcon className="right-icon" id="linkedIn" icon={faLinkedin}/>
          </a><i className="arrow left"></i>
        </p>
      </div>
    </div>
  </div>
  //  </Layout>
)
