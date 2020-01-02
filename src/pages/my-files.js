import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout.js"

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h1> Table File </h1>

        <table>
          <thead>
            <tr>
              <th>relativePath</th>
              <th>extension</th>
              <th>birth Time</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.relativePath}</td>
                <td>{node.extension}</td>
                <td>{node.birthTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          birthTime(fromNow: true)
          relativePath
          extension
        }
      }
    }
  }
`
