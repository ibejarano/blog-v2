import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { css } from "@emotion/core"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allDirectory(filter: { name: { nin: ["posts", "imgs"] } }) {
        edges {
          node {
            name
          }
        }
      }
    }
  `)
  return (
    <ul
      css={css`
        display: flex;
        flex-flow: column wrap;
        list-style-type: none;
        margin: 0;
        height: 100vh;
        position: fixed;
        padding: 10px 0;
        background: white;
        border-right: 10px solid blue;
        li {
          margin: 0 auto;
          top: 10vh;
        }
        li:first-child {
          font-size: 1.25rem;
          border-bottom: 4px solid blue;
        }
      `}
    >
      <li> Secciones </li>
      {data.allDirectory.edges.map(({ node }, ind) => (
        <li
          key={ind}
          css={css`
            border-bottom: 2px solid blue;
            padding: 1rem;
            transition: 0.4s ease-in-out;
            width: 100%;
            :hover {
              background: lightblue;
            }
          `}
        >
          <Link
            css={css`
              text-decoration: none;
              color: inherit;
              text-transform: capitalize;
            `}
            to={`/${node.name}`}
          >
            {node.name.replace(/-/g, " ")}
          </Link>
        </li>
      ))}
    </ul>
  )
}
