import React from "react"
import Layout from "../components/layout"

export default ({location}) => (
  <Layout location={location}>
    <div className="documentation-sidebar">
    <h3 className="main-heading">Documentation</h3>
    <b className="scroll-header">Using MogwaiJS</b>
    <ul className="documentation-topics-list">
      <li>Installation</li>
      <li>Syntax</li>
      <li>Under The Hood</li>
      <li>Demo</li>
    </ul>
    </div>
  </Layout>
)