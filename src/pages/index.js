import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import PostCard from "../components/post-card.js"
export default ({ data }) => (
  <Layout>
    <div>
      <h1
        css={css`
          display: inline-block;
          border-bottom: 1px solid;
        `}
      >
              Blog de #100DaysOfGatsby
      </h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <PostCard post={node} />
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY", locale: "es-ES")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
