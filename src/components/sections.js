import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allDirectory(filter: { name: { nin: ["content", "imgs", "cover"] } }) {
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
      <li>
        <Link to="/">Todos</Link>
      </li>
      {data.allDirectory.edges.map(({ node }, ind) => (
        <li key={ind}>
          <Link to={`/${node.name}`}>{node.name.replace(/-/g, " ")}</Link>
        </li>
      ))}
    </ul>
  )
}
