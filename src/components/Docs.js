import React from 'react';
import picture from '../../static/exampleForTaylor.png'
export default()=> (
    <div>
        <h1 className="doc-heading">Installation</h1>
        <p className="docs-paragraph">Mogwai can be easily installed using npm:</p>
        <div className="code-div"><span><code className="code-snippet">{"npm i mogwaijs"}</code></span></div>
        <h1 className="doc-heading">Syntax</h1>
        <p className="docs-paragraph">Mogwai is a fully function Object-Graph-Mapper(OGM) providing a variety of 
            functions like CREATE, MATCH, ADD, DELETE. All of these functions can be promptly called
            through familiar javascript syntax by using the method on a particular model.
            For example: 
          <div className="code-div"><code className="code-snippet"> <pre>{`VertexModel.prototype.createVertex = function create(props = {}) {
  if (typeof props !== 'object') {
      throw new Error ("Error: Schema must be an object!");
  }
  let qString = "g.addV('\${this.label}')";
  qString += this.addPropsFromObj(props);
  
  return mogwai.client.submit(qString, props);
}`}</pre></code></div> 
        </p>
        <h1 className="doc-heading">Under The Hood</h1>
        <p className="docs-paragraph">Under the Hood, Mogwai uses the popular query language Gremlin to perform the complex queries
            necessary to traverse a graph database: 

            <div className="code-div"><code className="code-snippet"> <pre> {`qString += '.outV().as("source").select("source", "target")';`}</pre></code></div> 
        </p>
        <h1 className="doc-heading">Demo</h1>
        <p className="docs-paragraph">The main advantage of Mogwai is that it provides Javascript accessbility to a variety of cloud hosted databases. 
            In the following example, Mogwai is being used to query an Azure Cosmos database:
            <a href="https://medium.com/@stallings.eric/introducing-mogwaijs-f5a356d55c08"><img src={picture}/></a>
        </p>
    </div>
)