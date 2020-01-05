import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import PostCard from "../components/post-card.js"
import Sections from "../components/sections"
import SEO from '../components/seo'

export default ({ data }) => (
  <Layout>
  <SEO title={`Blog de Ignacio Bejarano`} description={`Pagina Principal`}  />
    <div>
      <h1
        css={css`
          display: inline-block;
          border-bottom: 1px solid;
        `}
      >
              Hola! Bienvenid@ a mi blog!
      </h1>
      <Sections />
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }, ind) => (
        <PostCard key={ind} post={node} />
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
            section
          }
          timeToRead
        }
      }
    }
  }
`
