import React, { useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { getYearAndMonth } from "../utils/helpers"

const Archives = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: ASC }) {
        group(field: fields___yearAndMonth) {
          fieldValue
          edges {
            node {
              frontmatter {
                title
                date(formatString: "DD")
              }
              fields {
                slug
              }
            }
          }
        }
      }
    }
  `)

  const [currentDate, setCurrentDate] = useState(-1)

  const unfoldList = i => {
    i == currentDate ? setCurrentDate(-1) : setCurrentDate(i)
  }

  const postsByYearAndMonth = data.allMdx.group.map((field, idx) => {
    const [year, month] = getYearAndMonth(field.fieldValue)
    return (
      <div key={idx} className="dropdown-wrapper">
        <div onClick={() => unfoldList(idx)} className="dropdown-header">
          <h4>
            {month} - {year}
          </h4>
        </div>
        <ul enabled={idx == currentDate} className="dropdown-list">
          {field.edges.map(({ node }) => (
            <li key={node.frontmatter.title} className="dropdown-list-item">
              <Link to={node.fields.slug}>
                {node.frontmatter.date} - {node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h2>Archives</h2>
      {postsByYearAndMonth}
    </div>
  )
}
export default Archives
