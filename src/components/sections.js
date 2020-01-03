import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allDirectory(filter: { name: { ne: "posts" } }) {
        edges {
          node {
            name
          }
        }
      }
    }
  `)
  return (
    <ul>
      {data.allDirectory.edges.map(({ node }, ind) => (
        <li key={ind}>
          <Link to={`/${node.name}`}>{node.name}</Link>
        </li>
      ))}
    </ul>
  )
}
