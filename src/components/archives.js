import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Archives = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark {
        group(field: fields___year) {
          fieldValue
          edges {
            node {
              frontmatter {
                title
              }
              fields {
                year
                month
              }
            }
          }
        }
      }
    }
  `)
  const cosatest = data.allMarkdownRemark.group.map(field =>{
      console.log(field.fieldValue)
      console.log(field.edges)
    return (
      <div>
        <h1>{field.fieldValue}</h1>
        <ul>
          {field.edges.map(({node})=> (<li>{node.frontmatter.title}</li>))}
        </ul>
      </div>
    )
  } )
  return (
    <div>
      <h1>Archives</h1>
      {cosatest}
    </div>
  )
}
export default Archives
