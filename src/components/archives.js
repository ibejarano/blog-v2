import React, { useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { getYearAndMonth } from "../utils/helpers"
import styled from "styled-components"

const ArchivesWrapper = styled.div`
  background: #d5d5d5;
  border: 1px solid black;
  max-width: 300px;
  padding: 5px 25px;
`

const Dropdown = styled.div``

const DropdownHead = styled.div`
  :hover {
    background: #ccc;
  }
`

const DropdownList = styled.ul`
  display: ${props => (props.enabled ? "flex" : "none")};
  flex-flow: column nowrap;
  list-style-type: none;
`

const Archives = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: ASC }) {
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

  const postsByYearAndMonth = data.allMarkdownRemark.group.map((field, idx) => {
    const [year, month] = getYearAndMonth(field.fieldValue)
    return (
      <Dropdown key={idx} className="dropdown-wrapper">
        <DropdownHead
          onClick={() => unfoldList(idx)}
          className="dropdown-header"
        >
          <h4>
            {month} - {year}
          </h4>
        </DropdownHead>
        <DropdownList enabled={idx == currentDate} className="dropdown-list">
          {field.edges.map(({ node }) => (
            <li key={node.frontmatter.title} className="dropdown-list-item">
              <Link to={node.fields.slug}>
                {node.frontmatter.date} - {node.frontmatter.title}
             </Link>
            </li>
          ))}
        </DropdownList>
      </Dropdown>
    )
  })
  return (
    <ArchivesWrapper>
      <h2>Archives</h2>
      {postsByYearAndMonth}
    </ArchivesWrapper>
  )
}
export default Archives
