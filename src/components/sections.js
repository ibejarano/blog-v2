import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { css } from "@emotion/core"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allDirectory(filter: { name: { nin: ["content", "imgs"] } }) {
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
        grid-area: section;
        display: flex;
        flex-flow: row no-wrap;
        list-style-type: none;
        li {
          margin: 0 auto;
        }
      `}
    >
        <li
          css={css`
            border-bottom: 2px solid blue;
            transition: 0.4s ease-in-out;
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
            to='/'
          >
    Todos
          </Link>
        </li>
      {data.allDirectory.edges.map(({ node }, ind) => (
        <li
          key={ind}
          css={css`
            border-bottom: 2px solid blue;
            transition: 0.4s ease-in-out;
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
