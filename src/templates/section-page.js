import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import PostCard from "../components/post-card.js"
export default ({ data }) => (
  <Layout
    title={data.allMarkdownRemark.edges[0].node.fields.section}
    description={`posts about ${data.allMarkdownRemark.edges[0].node.fields.section}`}
  >
    <section className="content-body">
      <h1
        css={css`
          display: inline-block;
          border-bottom: 1px solid;
        `}
      >
        {data.allMarkdownRemark.edges[0].node.fields.section}
      </h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }, ind) => (
        <PostCard key={ind} post={node} />
      ))}
    </section>
  </Layout>
)

export const query = graphql`
  query($sectionName: String!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fields: { section: { eq: $sectionName } } }
    ) {
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
          timeToRead
        }
      }
    }
  }
`
